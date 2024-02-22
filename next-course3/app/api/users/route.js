import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

// export function GET() {
//   return NextResponse.json({ result: "hello" });
// }

export function GET() {
  const data = users;
  return NextResponse.json({ data });
}

export async function POST(req, res) {
  let { name, age, email } = await req.json();

  if (!name || !age || !email) {
    return NextResponse.json(
      { error: "required field not found", ok: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      res: "Credentials verified, User successfully logged in.",
      ok: true,
    },
    { status: 201 }
  );
}
