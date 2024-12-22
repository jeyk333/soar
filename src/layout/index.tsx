import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout: FC = () => {
  return (
    <div className="h-screen max-h-screen flex">
      <Sidebar />
      <div className="w-full md:w-10/12">
        <Header />
        <div className="bg-background px-[25px] md:px-10 py-[30px] h-[calc(100vh-101px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
