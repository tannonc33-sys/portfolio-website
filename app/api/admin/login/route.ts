import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const password = formData.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const response = NextResponse.redirect(new URL("/admin", req.url));

  response.cookies.set("admin_auth", "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}