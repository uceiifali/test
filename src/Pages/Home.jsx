import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import SidebarMobile from '../Components/SidebarMobile';

const Home = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <SidebarMobile />
      <Header />
    </div>
  );
};

export default Home;
