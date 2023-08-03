import mongoose, { Schema, Document } from "mongoose";
import { IBugs } from "@/types/types";

const BugSchema = new mongoose.Schema<IBugs>({
  bug_title: {
    type: String,
    required: [true, "Bug report must have a title"],
  },
  bug_createdOn: {
    type: Date,
    default: Date.now,
  },
  bug_completedOn: {
    type: Date,
  },
  bug_lead: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  bug_team: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Team",
        },
      },
    ],
    default: [],
  },
  bug_users: {
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
  bug_correspondingTickets: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ticket",
        },
      },
    ],
    required: [
      true,
      "Bug must be tied to at least 1 ticket from the Kanban board",
    ],
  },
  bug_description: {
    type: String,
    required: [true, "Bug report must have a description"],
  },
  bug_tags: {
    type: [String],
  },
  bug_status: {
    type: String,
    enum: ["pending", "unresolved", "under review", "resolved"],
  },
  bug_assignedAdmins: {
    type: [
      {
        _id: {
          type: String,
        },
      },
    ],
  },
  bug_deletedOn: Date,
  bug_deletedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bug_priority: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    default: "medium",
  },
  bug_lastUpdated: {
    type: Date,
    default: Date.now,
  },
  bug_notes: {
    type: [
      {
        noteTitle: {
          type: String,
          required: [true, "Notes for bugs require a title"],
        },
        noteContent: {
          type: String,
          required: [true, "Notes for bugs require content"],
        },
        noteCreatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  bug_logo: {
    type: String,
  },
  bug_images: {
    type: [
      {
        image: {
          type: String,
          required: true,
          minLength: 5,
        },
        altText: {
          type: String,
          required: [
            true,
            "Please provide some descriptive alt text for the image",
          ],
          minLength: 5,
        },
      },
    ],
  },
  bug_signedOffBy: {
    type: [
      {
        signedOffName: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: [true, "Signing off a bug requires a name"],
        },
        signedOffDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  bug_emailAlerts: {
    type: Boolean,
    default: false,
  },
  bug_isDeleted: {
    type: Boolean,
    default: false,
  },
});

const BugReport = mongoose.model<IBugs>("BugReport", BugSchema);
export default BugReport;
