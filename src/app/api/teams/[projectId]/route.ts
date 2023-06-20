import Project from "@/utils/backend/mongooseModels/projectModel";
import dbConnect from "@backend/mongoDBConnect";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { projectId } }: { params: { projectId: string } }
) {
  //   const requestedProjectId = params;
  console.log(projectId);
  try {
    await dbConnect();
    const projectTeam = await Project.find({ _id: projectId }).select(
      "projectTeam"
    );

    return NextResponse.json({
      content: projectTeam,
    });
  } catch (err: any) {
    NextResponse.json({ content: err });
    console.error(err);
  }
}

export async function PATCH(
  req: NextRequest,
  { params: { projectId } }: { params: { projectId: string } }
) {
  try {
    await dbConnect();

    console.log(projectId);

    const { projectTeam } = await req.json();

    console.log(projectTeam);
    const editedProject = await Project.findByIdAndUpdate(
      projectId,
      { $push: { projectTeam: { $each: projectTeam } } },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      content: editedProject,
    });
  } catch (err: any) {
    console.error(err);
  }
}
