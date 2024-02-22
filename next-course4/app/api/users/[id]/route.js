import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 2. Get Specific User
export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user, ok: true });
}

// 3. Login
export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const {
    name: uName,
    email: uEmail,
    password: uPassword,
  } = users.find((u) => u.id === id);

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Successfully logged in" });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the input fields" });
  } else {
    return NextResponse.json({ result: "Invalid Credentials" });
  }
}

// 6. Delete User
export async function DELETE(req, res) {
  const { id } = await res.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  users.splice(userIndex, 1);

  const updatedUserArray = users;
  const updatedData = JSON.stringify(updatedUserArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: "User Successfully Deleted." });
}
