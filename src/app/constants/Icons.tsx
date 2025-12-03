import type { DropdownItem } from "@/types/constants.types";
import { User, Package, Heart, LogOut, LockKeyhole, Gift, MapPin, Wallet } from "lucide-react";




/*------
this is Header drowpdown icons and  links
-------------*/

export const ACCOUNT_MENU_ITEMS: DropdownItem[] = [
  { label: "My Profile", icon: User, action: "/user/profile" },
  { label: "Orders", icon: Package, action: "orders" },
  { label: "Wishlist", icon: Heart, badge: 1, action: "wishlist" },
  { label: "Logout", icon: LogOut, action: "logout" },
];


export const Account_Dashboard_Tabs = [
  { name: "personalinfo", icon: User },
  { name: "changepassword", icon: LockKeyhole },  
  { name: "Favorites", icon: Heart },
  { name: "Referral", icon: Gift },
  { name: "Address", icon: MapPin },
  { name: "Wallet", icon: Wallet },
];
