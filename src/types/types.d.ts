export interface IUser extends Document {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

export interface IProject extends Document {
  project_title: string;
  project_description: string;
  project_createdBy: TypeScriptConfig.ObjectId | IUser;
  project_lead: String,
  project_team: {
    _id: Types.ObjectId | IUser;
    role: 'developer' | 'admin' | 'manager' | 'tester';
  }[];
  project_company: Types.ObjectId[] | ICompany[];
  project_createdOn: Date;
  project_lastUpdated: Date;
  project_bugCount: Number;
  project_deadline?: Date;
  project_tags?: String[];
  project_outstandingKanbans: Number;
  project_completedKanbans: Number;
  project_status: 'planning' | 'development' | 'review' | 'bug squashing' | 'testing' | 'production' | 'completed'
  project_admins: Type.ObjectId[] | IUser[];
  project_deletedOn?: Date;
  project_deletedBy?: String;
  project_priority: 'low' | 'medium' | 'high' | 'critical';
  project_department?: String[];
  project_githubRepo?: String;

  
}

interface TeamMember extends IUser {
  role: "developer" | "manager" | "admin";
}

export interface ICompany extends Document {

}
