import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
    const { to, name, courseName, paymentId } = await req.json();

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
            from: 'Dedic Infotech <no-reply@dedicinfotech.com>',
            to,
            subject: `🎉 You're enrolled in ${courseName}!`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
                    <h1 style="color: #2563EB;">Welcome to Dedic Infotech! 🎓</h1>
                    <p>Hi <strong>${name}</strong>,</p>
                    <p>You've successfully enrolled in <strong>${courseName}</strong>.</p>
                    <div style="background: #f1f5f9; border-radius: 12px; padding: 20px; margin: 24px 0;">
                        <p style="margin: 0; color: #64748b; font-size: 14px;">Payment ID: <code>${paymentId}</code></p>
                    </div>
                    <a href="https://dedicinfotech.com/dashboard" 
                       style="display: inline-block; background: #2563EB; color: white; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: bold;">
                        Go to Dashboard
                    </a>
                    <p style="margin-top: 32px; color: #94a3b8; font-size: 13px;">
                        — Team Dedic Infotech
                    </p>
                </div>
            `,
        }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
});
