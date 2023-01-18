import React from 'react';
import NameEmail from './NameEmail';

const Form = () => {
  return (
    <div>
      <div className="p-4 flex items-start md:items-center justify-between gap-4 md:gap-0 w-full border-b flex-col md:flex-row ">
        <div className="flex  gap-4 flex-col">
          <h1 className="font-medium text-xl text-[#294E6D]">Personal Info</h1>
          <p className="text-sm font-normal text-[#6A7F92]">
            Update your photo and personal details here
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#294E6D1A] text-[#294E6D] text-sm font-normal rounded-xl p-2">
            Cancel
          </button>
          <button className="bg-[#294E6D] text-[#FFFFFF] text-sm font-normal rounded-xl p-2">
            Save
          </button>
        </div>
      </div>
      <NameEmail />
    </div>
  );
};

export default Form;
