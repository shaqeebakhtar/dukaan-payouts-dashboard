import Company from './company';
import PagesNavigation from './pages-navigation';
import Wallet from './wallet';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 z-50 h-full w-56 bg-[#1E2640] text-white py-4 px-2 flex flex-col justify-between">
      <div className="space-y-4">
        <Company />
        <PagesNavigation />
      </div>
      <Wallet />
    </aside>
  );
};

export default Sidebar;
