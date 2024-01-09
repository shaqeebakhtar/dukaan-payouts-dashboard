import Menu from './menu';
import Search from './search';
import Title from './title';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white flex items-center justify-between px-8 py-3 border-b border-b-[#D9D9D9]">
      <Title />
      <Search />
      <Menu />
    </header>
  );
};

export default Navbar;
