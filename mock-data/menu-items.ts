import {
  Car,
  ClipboardList,
  Database,
  FileCheck,
  LayoutDashboard,
  Package,
  Store,
  UserRound,
  Users,
} from "lucide-react";

export const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Dealerships", icon: Store },
  { name: "Customers", icon: Users },
  { name: "All Orders", icon: ClipboardList, badge: null },
  { name: "Employees", icon: UserRound },
  { name: "Inventory", icon: Package, header: "Inventory management" },
  { name: "Fulfillment requests", icon: FileCheck, badge: "12" },
  { name: "Vehicle Directory", icon: Car, header: "Settings" },
  { name: "Services Database", icon: Database },
];
