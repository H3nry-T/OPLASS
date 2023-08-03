import mongoose from "mongoose";
import { IKanban, TeamMember } from "../../../types/types";

const KanbanSchema: mongoose.Schema<IKanban> = new mongoose.Schema({
  kanban_title: {
    type: String,
    required: [true, "Kanban cards require a title"],
  },
  kanban_description: {
    type: String,
    required: [true, "Kanban cards require a description"],
    minLength: 8,
  },
  kanban_createdOn: {
    type: Date,
    default: Date.now,
  },
  kanban_createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  kanban_associatedProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  kanban_lead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  kanban_company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  kanban_team: {
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
  kanban_users: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    default: [],
  },
  kanban_bugCount: {
    type: Number,
    default: 0,
  },
  kanban_bugs: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bug",
      },
    ],
    default: [],
  },
  kanban_deadline: {
    type: Date || null,
    default: null,
  },
  kanban_tags: {
    type: [String],
  },
  kanban_status: {
    type: String,
    enum: [
      "raised",
      "in progress",
      "on hold",
      "bug fixing",
      "cancelled",
      "deleted",
      "testing",
      "production",
      "completed",
    ],
    default: "raised",
  },
  kanban_assignedAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
    required: true,
    validate: {
      validator: async function (
        value: mongoose.Schema.Types.ObjectId | null
      ): Promise<boolean> {
        if (value === null) {
          return true;
        }
        try {
          const userIsAdminCheck = await mongoose.model("User").findById(value);
          return userIsAdminCheck && userIsAdminCheck.user_role === "admin";
        } catch (error) {
          return false;
        }
      },
      message: "The assigned user must have their role set as admin",
    },
  },
  kanban_completedOn: {
    type: Date,
    default: null,
  },
  kanban_deletedOn: {
    type: Date,
    default: null,
  },
  kanban_deletedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  kanban_priority: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    default: "medium",
  },
  kanban_departments: {
    type: [String],
    default: [],
  },
  kanban_lastUpdated: {
    type: Date,
    default: Date.now,
  },

  kanban_gitHubBranch: {
    type: String,
  },
  kanban_notes: [
    {
      noteTitle: {
        type: String,
        required: [true, "Notes for kanban cards require a title"],
      },
      noteContent: {
        type: String,
        required: [true, "Notes for kanban cards require content"],
      },
    },
  ],

  kanban_logo: {
    type: String,
  },
  kanban_images: {
    type: [
      {
        image: {
          type: String,
          required: true,
          minLength: 5,
        },
        alt: {
          type: String,
          required: [
            true,
            "Please include some descriptive alt text for the image",
          ],
          minLength: 5,
        },
      },
    ],
  },
  kanban_isDeleted: {
    type: Boolean,
    default: false,
  },
});

KanbanSchema.pre<IKanban>("save", async function (next) {
  if (!this.kanban_assignedAdmin) {
    this.kanban_assignedAdmin = null;
  }
});

const KanbanTicket = mongoose.model<IKanban>("KanbanTicket", KanbanSchema);

export default KanbanTicket;
