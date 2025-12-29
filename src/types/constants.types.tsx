import type { LucideIcon } from "lucide-react";

export interface DropdownItem {
  label: string;
  icon: LucideIcon;
  badge?: number | string;
  action: string;
}

export type StatusType =
  | "verified"
  | "blocked"
  | "rejected"
  | "pending"
  | "email_unverified"
  | "unknown";


  export interface StatusResult {
  label: string;
  type: StatusType;
}