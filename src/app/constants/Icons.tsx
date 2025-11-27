import type { DropdownItem } from "@/types/constants.types";
import { User, Package, Heart, LogOut } from "lucide-react";





export const ACCOUNT_MENU_ITEMS: DropdownItem[] = [
  { label: "My Profile", icon: User, action: "profile" },
  { label: "Orders", icon: Package, action: "orders" },
  { label: "Wishlist", icon: Heart, badge: 1, action: "wishlist" },
  { label: "Logout", icon: LogOut, action: "logout" },
];
