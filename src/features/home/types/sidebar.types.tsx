import type { LucideIcon } from "lucide-react";


export interface SidebarMenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface SidebarLayoutProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  menuItems: SidebarMenuItem[];
  profile: {
    name: string;
    email: string;
    photo: string;
  };
  onLogout: () => void;
  title: string;
  logo?: React.ReactNode;
   disabled?: boolean;
}
