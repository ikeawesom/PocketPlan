export const DEFAULT_ICON_SIZE = 30;

export type AuthMemberType = {
  email: string;
  password: string;
  uuid?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
};

export type UtilityType = {
  className?: string;
  children?: React.ReactNode;
  parentClassName?: string;
  dark?: boolean;
};

export type NavLinksType = {
  title: string;
  link: string;
  icon?: string;
};

export const DASHBOARD_NAV_LINKS = [
  { title: "Home", link: "/dashboard" },
  { title: "History", link: "/dashboard/history" },
  { title: "Payments", link: "/dashboard/about" },
  { title: "Planning", link: "/dashboard/blog" },
  { title: "Settings", link: "/dashboard/settings" },
] as NavLinksType[];
