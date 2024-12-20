import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout: FC = () => {
  return (
    <div className="h-screen max-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="bg-background px-10 py-[30px] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
