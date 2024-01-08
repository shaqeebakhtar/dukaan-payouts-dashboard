import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {};

const OverviewLabel = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-xl text-[#1A181E] font-medium">Overview</h3>
      <Select defaultValue={'lastMonth'}>
        <SelectTrigger className="w-[137px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="lastWeek">Last Week</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default OverviewLabel;
