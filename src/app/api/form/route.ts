import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx4cickBz38ZnmWubpeSKJvuzQIu0Jlo4OEhVU5tahM4Q2oBuH8NYQqK-ikD7YBDNbS/exec";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      source: "portfolio-contact-form",
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to send message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 }
    );
  }
}
