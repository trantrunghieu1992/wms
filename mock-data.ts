// Centralized mock data for the WMS demo. Replace with real API calls.

export const products = [
  { sku: "SKU-10021", name: "Bulk A4 Copy Paper 80gsm", category: "Office Supplies", uom: "Carton", onHand: 1240, reorderPoint: 300, status: "Active" },
  { sku: "SKU-10045", name: "Stainless Steel Bolt M8x40", category: "Hardware", uom: "Box", onHand: 86, reorderPoint: 150, status: "Low Stock" },
  { sku: "SKU-10078", name: "Cold Chain Yogurt Drink 200ml", category: "F&B", uom: "Case", onHand: 512, reorderPoint: 200, status: "Active" },
  { sku: "SKU-10093", name: "LED Panel Light 40W", category: "Electrical", uom: "Piece", onHand: 0, reorderPoint: 60, status: "Out of Stock" },
  { sku: "SKU-10102", name: "Industrial Nitrile Gloves L", category: "Safety", uom: "Box", onHand: 940, reorderPoint: 250, status: "Active" },
  { sku: "SKU-10118", name: "Pallet Wrap Film 500mm", category: "Packaging", uom: "Roll", onHand: 210, reorderPoint: 100, status: "Active" },
  { sku: "SKU-10132", name: "Hydraulic Oil ISO 46 20L", category: "Lubricants", uom: "Drum", onHand: 34, reorderPoint: 40, status: "Low Stock" },
  { sku: "SKU-10151", name: "Corrugated Box 40x30x30", category: "Packaging", uom: "Bundle", onHand: 1780, reorderPoint: 400, status: "Active" },
];

export const categories = [
  { code: "CAT-01", name: "Office Supplies", parent: "-", skuCount: 128, status: "Active" },
  { code: "CAT-02", name: "Hardware", parent: "-", skuCount: 342, status: "Active" },
  { code: "CAT-03", name: "F&B", parent: "-", skuCount: 96, status: "Active" },
  { code: "CAT-04", name: "Electrical", parent: "-", skuCount: 210, status: "Active" },
  { code: "CAT-05", name: "Safety", parent: "-", skuCount: 64, status: "Active" },
  { code: "CAT-06", name: "Packaging", parent: "-", skuCount: 87, status: "Active" },
  { code: "CAT-07", name: "Lubricants", parent: "Hardware", skuCount: 22, status: "Inactive" },
];

export const suppliers = [
  { code: "SUP-001", name: "Hoang Long Trading Co.", contact: "Nguyen Van A", phone: "+84 28 3822 1190", city: "Ho Chi Minh City", rating: 4.8, status: "Active" },
  { code: "SUP-002", name: "Mekong Packaging JSC", contact: "Tran Thi B", phone: "+84 292 3812 004", city: "Can Tho", rating: 4.5, status: "Active" },
  { code: "SUP-003", name: "Northern Steel Supply", contact: "Le Van C", phone: "+84 24 3936 7788", city: "Hanoi", rating: 3.9, status: "Active" },
  { code: "SUP-004", name: "Fresh Dairy Distributors", contact: "Pham Thi D", phone: "+84 251 383 2244", city: "Bien Hoa", rating: 4.2, status: "On Hold" },
  { code: "SUP-005", name: "SafeGuard PPE Ltd.", contact: "Do Van E", phone: "+84 236 374 1122", city: "Da Nang", rating: 4.6, status: "Active" },
];

export const customers = [
  { code: "CUS-1001", name: "Saigon Retail Mart", segment: "Retail Chain", city: "Ho Chi Minh City", openOrders: 6, status: "Active" },
  { code: "CUS-1002", name: "Ca Mau Seafood Co.", segment: "Wholesale", city: "Ca Mau", openOrders: 2, status: "Active" },
  { code: "CUS-1003", name: "Delta Construction JSC", segment: "B2B Project", city: "Can Tho", openOrders: 0, status: "Active" },
  { code: "CUS-1004", name: "Golden Hotel Group", segment: "Hospitality", city: "Da Nang", openOrders: 4, status: "Active" },
  { code: "CUS-1005", name: "Viet Modern Furniture", segment: "Wholesale", city: "Binh Duong", openOrders: 1, status: "Inactive" },
];

export const warehouses = [
  { code: "WH-HCM01", name: "Ho Chi Minh Distribution Center", type: "Distribution", zones: 8, capacityUsed: 78, status: "Active" },
  { code: "WH-HAN01", name: "Hanoi Regional Warehouse", type: "Regional", zones: 6, capacityUsed: 64, status: "Active" },
  { code: "WH-CMU01", name: "Ca Mau Cold Storage", type: "Cold Chain", zones: 3, capacityUsed: 91, status: "Active" },
  { code: "WH-DAN01", name: "Da Nang Cross-dock", type: "Cross-dock", zones: 4, capacityUsed: 42, status: "Maintenance" },
];

