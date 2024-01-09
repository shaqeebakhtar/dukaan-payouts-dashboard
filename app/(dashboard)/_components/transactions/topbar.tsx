import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const TableTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <Icons.search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]" />
        <Input
          placeholder="Search by order ID..."
          className="rounded w-[248px] border border-[#D9D9D9] placeholder:text-[#999999] placeholder:text-[15px] placeholder:leading-[22px] p-[9px] pl-10"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant={'outline'}
          className="flex items-center gap-1.5 rounded text-base text-[#4D4D4D] px-3 py-1.5"
        >
          <span>Sort</span>
          <Icons.sort />
        </Button>
        <Button variant={'outline'} className="rounded p-2">
          <Icons.download />
        </Button>
      </div>
    </div>
  );
};

export default TableTopbar;
