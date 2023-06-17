import { NextResponse } from "next/server";
import dbConnect from "@backend/mongoDBConnect";
import User from "@backend/mongooseModels/userModel";

export async function GET() {
  await dbConnect();
  const users = await User.find({});

  return NextResponse.json({
    message: "connected",
    content: users,
  });
}

export async function POST() {
  return NextResponse.json({
    message: "posted",
  });
}
