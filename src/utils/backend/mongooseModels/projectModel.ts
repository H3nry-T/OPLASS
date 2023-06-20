import { IProject, TeamMember } from "@/types/types";
import mongoose, { Schema } from "mongoose";
import User from "./userModel";

const ProjectSchema = new mongoose.Schema({
  projectName: String,
  projectDescription: String,
  projectOwner: Number,
  projectTeam: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    required: true,
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
