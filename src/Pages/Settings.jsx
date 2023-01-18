import React from 'react';
import SettingHome from '../Components/SettingHome';
import Sidebar from '../Components/Sidebar';
import SidebarMobile from '../Components/SidebarMobile';

const Settings = () => {
  const active = 'active';
  return (
    <div className="flex">
      <Sidebar active={active} />
      <SidebarMobile />
      <SettingHome />
    </div>
  );
};

export default Settings;
