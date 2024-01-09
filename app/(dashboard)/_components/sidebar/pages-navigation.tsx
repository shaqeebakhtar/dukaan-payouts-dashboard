import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const PagesNavigation = () => {
  const pagesBaseClass =
    'flex items-center space-x-3 py-2 px-4 opacity-80 rounded hover:bg-white/10 hover:opacity-100';

  return (
    <nav className="space-y-1">
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.home />
        <span className="text-sm">Home</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.orders />
        <span className="text-sm">Orders</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.products />
        <span className="text-sm">Products</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.delivery />
        <span className="text-sm">Delivery</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.marketing />
        <span className="text-sm">Marketing</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.analytics />
        <span className="text-sm">Analytics</span>
      </Link>
      <Link
        href={''}
        className={cn(pagesBaseClass, 'bg-white/10 rounded opacity-100')}
      >
        <Icons.payments />
        <span className="text-sm">Payments</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.tools />
        <span className="text-sm">Tools</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.discounts />
        <span className="text-sm">Discounts</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.audience />
        <span className="text-sm">Audience</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.appearance />
        <span className="text-sm">Appearance</span>
      </Link>
      <Link href={''} className={cn(pagesBaseClass)}>
        <Icons.plugins />
        <span className="text-sm">Plugins</span>
      </Link>
    </nav>
  );
};

export default PagesNavigation;
