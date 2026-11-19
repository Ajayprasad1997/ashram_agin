
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      country,
      phone,
      email,
      inquiryType,
      message,
      subscribe,
    } = await request.json();

    // Validate required fields
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const requiredEnv = [
      process.env.GMAIL_USER,
      process.env.GMAIL_APP_PASSWORD,
      process.env.CONTACT_RECEIVER,
    ];

    if (requiredEnv.some((value) => !value)) {
      throw new Error("Email configuration is missing.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const safe = (value: unknown) =>
      escapeHtml(String(value ?? "").trim());

    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email.trim(),
      subject: `New Website Enquiry - ${fullName}`,
      text: `
New Website Enquiry

Name: ${fullName}
Country: ${country || "Not provided"}
Phone: ${phone || "Not provided"}
Email: ${email}
Inquiry Type: ${inquiryType || "Not selected"}

Message:
${message}

Subscribe to Updates: ${subscribe ? "Yes" : "No"}
      `,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:25px;background:#f8fafc;">
          <div style="background:#294985;padding:25px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">Asram Website Enquiry</h2>
            <p style="color:#e2e8f0;margin-bottom:0;">You have received a new enquiry.</p>
          </div>

          <div style="background:white;padding:25px;border:1px solid #e2e8f0;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px;border-bottom:1px solid #eee;"><b>Name</b></td><td style="padding:10px;border-bottom:1px solid #eee;">${safe(fullName)}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #eee;"><b>Country</b></td><td style="padding:10px;border-bottom:1px solid #eee;">${safe(country || "Not provided")}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #eee;"><b>Phone</b></td><td style="padding:10px;border-bottom:1px solid #eee;">${safe(phone || "Not provided")}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #eee;"><b>Email</b></td><td style="padding:10px;border-bottom:1px solid #eee;">${safe(email)}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #eee;"><b>Inquiry Type</b></td><td style="padding:10px;border-bottom:1px solid #eee;">${safe(inquiryType || "Not selected")}</td></tr>
              
            </table>

            <h3 style="color:#294985;margin-top:25px;">Message</h3>
            <div style="background:#f8fafc;padding:18px;border-radius:8px;white-space:pre-wrap;">${safe(message)}</div>
          </div>

          <p style="color:#94a3b8;font-size:12px;text-align:center;">
            Sent from your website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
