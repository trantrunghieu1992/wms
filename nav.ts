import {
  LayoutDashboard,
  Database,
  PackageSearch,
  Tags,
  Truck,
  Users,
  Warehouse,
  MapPin,
  Inbox,
  ClipboardCheck,
  Boxes,
  MoveDown,
  SlidersHorizontal,
  ScanLine,
  Send,
  ShoppingCart,
  PackageCheck,
  PackagePlus,
  Ship,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavLeaf = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavSection = {
  label: string;
  icon: LucideIcon;
  items: NavLeaf[];
};

export type NavEntry = NavLeaf | NavSection;

export function isSection(entry: NavEntry): entry is NavSection {
  return (entry as NavSection).items !== undefined;
}

export const NAV: NavEntry[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  {
    label: "Master Data",
    icon: Database,
    items: [
      { label: "Products", href: "/master-data/products", icon: PackageSearch },
      { label: "Categories", href: "/master-data/categories", icon: Tags },
      { label: "Suppliers", href: "/master-data/suppliers", icon: Truck },
      { label: "Customers", href: "/master-data/customers", icon: Users },
      { label: "Warehouses", href: "/master-data/warehouses", icon: Warehouse },
      { label: "Locations", href: "/master-data/locations", icon: MapPin },
    ],
  },
  {
    label: "Inbound",
    icon: Inbox,
    items: [
      { label: "Purchase Orders", href: "/inbound/purchase-orders", icon: ClipboardCheck },
      { label: "Receiving", href: "/inbound/receiving", icon: PackagePlus },
    ],
  },
  {
    label: "Inventory",
    icon: Boxes,
    items: [
      { label: "Inventory", href: "/inventory", icon: Boxes },
      { label: "Putaway", href: "/inventory/putaway", icon: MoveDown },
      { label: "Stock Adjustment", href: "/inventory/stock-adjustment", icon: SlidersHorizontal },
      { label: "Cycle Count", href: "/inventory/cycle-count", icon: ScanLine },
    ],
  },
  {
    label: "Outbound",
    icon: Send,
    items: [
      { label: "Sales Orders", href: "/outbound/sales-orders", icon: ShoppingCart },
      { label: "Picking", href: "/outbound/picking", icon: PackageSearch },
      { label: "Packing", href: "/outbound/packing", icon: PackageCheck },
      { label: "Shipping", href: "/outbound/shipping", icon: Ship },
    ],
  },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];
