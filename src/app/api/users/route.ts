import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@backend/mongoDBConnect";
import User from "@backend/mongooseModels/userModel";
import { IUser } from "@/types/types";
import next, { NextApiHandler, NextApiResponse } from "next";

export async function GET() {
  await dbConnect();
  const users = await User.find({});

  return NextResponse.json({
    message: "connected",
    content: users,
  });
}

export async function POST(
  req: NextRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  try {
    await dbConnect();
    const newUser: IUser = await req.json();
    const addUser = new User(newUser);

    await addUser.save();

    return NextResponse.json({
      message: "posted",
    });
  } catch (error) {
    console.error("Error Occured", error);
    res.status(500).json({ error: "An error occured" });
  }
}
