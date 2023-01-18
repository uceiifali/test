import React from 'react';
import Sidebar from '../Components/Sidebar';
import SidebarMobile from '../Components/SidebarMobile';

const Orders = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <SidebarMobile />
      <h1 className="pl-12 text-2xl font-medium text-[#294E6D]">Orders</h1>
    </div>
  );
};

export default Orders;
