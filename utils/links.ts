type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/products", label: "المنتجات" },
  { href: "/favorites", label: "المفضلة" },
  { href: "/cart", label: "عربة التسوق" },
  { href: "/orders", label: "الطلبيات" },
  { href: "/admin/sales", label: "لوحة التحكم" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "المبيعات" },
  { href: "/admin/products", label: "منتجاتى" },
  { href: "/admin/products/create", label: "إضافة منتج" },
];
