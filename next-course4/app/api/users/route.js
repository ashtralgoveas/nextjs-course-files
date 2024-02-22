import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 1. All Users Data
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

// 4. Create User

export async function POST(req, res) {
  let { id, name, age, email, password } = await req.json();

  if (!id || !name || !age || !email || !password) {
    return NextResponse.json(
      { result: "required field not found" },
      { status: 400 }
    );
  } else {
    users.push({ id, name, age, email, password });

    const updatedUserArray = users;
    const updatedData = JSON.stringify(updatedUserArray, null, 2);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData};`,
      "utf-8"
    );

    return NextResponse.json({ success: "User Successfully Created." });
  }
}

// 5. Update User
export async function PUT(req, res) {
  let { id, name, age, email, password } = await req.json();

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User Not Found" }, { status: 404 });
  }
  if (name) {
    users[userIndex].name = name;
  }
  if (age) {
    users[userIndex].age = age;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

  const updatedUserArray = users;
  const updatedData = JSON.stringify(updatedUserArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: "User Successfully Updated." });
}
