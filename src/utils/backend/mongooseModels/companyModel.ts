import { ICompany } from "@/types/types";
import mongoose, { Schema, SchemaType } from "mongoose";

const CompanySchema = new mongoose.Schema<ICompany>({
  company_name: {
    type: String,
    required: [true, "Company must have a name"],
  },
  company_staff: {
    type: [
      {
        employee_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    required: [true, "Company must have at least 1 employee"],
  },
  company_address: {
    address_line1: {
      type: String,
      required: [true, "Company address needs a first line"],
    },
    address_line2: {
      type: String,
      default: "",
    },
    address_city: {
      type: String,
      required: [true, "Company address needs a town, or city"],
    },
    address_region: {
      type: String,
      required: [true, "Company address needs a district, region or county"],
    },
    address_country: {
      type: String,
      required: [true, "Company address needs a Country"],
    },
    address_postcode: {
      type: String,
      required: [true, "Company address needs a postcode"],
    },
  },
  company_phoneNumbers: [
    {
      key: {
        type: String,
        required: [true, "Phone Number requires a name"],
      },
      value: {
        type: String,
        required: [true, "Phone number needs a valid Number"],
        minLength: 8,
        match: /^[0-9]+$/,
      },
      required: [true, "Company must have at least 1 phone number"],
    },
  ],
  company_numberOfEmployees: {
    type: Number,
    default: 1,
  },
  company_emails: [
    {
      emailName: {
        type: String,
        required: [true, "Email must have an department/name"],
      },
      emailAddress: {
        type: String,
        required: [true, "Must have a valid email address"],
        validate: {
          validator: (value: string) => {
            return /\S+@\.\S+/.test(value);
          },
          message: "Email address must be valid",
        },
      },
    },
  ],
  company_createdOn: {
    type: Date,
    default: Date.now,
  },
  company_activeTickets: {
    type: Number,
    default: 0,
  },
  company_activeBugs: {
    type: Number,
    default: 0,
  },
  company_activeProjects: [
    {
      projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    },
  ],
  company_broadcastMessages: {
    type: [
      {
        broadcastTitle: {
          type: String,
          required: [true, "Broadcast Message must have a title"],
        },
      },
      {
        broadcastContent: {
          type: String,
          required: [
            true,
            "Broadcast Message must have content of 5 characters or more",
          ],
          minLength: 5,
        },
      },
    ],
  },
  company_licenseType: {
    type: String,
    enum: ["free", "personal", "business", "corporation", "charity"],
    default: "free",
  },
  company_licenseExpiryDate: {
    type: Date || null,
    default: null,
  },
  company_github: String,
  company_isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Company =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);

export default Company;
