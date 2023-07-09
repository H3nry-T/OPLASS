export interface IUser extends Document {
  _id: number;
  user_firstName: string;
  user_lastName: string;
  user_email: string;
  user_company: {
    _id: mongoose.Types.ObjectId;
  }[] | "none";
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
  license: {
    user_licenseType: "free" | "personal" | "business" | "corporation" | "charity";
    user_licenseExpiryDate: Date | null;
  }[];
  user_githubAccount?: string;

}

export interface IProject extends Document {
  _id: number,
  project_title: string;
  project_description: string;
  project_createdBy: TypeScriptConfig.ObjectId | IUser;
  project_lead: string,
  project_team: {
    _id: Types.ObjectId | IUser;
    role: 'developer' | 'admin' | 'manager' | 'tester';
  }[];
  project_company: Types.ObjectId[] | ICompany[];
  project_createdOn: Date;
  project_lastUpdated: Date;
  project_bugCount: number;
  project_deadline?: Date;
  project_tags?: string[];
  project_outstandingKanbans: number;
  project_completedKanbans: number;
  project_status: 'planning' | 'development' | 'review' | 'bug squashing' | 'testing' | 'production' | 'completed'
  project_admins: Type.ObjectId[] | IUser[];
  project_deletedOn?: Date;
  project_deletedBy?: string;
  project_priority: 'low' | 'medium' | 'high' | 'critical';
  project_department?: string[];
  project_githubRepo?: string;

  
}

interface TeamMember extends IUser {
  role: "developer" | "manager" | "admin";
}

export interface ICompany extends Document {
  company_name: string;
  company_staff: {employee_id: Types.ObjectId}[];
  company_address: {
    address_line1: string;
    address_line2: string;
    address_city: string;
    address_region: string;
    address_country: string;
    address_postcode: string;
  },
  company_phoneNumbers: {key: string; value: string}[];
  company_numberOfEmployees: number;
  company_emails: {emailName: string; emailAddress: string}[];
  company_createdOn: Date;
  company_activeTickets: number;
  company_activeBugs: number;
  company_activeProjects: {projectId: Types.ObjectId}[];
  company_broadcastMessages: {broadcastTitle: string; broadcastContent: string}[];
  company_licenseType: "free" | "personal" | "business" | "corporation" | "charity";
  company_licenseExpiryDate: Date | null;
  company_github?: string;
}
