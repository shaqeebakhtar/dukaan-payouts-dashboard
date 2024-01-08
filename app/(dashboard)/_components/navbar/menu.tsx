import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import React from 'react';

const Menu = () => {
  return (
    <div className="flex items-center space-x-3">
      <Button
        variant={'secondary'}
        size={'icon'}
        className="rounded-full p-2.5 w-10 h-10"
      >
        <Icons.notification />
      </Button>
      <Button
        variant={'secondary'}
        size={'icon'}
        className="rounded-full p-2.5 w-10 h-10"
      >
        <Icons.caretDown />
      </Button>
    </div>
  );
};

export default Menu;
