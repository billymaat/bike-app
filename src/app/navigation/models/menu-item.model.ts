export interface MenuItem {
  label: string;
  icon?: string; // Optional icon support
  route: string;
  children?: MenuItem[]; // For nested items
}