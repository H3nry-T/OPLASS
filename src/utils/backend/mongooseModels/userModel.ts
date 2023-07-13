import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "@/types/types";

const UserSchema: Schema<IUser> = new mongoose.Schema({
  user_firstName: {
    type: String,
    required: [true, "User must have a firstName"],
    minLength: [3, "firstName must have a minimum of 3 characters"],
    maxLength: [20, "firstName must be 20 characters or less"],
  },
  user_lastName: {
    type: String,
    required: [true, "User must have a lastName"],
    minLength: [3, "lastName must have a minimum of 3 characters"],
    maxLength: [20, "lastName must be 20 characters or less"],
  },
  user_username: {
    type: String,
    required: [
      true,
      "User must have a unique username & only contain: numbers, letters, underscores, hyphens",
    ],
    minLength: [5, "Username must be 5 characters or more"],
    maxLength: [16, "Username must be 16 characters or less"],
    match: /^[a-zA-Z0-9_-]{5,16}$/,
    unique: true,
  },
  user_email: {
    type: String,
    required: [true, "User must have an email address"],
    unique: true,
    validate: {
      validator: (value: string) => {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "Email address must be valid",
    },
  },
  user_company: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Company",
        },
      },
    ],
    required: false,
    default: "none",
  },
  user_createdOn: {
    type: Date,
    default: Date.now,
  },
  user_address: {
    address_line1: {
      type: String,
    },
    address_line2: {
      type: String,
    },
    address_city: {
      type: String,
    },
    address_region: {
      type: String,
    },
    address_country: {
      type: String,
    },
    address_postcode: {
      type: String,
    },
  },
  user_phoneNumbers: {
    type: {
      home: String,
      work: String,
      mobile: String,
    },
    validate: {
      validator: function (this: IUser) {
        const { home, work, mobile } = this.user_phoneNumbers;
        return !!home || !!work || !!mobile;
      },
      message: "At least one phone number is required",
    },
  },
  user_role: {
    type: String,
    enum: ["developer", "admin", "manager", "tester"],
    required: [
      true,
      'User must have a role: developer, admin, manager, "tester',
    ],
  },
  user_teams: [String],
  user_deletedOn: Date,
  user_deletedBy: String,
  user_isDeleted: {
    type: Boolean,
    default: false,
  },
  user_ticketsCreated: {
    type: Number,
    default: 0,
  },
  user_bugsRaised: {
    type: Number,
    default: 0,
  },
  user_ticketsCompleted: {
    type: Number,
    default: 0,
  },
  user_bugsResolved: {
    type: Number,
    default: 0,
  },
  user_lastActive: {
    type: Date,
    default: Date.now,
  },
  user_icon: {
    type: String,
  },
  user_avatar: {
    type: String,
    default:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
  },
  user_personalNotes: {
    type: [
      {
        title: {
          type: String,
          required: [true, "A note must have a title"],
        },
        content: {
          type: String,
          required: [true, "You cannot create an empty note."],
          minLength: 1,
        },
      },
    ],
    default: [],
  },
  user_personalProjects: [
    {
      projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    },
  ],
  license: {
    type: [
      {
        user_licenseType: {
          type: String,
          enum: ["free", "personal", "business", "corporation", "charity"],
          default: "free",
        },
        user_licenseExpiryDate: {
          type: [Date, null],
          default: null,
        },
      },
    ],
  },
  user_githubAccount: String,
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
