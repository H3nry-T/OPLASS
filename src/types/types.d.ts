export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  company: string;
}
