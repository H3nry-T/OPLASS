import { Types } from "mongoose";

export interface IUser extends Document {
  _id: number;
  user_firstName: string;
  user_lastName: string;
  user_username: string;
  user_email: string;
  user_company:
    | {
        _id: Types.ObjectId;
      }[]
    | "none";
  user_createdOn: Date;
  user_address: {
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_region?: string;
    address_country?: string;
    address_postcode?: string;
  };
  user_phoneNumbers: {
    home?: string;
    work?: string;
    mobile?: string;
  };
  user_role: "developer" | "admin" | "manager";
  user_teams: string[];
  user_deletedOn?: Date;
  user_deletedBy?: string;
  user_isDeleted: boolean;
  user_ticketsCreated: number;
  user_bugsRaised: number;
  user_ticketsCompleted: number;
  user_bugsResolved: number;
  user_lastActive: Date;
  user_icon: string;
  user_avatar: string;
  user_personalNotes: {
    title: string;
    content: string;
  }[];
  user_personalProjects: { projectId: Types.ObjectId }[];
  license: {
    user_licenseType:
      | "free"
      | "personal"
      | "business"
      | "corporation"
      | "charity";
    user_licenseExpiryDate: Date | null;
  }[];
  user_githubAccount?: string;
}

export interface IProject extends Document {
  _id: number;
  project_title: string;
  project_description: string;
  project_createdBy: Types.ObjectId | IUser;
  project_lead: string;
  project_team: {
    _id: Types.ObjectId | IUser;
    role: "developer" | "admin" | "manager" | "tester";
  }[];
  project_company: Types.ObjectId[] | ICompany[];
  project_createdOn: Date;
  project_lastUpdated: Date;
  project_bugCount: number;
  project_deadline?: Date;
  project_tags?: string[];
  project_outstandingKanbans: number;
  project_completedKanbans: number;
  project_status:
    | "planning"
    | "development"
    | "review"
    | "bug fixing"
    | "testing"
    | "production"
    | "completed";
  project_admins: Types.ObjectId[] | IUser[];
  project_deletedOn?: Date;
  project_deletedBy?: string;
  project_isDeleted: boolean;
  project_priority: "low" | "medium" | "high" | "critical";
  project_department?: string[];
  project_githubRepo?: string;
  project_notes: {
    noteTitle: string;
    noteContent: string;
    noteCreatedBy: Types.ObjectId;
    noteType: "comment" | "warning" | "update" | "fix" | "idea" | "report";
  }[];
  project_alertMessagesFromAdmin: {
    alertMessageTitle: string;
    alertMessageContent: string;
    alertMessageCreatedBy: Types.ObjectId;
  }[];
}

interface TeamMember extends IUser {
  role: "developer" | "manager" | "admin";
}

export interface ICompany extends Document {
  company_name: string;
  company_staff: { employee_id: Types.ObjectId }[];
  company_address: {
    address_line1: string;
    address_line2: string;
    address_city: string;
    address_region: string;
    address_country: string;
    address_postcode: string;
  };
  company_phoneNumbers: { key: string; value: string }[];
  company_numberOfEmployees: number;
  company_emails: { emailName: string; emailAddress: string }[];
  company_createdOn: Date;
  company_activeTickets: number;
  company_activeBugs: number;
  company_activeProjects: { projectId: Types.ObjectId }[];
  company_broadcastMessages: {
    broadcastTitle: string;
    broadcastContent: string;
  }[];
  company_licenseType:
    | "free"
    | "personal"
    | "business"
    | "corporation"
    | "charity";
  company_licenseExpiryDate: Date | null;
  company_github?: string;
  company_isDeleted: boolean;
}

export interface IBugs extends Document {
  bug_title: string;
  bug_createdOn: Date;
  bug_completedOn?: Date;
  bug_lead?: Types.ObjectId;
  bug_team: { _id: Types.ObjectId }[];
  bug_users: { _id: Types.ObjectId }[];
  bug_correspondingTickets: { _id: Types.ObjectId }[];
  bug_description: string;
  bug_tags?: string[];
  bug_status: "pending" | "unresolved" | "under review" | "resolved";
  bug_assignedAdmins?: { _id: string }[];
  bug_deletedOn?: Date;
  bug_deletedBy?: Types.ObjectId;
  bug_priority: "low" | "medium" | "high" | "critical";
  bug_lastUpdated: Date;
  bug_notes?: {
    noteTitle: string;
    noteContent: string;
    noteCreatedBy: Types.ObjectId;
  }[];
  bug_logo?: string;
  bug_images?: { image: string }[];
  bug_signedOffBy?: { signedOffName: String; signedOffDate: Date }[];
  bug_emailAlerts: boolean;
  bug_isDeleted: boolean;
}

export interface IKanban extends Document {
  kanban_title: string;
  kanban_description: string;
  kanban_createdOn: Date;
  kanban_createdBy: Types.ObjectId;
  kanban_associatedProject: Types.ObjectId;
  kanban_lead: Types.ObjectId;
  kanban_company: Types.ObjectId;
  kanban_team: {
    _id: Types.ObjectId;
    role: "developer" | "admin" | "manager" | "tester";
  }[];
  kanban_users: { _id: Types.ObjectId }[];
  kanban_bugCount: number;
  kanban_bugs: Types.ObjectId[];
  kanban_deadline: Date | null;
  kanban_tags: string[];
  kanban_status:
    | "raised"
    | "in progress"
    | "on hold"
    | "bug fixing"
    | "cancelled"
    | "deleted"
    | "testing"
    | "production"
    | "completed";
  kanban_assignedAdmin: Types.ObjectId;
  kanban_completedOn: Date | null;
  kanban_deletedOn: Date | null;
  kanban_deletedBy: Types.ObjectId;
  kanban_priority: "low" | "medium" | "high" | "critical";
  kanban_departments: string[];
  kanban_lastUpdated: Date;
  kanban_gitHubBranch: string;
  kanban_notes: { noteTitle: string; noteContent: string }[];
  kanban_logo: string;
  kanban_images: { image: string; alt: string }[];
  kanban_isDeleted: boolean;
}
