import React from 'react';
import OverviewLabel from './label';

const Overview = () => {
  return (
    <div className="space-y-6">
      <OverviewLabel />
      <div className="flex items-center space-x-[20px]">
        <div className="flex-1 bg-white p-[20px] space-y-4 rounded-lg shadow-sm">
          <p className="text-[#4D4D4D]">Online orders</p>
          <p className="font-medium text-[32px] leading-[38px]">231</p>
        </div>
        <div className="flex-1 bg-white p-[20px] space-y-4 rounded-lg shadow-sm">
          <p className="text-[#4D4D4D]">Amount received</p>
          <p className="font-medium text-[32px] leading-[38px]">
            ₹23,92,312.19
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
