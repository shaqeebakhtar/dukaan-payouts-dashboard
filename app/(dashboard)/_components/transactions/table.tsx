import { Icons } from '@/components/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { transactions } from '@/lib/transactions-data';

const TransactionsTable = () => {
  return (
    <Table>
      <TableHeader className="border-b-0 bg-[#F2F2F2]">
        <TableRow className=" text-sm text-[#4D4D4D] font-medium rounded">
          <TableHead className="rounded-l w-[346px]">Order ID</TableHead>
          <TableHead className="flex items-center space-x-1 w-[210px]">
            <span>Order date</span>
            <Icons.caretDown className="w-2 h-2" />
          </TableHead>
          <TableHead className="text-right w-[210px]">Order amount</TableHead>
          <TableHead className="rounded-r flex items-center space-x-1 justify-end">
            <span>Transaction fees</span> <Icons.info />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, i) => (
          <TableRow key={i} className="text-[#1A181E] text-sm">
            <TableCell className="font-medium text-[#146EB4]">
              {transaction.orderId}
            </TableCell>
            <TableCell>{transaction.oderDate}</TableCell>
            <TableCell className="text-right">
              {transaction.orderAmount}
            </TableCell>
            <TableCell className="text-right">
              {transaction.transactionFees}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
