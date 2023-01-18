import React from 'react';
import BoxContainer from './BoxContainer';
import Clients from './Clients';
import DataG from './DataG';

const Header = () => {
  return (
    <div className="p-4 ml-8 md:ml-0">
      <div className="flex">
        <h1 className="font-semibold text-4xl text-[#294E6D]">
          Good Morning, John!
        </h1>
      </div>
      <div>
        <BoxContainer />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <DataG />
      </div>
    </div>
  );
};

export default Header;
