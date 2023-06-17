import { NextResponse } from "next/server";
import User from "../../mongooseModels/userModel";
import dbConnect from "../../utils/mongoDBConnect";

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
