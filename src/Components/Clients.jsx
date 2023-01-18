import React from 'react';
import Chart from './Chart';

const Clients = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 gap-4">
      <div className="flex flex-row md:flex-col gap-4">
        <div className="bg-new p-6 rounded-3xl w-36 md:w-48 h-28 flex  flex-col gap-2">
          <h1 className="font-medium text-base text-[#294E6D]">New Clients</h1>
          <div className="flex items-center justify-between ">
            <h1 className="font-semibold text-3xl text-[#294E6D]">40</h1>
            <div className="bg-[#6BCF4F4D] rounded-xl p-1 flex items-center justify-center">
              <p className="text-[#4DA634]  text-xs md:text-sm font-normal">
                + 18.3%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-new p-6 rounded-3xl w-36 md:w-48 h-28 flex  flex-col gap-2">
          <h1 className="font-medium text-base text-[#294E6D]">ALl Clients</h1>
          <p className="font-semibold text-3xl text-[#294E6D]">238</p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Clients;
