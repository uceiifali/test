import React from 'react';

const Bar = () => {
  return (
    <div className="border-b pt-4 flex items-center w-full md:w-[900px] ">
      <div className="flex items-center gap-8">
        <a
          href="#general"
          className="font-medium text-xs md:text-base text-[#6A7F92] "
        >
          General
        </a>
        <a
          href="#plans"
          className="font-medium text-xs md:text-base text-[#6A7F92] "
        >
          Plans details
        </a>
        <a
          href="#general"
          className="font-medium text-xs md:text-base text-[#6A7F92] "
        >
          Payments
        </a>
        <a
          href="#general"
          className="font-medium text-xs md:text-base  border-b border-black text-[#294E6D]"
        >
          Profile
        </a>
      </div>
    </div>
  );
};

export default Bar;
