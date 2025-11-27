import type { LucideIcon } from "lucide-react";

export interface DropdownItem {
  label: string;
  icon: LucideIcon;
  badge?: number | string;
//   isNew?: boolean;
  action : string
}
