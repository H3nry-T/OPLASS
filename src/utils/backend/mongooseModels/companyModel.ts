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
          ref: "User"
        },
      },
    ],
    required: [true, "Company must have at least 1 employee"]
  },
  company_address: {
    address_line1: {
      type: String,
    },
    address_line2: {
      type: String,
      default: ""
    },
    address_city: {
      type: String
    },
    address_region: {
      type: String
    },
    address_country: {
      type: String
    },
    address_postcode: {
      type: String
    },
    required: [true, 'Company must have an address']
  },
company_phoneNumbers: [{
    key: {
        type: String,
        required: [true, "Phone Number requires a name"],
    },
    value: {
        type: String,
        required: [true, "Phone number needs a valid Number"],
        minLength: 8,
        match: /^[0-9]+$/
    },
    required: [true, "Company must have at least 1 phone number"]
}],
  company_numberOfEmployees: {
    type: Number,
    default: 1
  },
  company_emails: [{
    name: {
        type: String,
        required: [true, "Email must have a name"]
    },
    emailAddress: {
        type: String,
        required: [true, "Must have a valid email address"],
        validate: {
            validator: (value: string) => {
                return /\S+@\.\S+/.test(value);
            },
            message: "Email address must be valid"
        }
    }
  }],
  company_createdOn: {
    type: Date,
    default: Date.now
  },
  company_activeTickets: {
    type: Number,
    default: 0
  },
  company_activeBugs: {
    type: Number,
    default: 0
  },
  company_activeProjects: [{
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
  }],
  company_broadcastMessages: {
    type: [
        {title: {
            type: String,
            required: [true, "Broadcast Message must have a title"]
        }}
    ]
  },
  company_licenseType: {
    type: String,
    enum: ["free", "personal", "business", "corporation", "charity"],
    default: "free"
  },
  company_licenseExpiryDate: {
    type: [Date, null],
    default: null
  },
  company_github: String

});

const Company =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);

export default Company;
