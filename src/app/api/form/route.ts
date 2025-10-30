import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.json();
  const name = formData.name;
  const email = formData.email;
  const subject = formData.subject;
  const message = formData.message;

  console.log({ name, email, subject, message });
  return NextResponse.json({ name, email, subject, message });
}
