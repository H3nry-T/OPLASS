import Project from "@/utils/backend/mongooseModels/projectModel";
import dbConnect from "@backend/mongoDBConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const teams = await Project.find({}, "projectTeam");
  return NextResponse.json({
    content: teams,
  });
}
