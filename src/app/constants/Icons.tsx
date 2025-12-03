import type { DropdownItem } from "@/types/constants.types";
import {
  User,
  Package,
  Heart,
  LogOut,
  LockKeyhole,
  Gift,
  MapPin,
  Wallet,
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  Tags,
} from "lucide-react";

/*----------------
  User Header drowpdown icons and  links
---------------------------------------------*/

export const ACCOUNT_MENU_ITEMS: DropdownItem[] = [
  { label: "My Profile", icon: User, action: "/user/profile" },
  { label: "Orders", icon: Package, action: "orders" },
  { label: "Wishlist", icon: Heart, badge: 1, action: "wishlist" },
  { label: "Logout", icon: LogOut, action: "logout" },
];

/*------
user Account tabs icons
-------------------------*/

export const Account_Dashboard_Tabs = [
  { name: "personalinfo", icon: User },
  { name: "changepassword", icon: LockKeyhole },
  { name: "Favorites", icon: Heart },
  { name: "Referral", icon: Gift },
  { name: "Address", icon: MapPin },
  { name: "Wallet", icon: Wallet },
];

/*------
admin sidbar icons
----------------------*/

export const adminMenu = [
  { icon: LayoutDashboard, label: "Overview", path: "overview" },
  { icon: Users, label: "Vendors ", path: "vendormanagement" },
  { icon: Users, label: "Users ", path: "usermanagement" },
  { icon: Tags, label: "Categories ", path: "categorymanagement" },
  { icon: BookOpen, label: "Books", path: "books" },
  { icon: Calendar, label: "Events", path: "events" },
  { icon: CreditCard, label: "Transactions", path: "transactions" },
];

/*------
vendor sidbar icons
-----------------------*/

export const vendorMenu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "overview" },
  { icon: BookOpen, label: "My Books", path: "mybooks" },
  { icon: Calendar, label: "Events", path: "events" },
];
