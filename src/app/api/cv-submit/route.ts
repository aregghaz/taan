import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

type MailEnvironment = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

function readTextField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getMailEnvironment(): MailEnvironment | null {
  const host = process.env.SMTP_HOST?.trim();
  const portValue = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !portValue || !user || !pass) {
    return null;
  }

  const port = Number(portValue);

  if (!Number.isFinite(port)) {
    return null;
  }

  const secure =
    process.env.SMTP_SECURE?.trim() === 'true' ? true : port === 465;

  return {
    host,
    port,
    secure,
    user,
    pass,
    from: process.env.SMTP_FROM?.trim() || user,
    to: process.env.CV_RECEIVER_EMAIL?.trim() || user,
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = readTextField(formData, 'fullName');
    const email = readTextField(formData, 'email');
    const phone = readTextField(formData, 'phone');
    const role = readTextField(formData, 'role');
    const portfolio = readTextField(formData, 'portfolio');
    const message = readTextField(formData, 'message');

    if (!fullName || !email || !role || !message) {
      return NextResponse.json(
        {
          message:
            'Please fill in full name, email, role, and message before sending.',
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      );
    }

    const environment = getMailEnvironment();

    if (!environment) {
      return NextResponse.json(
        {
          message:
            'Mail delivery is not configured yet. Add the SMTP environment variables and try again.',
        },
        { status: 500 }
      );
    }

    const fileEntry = formData.get('cvFile');
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [];

    if (fileEntry instanceof File && fileEntry.size > 0) {
      const contentType = fileEntry.type || '';

      if (
        contentType &&
        !ALLOWED_FILE_TYPES.has(contentType)
      ) {
        return NextResponse.json(
          {
            message: 'Only PDF, DOC, and DOCX files are supported.',
          },
          { status: 400 }
        );
      }

      if (fileEntry.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            message: 'The attached CV must be smaller than 8MB.',
          },
          { status: 400 }
        );
      }

      attachments.push({
        filename: fileEntry.name,
        content: Buffer.from(await fileEntry.arrayBuffer()),
        contentType: contentType || undefined,
      });
    }

    const transporter = nodemailer.createTransport({
      host: environment.host,
      port: environment.port,
      secure: environment.secure,
      auth: {
        user: environment.user,
        pass: environment.pass,
      },
    });

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeRole = escapeHtml(role);
    const safePortfolio = escapeHtml(portfolio || 'Not provided');
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

    await transporter.sendMail({
      from: environment.from,
      to: environment.to,
      replyTo: email,
      subject: `CV submission: ${fullName} - ${role}`,
      text: [
        `Full name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Role: ${role}`,
        `Portfolio: ${portfolio || 'Not provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 20px;">New CV submission</h2>
          <p><strong>Full name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Role:</strong> ${safeRole}</p>
          <p><strong>Portfolio:</strong> ${safePortfolio}</p>
          <p><strong>Message:</strong><br />${safeMessage}</p>
        </div>
      `,
      attachments,
    });

    return NextResponse.json({
      message: 'Your profile has been sent successfully.',
    });
  } catch (error) {
    console.error('CV submission error', error);

    return NextResponse.json(
      {
        message:
          'Something went wrong while sending your profile. Please try again.',
      },
      { status: 500 }
    );
  }
}
