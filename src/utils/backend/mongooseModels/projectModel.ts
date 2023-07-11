import { IProject, TeamMember, IUser } from "@/types/types";
import mongoose, { Schema, SchemaType } from "mongoose";

const ProjectSchema = new mongoose.Schema<IProject>({
  project_title: {
    type: String,
    required: [true, "Project requires a unique name or title."],
    minLength: [3, "min value of 3 characters"],
    unique: true
  },
  project_description: {
    type: String,
    required: [true, "Project description is required"],
  },
  project_createdBy: { type: { type: Schema.Types.ObjectId, ref: "User" } },
  project_lead : {
    type: String,
    required: [true, "Project needs a lead developer assigned"]
  },

  project_team: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        role: {
          type: String,
          enum: ["developer", "admin", "manager", "tester", ],
        },
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
  project_company: {
    type: [
      {_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      }}
    ]
  },
  project_CreatedOn: {
    type: Date,
    default: Date.now,
  },
  project_lastUpdated: {
    type: Date,
    default: Date.now,
  },
  project_bugCount: {
    type: Number,
    default: 0
  },
  project_deadline: {
    type: Date
  },
  project_tags: {
    type: [String]
  },
  project_outstandingKanbans: {
    type: Number,
    default: 0
  },
  project_completedKanbans: {
    type: Number,
    default: 0
  },
  project_status: {
    type: String,
    enum: ["planning", "development", "review","bug fixing", "testing", "production", "completed"],
    default: "planning"
  },
  project_admins: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User',
  validate: {
    validator: async(value: mongoose.Schema.types.ObjectId) => {
      const selectedUser = await mongoose.model<IUser>('User').findById(value);
      return selectedUser?.role === 'admin';
    },
    message: 'The user assigned needs to have the role of admin'
  }}],
    default: []

  },
  project_deletedOn: Date,
  project_deletedBy: String,
  project_priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  project_departments: [String],
  project_gitHubRepo: String
});

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
