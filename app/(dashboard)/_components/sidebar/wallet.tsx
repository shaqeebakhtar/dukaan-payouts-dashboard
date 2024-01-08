import { Icons } from '@/components/icons';
import React from 'react';

const Wallet = () => {
  return (
    <div className="mx-2 bg-[#353C53] py-1.5 px-3 rounded flex items-center space-x-3">
      <div className="bg-white/10 w-9 h-9 p-1.5 rounded">
        <Icons.wallet />
      </div>
      <div>
        <p className="opacity-80 text-[13px] leading-[16px]">
          Available credits
        </p>
        <p className="font-medium">222.10</p>
      </div>
    </div>
  );
};

export default Wallet;
