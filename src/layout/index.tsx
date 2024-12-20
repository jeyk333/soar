import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout: FC = () => {
  return (
    <div className="h-screen max-h-screen flex">
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
