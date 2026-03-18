import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2).max(80),
  email:   z.string().email(),
  subject: z.string().max(120).optional(),
  message: z.string().min(10).max(2000),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input', details: parsed.error.issues }, { status: 400 })

  const { name, email, subject, message } = parsed.data

  // If Resend is configured, send email
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'
      const toEmail   = process.env.CONTACT_TO_EMAIL   ?? 'viktor@mentalitafoundera.sk'

      await resend.emails.send({
        from:    `Mentalita Foundera <${fromEmail}>`,
        to:      toEmail,
        replyTo: email,
        subject: `Nová správa: ${subject ?? 'Kontaktný formulár'} — od ${name}`,
        html: `
          <h2>Nová správa z webu mentalitafoundera.sk</h2>
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Predmet:</strong> ${subject}</p>` : ''}
          <hr />
          <p><strong>Správa:</strong></p>
          <p style="white-space:pre-line">${message}</p>
        `,
      })

      // Auto-reply
      await resend.emails.send({
        from:    `Viktor Štefanák <${fromEmail}>`,
        to:      email,
        subject: 'Dostal som tvoju správu 👋',
        html: `
          <p>Ahoj ${name},</p>
          <p>Ďakujem za správu! Ozvem sa ti do 24–48 hodín počas pracovných dní.</p>
          <p>Viktor</p>
          <hr/>
          <p style="font-size:12px;color:#999">Mentalita Foundera · mentalitafoundera.sk</p>
        `,
      })
    } catch (err) {
      console.error('[contact] Resend error:', err)
      // Don't fail the request — message intent was recorded
    }
  } else {
    // Development: just log
    console.log('[contact] New message (Resend not configured):', { name, email, subject, message })
  }

  return NextResponse.json({ ok: true })
}
