import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@backend/mongoDBConnect";
import Project from "@/utils/backend/mongooseModels/projectModel";

export function GET(req: NextRequest) {
  return NextResponse.json({ data: "hello there" });
}

export async function POST(request: NextRequest) {
  await dbConnect();

  //get the body
  const body = await request.json();

  //insert into database
  console.log(body);
  const newProject = new Project(body);

  await newProject.save();

  //show what we inserted
  return NextResponse.json({ data: body });
}
