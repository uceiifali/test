import React from 'react';

const Box = ({ boxContent }) => {
  //   console.log(boxContent);
  return (
    <div className="grid gap-4 md:gap-10 items-center grid-cols-2 md:flex md:flex-row   md:grid-flow-row justify-between  ">
      {boxContent.map((item, index) => (
        <div
          key={index}
          className="bg-new p-6 rounded-lg w-36 md:w-48 h-36 flex  flex-col gap-2"
        >
          <div className="text-2xl text-[#294E6D]">{item.icon}</div>
          <h1 className="font-semibold text-xl text-[#294E6D]">${item.info}</h1>
          <p className="text-[#294E6D] font-normal text-sm">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Box;
