import { FC, useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Settings from '@/assets/images/settings.png';
import Notification from '@/assets/images/notification.png';
import SearchIcon from '@/assets/images/search.png';
import MenuIcon from '@/assets/images/menu.png';
import { PAGE_TITLES } from '@/constants/pageTitles';
import { RootState } from '@/store';

const Header: FC = () => {
  const [search, setSearch] = useState<string>('');
  const { user } = useSelector((root: RootState) => root.user);
  const { pathname } = useLocation();

  return (
    <nav className="mx-[25px] md:mx-10 py-5 border-b border-border">
      <div className="flex items-center justify-between gap-[30px]">
        <img
          src={MenuIcon}
          alt="Menu"
          className="w-[18px] h-[14px] block md:hidden"
        />
        <h1 className="text-[28px] text-primary font-semibold leading-[33.89px]">
          {PAGE_TITLES[pathname]}
        </h1>
        <div className="bg-background rounded-[40px] w-[255px] ml-auto hidden md:flex items-center gap-[15px] px-[25px] py-[15px]">
          <img src={SearchIcon} alt="search" className="w-4 h-4" />
          <input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search for something"
            className="text-[15px] bg-background placeholder:text-primary-light active:outline-none focus:outline-none"
          />
        </div>
        <div className="w-[50px] bg-background h-[50px] rounded-full hidden md:flex items-center justify-center">
          <img src={Settings} alt="Settings" className="w-[25px] h-[25px]" />
        </div>
        <div className="w-[50px] bg-background h-[50px] rounded-full hidden md:flex items-center justify-center">
          <img
            src={Notification}
            alt="Settings"
            className="w-[25px] h-[25px]"
          />
        </div>
        <img
          src={user?.image}
          className="w-[60px] h-[60px] rounded-full ml-[5px] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Header;
