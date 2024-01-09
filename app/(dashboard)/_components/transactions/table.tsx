import { Icons } from '@/components/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '#281209',
    oderDate: '7 July, 2023',
    orderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
];

const TransactionsTable = () => {
  return (
    <Table>
      <TableHeader className="border-b-0 bg-[#F2F2F2]">
        <TableRow className=" text-sm text-[#4D4D4D] font-medium rounded">
          <TableHead className="rounded-l">Order ID</TableHead>
          <TableHead className="flex items-center space-x-1">
            <span>Order date</span>
            <Icons.caretDown className="w-2 h-2" />
          </TableHead>
          <TableHead className="text-right">Order amount</TableHead>
          <TableHead className="rounded-r flex items-center space-x-1 justify-end">
            <span>Transaction fees</span> <Icons.info />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, i) => (
          <TableRow key={i} className="text-[#1A181E] text-sm">
            <TableCell className="font-medium text-[#146EB4]">
              {invoice.orderId}
            </TableCell>
            <TableCell>{invoice.oderDate}</TableCell>
            <TableCell className="text-right">{invoice.orderAmount}</TableCell>
            <TableCell className="text-right">
              {invoice.transactionFees}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
