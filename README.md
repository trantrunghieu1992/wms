# Kho Việt WMS — Warehouse Management System

Ứng dụng quản lý kho (WMS) xây dựng bằng **Next.js 15 (App Router)**, **React 19**, **TypeScript** và **Tailwind CSS**, phong cách ERP hiện đại, hỗ trợ sáng/tối, sidebar thu gọn, responsive đầy đủ.

## Cài đặt và chạy thử

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

Build production:

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
app/
  page.tsx                     Dashboard
  master-data/                 Products, Categories, Suppliers, Customers, Warehouses, Locations
  inbound/                     Purchase Orders, Receiving
  inventory/                   Inventory, Putaway, Stock Adjustment, Cycle Count
  outbound/                    Sales Orders, Picking, Packing, Shipping
  reports/                     Reports
  settings/                    Settings
components/
  layout/                      Sidebar, Topbar, AppShell
  theme/                       Light/dark mode provider + toggle
  ui/                          Button, Badge, DataTable, PageHeader, StatCard, Switch
  dashboard/                   Charts (recharts)
lib/
  nav.ts                       Sidebar navigation config
  mock-data.ts                 Sample data — thay bằng API thật của bạn
```

## Kết nối dữ liệu thật

Toàn bộ dữ liệu hiện là mock trong `lib/mock-data.ts`. Để kết nối API/CSDL thật:
1. Thay các hằng số export trong `mock-data.ts` bằng các hàm gọi API (ví dụ dùng `fetch` trong Server Component, hoặc React Query ở phía client).
2. Các trang trong `app/**/page.tsx` là Server Component theo mặc định — có thể `await` trực tiếp dữ liệu.
3. Với thao tác tạo/sửa (Add Product, Create Purchase Order...), thêm Server Actions hoặc route API tương ứng.

## Tùy biến giao diện

- Bảng màu, font chữ, biến CSS: `app/globals.css` và `tailwind.config.ts`.
- Danh sách menu sidebar: `lib/nav.ts`.
- Chế độ sáng/tối dùng `next-themes`, mặc định là sáng (`defaultTheme="light"`), có thể đổi trong `app/layout.tsx`.

## Ghi chú

Đây là bản giao diện (frontend) hoàn chỉnh với dữ liệu mẫu — cần tích hợp backend/API thật trước khi đưa vào sử dụng vận hành.
