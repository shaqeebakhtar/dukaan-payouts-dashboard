'use client';
import React from 'react';
import TransactionsTable from './table';
import TablePagination from './table-pagination';
import TableTopbar from './topbar';

const Transactions = () => {
  return (
    <div className="space-y-[20px]">
      <h3 className="text-xl text-[#1A181E] font-medium">
        Transactions | This Month
      </h3>
      <div className="px-3 pt-3 pb-6 bg-white rounded-lg shadow-sm space-y-6">
        <div className="space-y-3">
          <TableTopbar />
          <TransactionsTable />
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default Transactions;
