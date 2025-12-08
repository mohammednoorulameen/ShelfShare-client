import type { AdminVerifyStatus } from "@/app/constants/status";
import type { LucideIcon } from "lucide-react";

export interface SidebarProfile {
  name: string;
  email: string;
  photo: string;
  status?: AdminVerifyStatus;  
}

export interface SidebarMenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface SidebarLayoutProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  menuItems: SidebarMenuItem[];
  profile: SidebarProfile;

  onLogout: () => void;
  title: string;
  logo?: React.ReactNode;
  disabled?: boolean;
}


// import type { AdminVerifyStatus } from "@/app/constants/status";
// import type { LucideIcon } from "lucide-react";


// export interface SidebarProfile {
//   name: string;
//   email: string;
//   photo: string;
//   status?: AdminVerifyStatus;  
// }



// export interface SidebarMenuItem {
//   icon: LucideIcon;
//   label: string;
//   path: string;
// }

// export interface SidebarLayoutProps {
//   collapsed: boolean;
//   setCollapsed: (val: boolean) => void;
//   menuItems: SidebarMenuItem[];
//   profile: {
//     name: string;
//     email: string;
//     photo: string;
//   };
//   onLogout: () => void;
//   title: string;
//   logo?: React.ReactNode;
//    disabled?: boolean;
// }
