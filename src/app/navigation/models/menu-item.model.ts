import { UserRole } from "../../models/user";

export interface MenuItem {
  label: string;
  icon?: string;
  route: string;
  children?: MenuItem[];
  roles?: UserRole[]; // Add this line
}