export const locations = [
  { code: "A-01-01-A", warehouse: "WH-HCM01", zone: "Zone A - Fast Pick", type: "Bin", occupied: true },
  { code: "A-01-02-A", warehouse: "WH-HCM01", zone: "Zone A - Fast Pick", type: "Bin", occupied: true },
  { code: "B-04-11-C", warehouse: "WH-HCM01", zone: "Zone B - Bulk Storage", type: "Pallet", occupied: false },
  { code: "R-02-08-B", warehouse: "WH-HAN01", zone: "Reserve Racking", type: "Pallet", occupied: true },
  { code: "CC-01-03-A", warehouse: "WH-CMU01", zone: "Chiller Room 1", type: "Bin", occupied: true },
  { code: "DK-05-02-A", warehouse: "WH-DAN01", zone: "Dock Staging", type: "Floor", occupied: false },
];

export const purchaseOrders = [
  { po: "PO-2026-0341", supplier: "Hoang Long Trading Co.", items: 12, eta: "2026-07-08", value: "₫482,000,000", status: "Confirmed" },
  { po: "PO-2026-0342", supplier: "Mekong Packaging JSC", items: 5, eta: "2026-07-07", value: "₫96,500,000", status: "Awaiting Approval" },
  { po: "PO-2026-0343", supplier: "Northern Steel Supply", items: 20, eta: "2026-07-10", value: "₫1,204,000,000", status: "Confirmed" },
  { po: "PO-2026-0344", supplier: "SafeGuard PPE Ltd.", items: 8, eta: "2026-07-06", value: "₫210,300,000", status: "Partially Received" },
  { po: "PO-2026-0345", supplier: "Fresh Dairy Distributors", items: 3, eta: "2026-07-06", value: "₫58,900,000", status: "Draft" },
];

export const receivingTasks = [
  { asn: "ASN-88231", po: "PO-2026-0344", dock: "Dock 3", carrier: "Viettel Post Logistics", expected: "09:30", status: "In Progress" },
  { asn: "ASN-88232", po: "PO-2026-0345", dock: "Dock 1", carrier: "Gemadept Trucking", expected: "11:00", status: "Scheduled" },
  { asn: "ASN-88214", po: "PO-2026-0338", dock: "Dock 2", carrier: "ITL Logistics", expected: "08:00", status: "Completed" },
  { asn: "ASN-88229", po: "PO-2026-0341", dock: "Dock 4", carrier: "DHL Freight", expected: "14:15", status: "Scheduled" },
];

export const inventory = [
  { sku: "SKU-10021", name: "Bulk A4 Copy Paper 80gsm", location: "B-04-11-C", lot: "L2607A", qty: 1240, uom: "Carton", expiry: "-" },
  { sku: "SKU-10045", name: "Stainless Steel Bolt M8x40", location: "A-01-02-A", lot: "-", qty: 86, uom: "Box", expiry: "-" },
  { sku: "SKU-10078", name: "Cold Chain Yogurt Drink 200ml", location: "CC-01-03-A", lot: "L2701Y", qty: 512, uom: "Case", expiry: "2026-07-18" },
  { sku: "SKU-10102", name: "Industrial Nitrile Gloves L", location: "A-01-01-A", lot: "-", qty: 940, uom: "Box", expiry: "-" },
  { sku: "SKU-10132", name: "Hydraulic Oil ISO 46 20L", location: "R-02-08-B", lot: "L2512H", qty: 34, uom: "Drum", expiry: "2027-02-01" },
];

export const putawayTasks = [
  { task: "PUT-5521", sku: "SKU-10078", qty: 512, fromDock: "Dock 3", toLocation: "CC-01-03-A", priority: "High", status: "Pending" },
  { task: "PUT-5522", sku: "SKU-10102", qty: 940, fromDock: "Dock 1", toLocation: "A-01-01-A", priority: "Medium", status: "Pending" },
  { task: "PUT-5518", sku: "SKU-10021", qty: 1240, fromDock: "Dock 2", toLocation: "B-04-11-C", priority: "Low", status: "Completed" },
  { task: "PUT-5523", sku: "SKU-10132", qty: 34, fromDock: "Dock 4", toLocation: "R-02-08-B", priority: "Medium", status: "In Progress" },
];

