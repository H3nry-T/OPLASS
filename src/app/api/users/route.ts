import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@backend/mongoDBConnect";
import User from "@backend/mongooseModels/userModel";
import { IUser } from "@/types/types";

export async function GET() {
  await dbConnect();
  const users = await User.find({});

  return NextResponse.json({
    message: "connected",
    content: users,
  });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const { firstName, lastName, email, isAdmin, company }: IUser =
    await req.json();
  const addUser = new User({ firstName, lastName, email, isAdmin, company });

  await addUser.save();

  return NextResponse.json({
    message: "posted",
  });
}
