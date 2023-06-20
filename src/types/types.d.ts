export interface IUser extends Document {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

export interface IProject extends Document {
  projectName: string;
  projectDescription: string;
  projectOwner: number;
  projectTeam: TeamMember[];
  projectCreatedAt: Date;
  projectLastUpdated: Date;
}

interface TeamMember extends IUser {
  role: "developer" | "manager" | "admin";
}
