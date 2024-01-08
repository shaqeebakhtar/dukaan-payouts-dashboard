import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import React from 'react';

const Search = () => {
  return (
    <div className="relative">
      <Icons.search className="absolute left-4 top-1/2 -translate-y-1/2" />
      <Input
        placeholder="Search features, tutorials, etc."
        className="w-[400px] bg-[#F2F2F2] placeholder:text-[#808080] placeholder:text-[15px] placeholder:leading-[22px] p-[9px] pl-10"
      />
    </div>
  );
};

export default Search;