export const stockAdjustments = [
  { ref: "ADJ-0091", sku: "SKU-10045", location: "A-01-02-A", change: -14, reason: "Damage", requestedBy: "Nguyen Van A", status: "Approved" },
  { ref: "ADJ-0092", sku: "SKU-10093", location: "B-02-05-A", change: -60, reason: "Cycle Count Variance", requestedBy: "Tran Thi B", status: "Pending" },
  { ref: "ADJ-0093", sku: "SKU-10151", location: "B-04-09-C", change: 120, reason: "Found Stock", requestedBy: "Le Van C", status: "Approved" },
];

export const cycleCounts = [
  { id: "CC-2026-014", zone: "Zone A - Fast Pick", scheduled: "2026-07-07", counter: "Pham Thi D", skus: 42, variance: "2 SKUs", status: "Scheduled" },
  { id: "CC-2026-013", zone: "Zone B - Bulk Storage", scheduled: "2026-07-05", counter: "Do Van E", skus: 30, variance: "0 SKUs", status: "Completed" },
  { id: "CC-2026-012", zone: "Chiller Room 1", scheduled: "2026-07-04", counter: "Nguyen Van A", skus: 18, variance: "1 SKU", status: "Completed" },
];

export const salesOrders = [
  { so: "SO-2026-1289", customer: "Saigon Retail Mart", items: 18, dueDate: "2026-07-07", value: "₫152,000,000", status: "Ready to Pick" },
  { so: "SO-2026-1290", customer: "Golden Hotel Group", items: 6, dueDate: "2026-07-06", value: "₫48,900,000", status: "Picking" },
  { so: "SO-2026-1291", customer: "Ca Mau Seafood Co.", items: 3, dueDate: "2026-07-08", value: "₫21,300,000", status: "Backordered" },
  { so: "SO-2026-1292", customer: "Delta Construction JSC", items: 24, dueDate: "2026-07-09", value: "₫388,700,000", status: "New" },
];

export const pickingTasks = [
  { wave: "WAVE-441", so: "SO-2026-1289", picker: "Vo Thi F", lines: 18, progress: 72, status: "In Progress" },
  { wave: "WAVE-442", so: "SO-2026-1290", picker: "Dang Van G", lines: 6, progress: 100, status: "Completed" },
  { wave: "WAVE-443", so: "SO-2026-1292", picker: "Unassigned", lines: 24, progress: 0, status: "Pending" },
];

export const packingTasks = [
  { pack: "PACK-3301", so: "SO-2026-1290", cartons: 3, weight: "42.5 kg", station: "Pack Station 2", status: "Ready to Ship" },
  { pack: "PACK-3302", so: "SO-2026-1287", cartons: 5, weight: "88.1 kg", station: "Pack Station 1", status: "Packing" },
  { pack: "PACK-3303", so: "SO-2026-1285", cartons: 1, weight: "6.2 kg", station: "Pack Station 3", status: "Shipped" },
];

export const shipments = [
  { shipment: "SHP-9021", so: "SO-2026-1285", carrier: "Viettel Post Logistics", tracking: "VTP883211290VN", eta: "2026-07-06", status: "In Transit" },
  { shipment: "SHP-9022", so: "SO-2026-1283", carrier: "Gemadept Trucking", tracking: "GMD00119284", eta: "2026-07-06", status: "Delivered" },
  { shipment: "SHP-9023", so: "SO-2026-1290", carrier: "DHL Freight", tracking: "DHL7729310VN", eta: "2026-07-07", status: "Booked" },
];

export const monthlyThroughput = [
  { month: "Feb", inbound: 3200, outbound: 2900 },
  { month: "Mar", inbound: 3480, outbound: 3120 },
  { month: "Apr", inbound: 3010, outbound: 3350 },
  { month: "May", inbound: 3720, outbound: 3600 },
  { month: "Jun", inbound: 4120, outbound: 3890 },
  { month: "Jul", inbound: 2210, outbound: 2040 },
];

export const inventoryByCategory = [
  { name: "Office Supplies", value: 1240 },
  { name: "Hardware", value: 860 },
  { name: "F&B", value: 512 },
  { name: "Electrical", value: 310 },
  { name: "Safety", value: 940 },
  { name: "Packaging", value: 1990 },
];

export const recentActivity = [
  { time: "08:12", text: "ASN-88214 received in full at Dock 2", type: "inbound" },
  { time: "08:40", text: "WAVE-442 picking completed by Dang Van G", type: "outbound" },
  { time: "09:05", text: "Cycle count CC-2026-013 closed with 0 variance", type: "inventory" },
  { time: "09:18", text: "SHP-9022 marked Delivered", type: "outbound" },
  { time: "09:47", text: "Stock adjustment ADJ-0093 approved (+120 units)", type: "inventory" },
  { time: "10:05", text: "PO-2026-0344 partially received at Dock 3", type: "inbound" },
];
