import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@backend/mongoDBConnect";
import Project from "@/utils/backend/mongooseModels/projectModel";

export async function GET(req: NextRequest) {
  await dbConnect();
  const projects = await Project.find({});
  return NextResponse.json({ projects });
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    //get the body
    const body = await request.json();
    console.log(body);
    // check the body is typeof IProject

    if (!body) {
      throw new Error("error in the body");
    }

    //insert into database
    const newProject = new Project(body);
    await newProject.save();

    //show what we inserted
    return NextResponse.json({ data: body });
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json(
      { error: e.message },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
