import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const TablePagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href="#"
          className="mr-6 rounded py-1.5 pr-3 pl-1.5 border border-[#D9D9D9] text-sm font-medium text-[#4D4D4D]"
        />
        <PaginationLink href="#">1</PaginationLink>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationLink isActive href="#" className="h-auto w-auto px-2 py-1.5">
          10
        </PaginationLink>
        <PaginationLink href="#">11</PaginationLink>
        <PaginationLink href="#">12</PaginationLink>
        <PaginationLink href="#">13</PaginationLink>
        <PaginationLink href="#">14</PaginationLink>
        <PaginationLink href="#">15</PaginationLink>
        <PaginationLink href="#">16</PaginationLink>
        <PaginationLink href="#">17</PaginationLink>
        <PaginationLink href="#">18</PaginationLink>
        <PaginationNext
          href="#"
          className="ml-6 rounded py-1.5 pl-3 pr-1.5 border border-[#D9D9D9] text-sm font-medium text-[#4D4D4D]"
        />
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
