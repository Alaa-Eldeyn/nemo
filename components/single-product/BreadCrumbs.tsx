import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            الصفحة الرئيسية
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="rotate-180" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className="capitalize text-lg">
            المنتجات
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="rotate-180" />

        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize text-lg">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbs;
