import { Icons } from '@/components/icons';
import React from 'react';

const Title = () => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-[#1A181E] text-[15px] leading-[22px]">Payments</p>
      <div className="flex items-center space-x-1.5">
        <Icons.help />
        <span className="text-[#4D4D4D] text-xs">How it works</span>
      </div>
    </div>
  );
};

export default Title;
