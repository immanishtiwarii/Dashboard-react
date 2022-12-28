import React from "react";
import { InvestDB } from "./utilies/InvesmentsDB";
import InvestItem from "./InvestItem";

const LeftPart = () => {
  return (
    <div className="col-span-2 min-h-[90vh] border-r border-grey-200 items-start justify-start flex flex-col w-full pl-12">
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2">My Cart</h1>
        <p className="text-md text-grey-800">
          Find all of your invesment information on a cart
        </p>
        <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-[#89f8b7] mt-6 w-full">
          <h1>Nishar Multani</h1>
          <h1 className="text-3xl xl:text-5xl font-bolt py-6">$ 920,434</h1>
        </div>
        <div className="bg-black py-4 px-8 w-full items-start justify-between flex shadow-2x1 shadow-emerald-200">
          <span className="flex flex-col items-start justify-start text-white">
            <h1>Card Number</h1>
            <h3>**** **** **** 3711</h3>
          </span>
          <span className="flex flex-col items-start justify-start text-white">
            <h1>CVC</h1>
            <h3>786</h3>
          </span>
        </div>
      </div>

      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="font-bolt text-xl xl:text-2xl pb-2">Recent Invesment</h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
