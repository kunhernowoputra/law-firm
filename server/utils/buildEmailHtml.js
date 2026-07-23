const INK = '#14181c'
const INK_2 = '#3c434a'
const ACCENT = '#15559c'
const ACCENT_SOFT = '#eaf0f8'
const BORDER = '#e3e6e9'

const renderRow = ({ label, value }) => `
    <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font:600 12px/1.4 Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:${INK_2};width:130px;vertical-align:top;">${label}</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font:400 14px/1.6 Arial,sans-serif;color:${INK};vertical-align:top;">${value}</td>
    </tr>`

export const buildEmailHtml = ({ heading, fields }) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f6;padding:32px 16px;">
    <tr>
        <td align="center">
            <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid ${BORDER};border-radius:8px;overflow:hidden;">
                <tr>
                    <td style="background:${INK};padding:20px 28px;">
                        <div style="font:600 16px/1.3 Georgia,'Times New Roman',serif;color:#ffffff;">Ridwan &amp; Co. Law Office</div>
                        <div style="font:400 12px/1.4 Arial,sans-serif;color:#b9c1ca;margin-top:2px;">Notifikasi Website</div>
                    </td>
                </tr>
                <tr>
                    <td style="background:${ACCENT_SOFT};padding:14px 28px;border-bottom:1px solid ${BORDER};">
                        <span style="font:600 15px/1.4 Arial,sans-serif;color:${ACCENT};">${heading}</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding:8px 28px 4px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            ${fields.map(renderRow).join('')}
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:18px 28px 24px;">
                        <span style="font:400 12px/1.5 Arial,sans-serif;color:${INK_2};">Balas email ini untuk menghubungi langsung pengirim.</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`
