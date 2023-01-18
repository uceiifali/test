import React from 'react';
import Bar from './Bar';
import Form from './Form';
const SettingHome = () => {
  return (
    <div className="p-4 ml-8 md:ml-0">
      <div className="flex">
        <h1 className="font-semibold text-4xl text-[#294E6D]">Settings</h1>
      </div>
      <div>
        <Bar />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default SettingHome;
