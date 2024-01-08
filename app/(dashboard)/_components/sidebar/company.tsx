import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const Company = () => {
  return (
    <div className="flex items-center space-x-3 px-2">
      <div className="w-10 h-10 bg-white rounded">
        <Image src={'/company-img.png'} alt="Nishyan" width={40} height={40} />
      </div>
      <div className="flex items-center justify-between flex-grow">
        <div className="space-y-1">
          <p className="font-medium text-[15px] leading-[22px]">Nishyan</p>
          <Link
            href={''}
            className="underline text-[13px] underline-offset-[3px] opacity-80 hover:opacity-100"
          >
            Visit store
          </Link>
        </div>
        <div>
          <Icons.chevronDown />
        </div>
      </div>
    </div>
  );
};

export default Company;
