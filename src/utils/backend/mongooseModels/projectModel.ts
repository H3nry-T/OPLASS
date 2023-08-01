import { IProject, TeamMember, IUser } from "@/types/types";
import mongoose, { Schema, SchemaType } from "mongoose";

const ProjectSchema = new mongoose.Schema<IProject>({
  project_title: {
    type: String,
    required: [true, "Project requires a unique name or title."],
    minLength: [3, "min value of 3 characters"],
    unique: true,
  },
  project_description: {
    type: String,
    required: [true, "Project description is required"],
  },
  project_createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  project_lead: {
    type: String,
    required: [true, "Project needs a lead developer assigned"],
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
          enum: ["developer", "admin", "manager", "tester"],
        },
      },
    ],
    default: [],
  },
  project_company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  project_createdOn: {
    type: Date,
    default: Date.now,
  },
  project_lastUpdated: {
    type: Date,
    default: Date.now,
  },
  project_bugCount: {
    type: Number,
    default: 0,
  },
  project_deadline: {
    type: Date,
  },
  project_tags: {
    type: [String],
  },
  project_outstandingKanbans: {
    type: Number,
    default: 0,
  },
  project_completedKanbans: {
    type: Number,
    default: 0,
  },
  project_status: {
    type: String,
    enum: [
      "planning",
      "development",
      "review",
      "bug fixing",
      "testing",
      "production",
      "completed",
    ],
    default: "planning",
  },
  project_admins: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        validate: {
          validator: async (value: mongoose.Schema.Types.ObjectId) => {
            const selectedUser = await mongoose
              .model<IUser>("User")
              .findById(value);
            return selectedUser?.user_role === "admin";
          },
          message: "The user assigned needs to have the role of admin",
        },
      },
    ],
    default: [],
  },
  project_deletedOn: Date,
  project_deletedBy: String,
  project_isDeleted: {
    type: Boolean,
    default: false,
  },
  project_priority: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    default: "medium",
  },
  project_departments: [String],
  project_githubRepo: String,
  project_notes: {
    type: [
      {
        noteTitle: {
          type: String,
          required: [true, "Project notes require a title"],
          minLength: 3,
        },
        noteContent: {
          type: String,
          required: [true, "Project notes require some content"],
          minLength: 5,
        },
        noteCreatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        noteType: {
          type: String,
          required: [true, "Project note requires a type"],
          enum: ["comment", "warning", "update", "fix", "idea", "report"],
          default: "comment",
        },
      },
    ],
    default: [],
  },
  project_alertMessagesFromAdmin: {
    type: [
      {
        alertMessageTitle: {
          type: String,
          required: [true, "Alert Message must have a title"],
        },
        alertMessageContent: {
          type: String,
          required: [true, "Alert message needs to have a message"],
          minLength: 3,
        },
        alertMessageCreatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          validate: {
            validator: async (value: mongoose.Schema.Types.ObjectId) => {
              const selectedUser = await mongoose
                .model<IUser>("User")
                .findById(value);
              return selectedUser?.user_role === "admin";
            },
            message: "Alerts can only be posted by admin",
          },
          default: [],
        },
      },
    ],
  },
});

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
