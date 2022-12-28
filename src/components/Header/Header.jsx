import React from "react";

function Header() {
  return (
    <div className="bg-[#fff4e3] w-full py-6 items-center justify-between flex px-12">
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="search anything..."
          className="bg:transparent outline-none"
        />
      </div>
      <div className="items-center w-full justify-center flex space-x-4">
      <i class="fa-brands fa-facebook text-2xl"></i>
        
      </div>
      <div className="items-center justify-end space-x-6 flex w-full cursor-pointer">
        <i class="fa-regular fa-bell"></i>
        <i class="fa-regular fa-message"></i>
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
  );
}

export default Header;
