import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

function TopNav() {
  return (
    <div className="flex flex-col items-center border-b bg-base-100 py-2 px-4 sm:flex-row md:px-20">
      <div className="pr-2">
        <NavLink
          to="/"
          className="font-DancingScript text-3xl font-bold normal-case hover:text-purple-500"
        >
          UpaymentStore!
        </NavLink>
      </div>
      <div className="flex w-full items-center justify-end sm:w-fit md:w-fit md:justify-center">
        <Cart />
        <div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
