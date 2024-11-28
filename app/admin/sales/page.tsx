import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <div>
      <Table>
        <TableCaption>إجمالى الطلبيات : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="!text-right">الايميل</TableHead>
            <TableHead className="!text-right">عدد المنتجات</TableHead>
            <TableHead className="!text-right">الإجمالى</TableHead>
            <TableHead className="!text-right">الضرائب</TableHead>
            <TableHead className="!text-right">الشحن</TableHead>
            <TableHead className="!text-right">التاريخ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const {
              id,
              products,
              orderTotal,
              tax,
              shipping,
              createdAt,
              email,
            } = order;

            return (
              <TableRow key={id}>
                <TableCell className="!text-right">{email}</TableCell>
                <TableCell className="!text-right">{products}</TableCell>
                <TableCell className="!text-right">
                  {formatCurrency(orderTotal)}
                </TableCell>
                <TableCell className="!text-right">
                  {formatCurrency(tax)}
                </TableCell>
                <TableCell className="!text-right">
                  {formatCurrency(shipping)}
                </TableCell>
                <TableCell className="!text-right">
                  {formatDate(createdAt)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default SalesPage;
