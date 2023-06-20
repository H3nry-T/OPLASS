import { IProject, TeamMember } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Project name is required"],
    minLength: [3, "min value of 3 characters"],
  },
  projectDescription: {
    type: String,
    required: [true, "Project description is required"],
  },
  projectOwner: { type: { type: Schema.Types.ObjectId, ref: "User" } },
  projectTeam: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    default: [],
    validate: {
      validator: (teamMembers: TeamMember[]) => {
        const roles = ["developer", "manager", "admin"];
        return teamMembers.every((member) => roles.includes(member.role));
      },
      message: "Invalid role for team member",
    },
  },
  projectCreatedAt: {
    type: Date,
    default: Date.now,
  },
  projectLastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
