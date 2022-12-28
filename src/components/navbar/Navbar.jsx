import React from "react";
import { useRecoilState } from "recoil";
import { ActiveTabState } from "../../atoms/ActiveTabState";
import { navLinks } from "./utilies/NavDB";

function Navbar() {
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className="w-full border-t border-gray-200" />
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
      <div className="xl:flex hidden flex-col items-center justify-center space-y-4  p-9">
        <h1 className="text-xl w-full font-medium">
            Grow Your <br /> Saving Now!
        </h1>
        <p>
            Pick an Inversment Strategy that reflects Your Goal
        </p>
        <button className="w-full py-2 px-3 bg-black text-white">Become a Pro</button>
      </div>
    </nav>
  );
}

function NavItem({ link }) {
  const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);

  return (
    <div
      onClick={() => setActiveNavItem(link.id)}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${activeNavItem === link.id && "border-gray-900"} `}
    >
      <span>{link.icon}</span>
      <h1 className={`text-gray-600 group-hover:text-black xl:flex hidden ${activeNavItem === link.id && "text-black"} `} >
        {link.title}
      </h1>
    </div>
  );
}

export default Navbar;
