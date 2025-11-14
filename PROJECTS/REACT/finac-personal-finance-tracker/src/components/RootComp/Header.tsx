import Link from "next/link";
import { Logo, LogoIcon } from "../LocalComp/logo";
import Navitems from "./Navitems";
import { Dropdown } from "./Dropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className=" text-gray-400 flex items-center justify-around py-4 sm:items-start">
        <Link href="/root" className="text-2xl font-bold">
          <LogoIcon />
        </Link>
        <nav className="hidden sm:block">
          <Navitems />
        </nav>
        <Dropdown/>
      </div>
    </header>
  );
};

export default Header;
