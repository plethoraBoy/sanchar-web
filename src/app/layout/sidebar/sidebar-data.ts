// Define the NavItem type
export type NavItem = {
  icon: string;
  label: string;
  route: string;
  subItems?: NavItem[]; // Make subItems optional and an array of NavItem
};

// Define the navItems array with appropriate structure
export const navItems: NavItem[] = [
  {
    route: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    route: '/faq',
    icon: 'quiz',
    label: 'FAQ',
  },
];
