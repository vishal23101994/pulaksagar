import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Pulak Sagar Website" <${process.env.EMAIL_USER}>`,
      to: "jinsharnam@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
          
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background:linear-gradient(90deg,#D4AF37,#F5E6A5,#D4AF37); padding:20px; text-align:center;">
              <h2 style="margin:0; color:#000; font-size:22px;">
                New Contact Message
              </h2>
              <p style="margin:5px 0 0; font-size:13px; color:#333;">
                Pulak Sagar Website
              </p>
            </div>

            <!-- Body -->
            <div style="padding:30px; color:#333;">

              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="font-weight:bold; width:120px;">Name:</td>
                  <td>${name}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;">Email:</td>
                  <td>
                    <a href="mailto:${email}" style="color:#D4AF37; text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:20px;">
                <p style="font-weight:bold; margin-bottom:8px;">Message:</p>
                <div style="background:#f9f9f9; padding:15px; border-left:4px solid #D4AF37; border-radius:6px; line-height:1.6;">
                  ${message}
                </div>
              </div>

            </div>

            <!-- Footer -->
            <div style="background:#111; color:#fff; padding:15px; text-align:center; font-size:12px;">
              © ${new Date().getFullYear()} Pulak Sagar Ji Website  
              <br/>
              This message was sent via the Contact Form.
            </div>

          </div>

        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}