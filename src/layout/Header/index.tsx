import { FC, useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Settings from '@/assets/images/settings.png';
import Notification from '@/assets/images/notification.png';
import SearchIcon from '@/assets/images/search.png';
import MenuIcon from '@/assets/images/menu.png';
import { PAGE_TITLES } from '@/constants/pageTitles';
import { RootState, AppDispatch } from '@/store';
import { toggleSidebar } from '@/store/user/action';

const Header: FC = () => {
  const [search, setSearch] = useState<string>('');
  const { user } = useSelector((root: RootState) => root.user);
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <header className="mx-[25px] lg:mx-10 py-5 border-none lg:border-b border-border">
      <nav>
        <div className="flex items-center justify-between gap-[30px]">
          <img
            aria-label="Mobile menu"
            role="openMenu"
            onClick={() => dispatch(toggleSidebar())}
            src={MenuIcon}
            alt="Menu"
            className="w-[18px] h-[14px] block lg:hidden cursor-pointer"
          />
          <h1 className="text-[20px] lg:text-[28px] text-primary font-semibold leading-[33.89px]">
            {PAGE_TITLES[pathname]}
          </h1>
          <div className={`w-[255px] ml-auto hidden lg:block relative`}>
            <img
              src={SearchIcon}
              alt="search"
              className="w-5 h-5 left-6 top-4 absolute"
            />
            <input
              value={search}
              role="searchbox"
              aria-label="Search"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder="Search for something"
              className="w-full bg-background pl-[56px] md:pr-[25px] py-[15px] rounded-[40px] text-[15px] bg-background placeholder:text-primary-light text-primary-light"
            />
          </div>
          <Link to="/setting" aria-label="Go to Settings">
            <div className="hover:shadow-md w-[50px] bg-background h-[50px] rounded-full hidden lg:flex items-center justify-center">
              <img
                src={Settings}
                alt="Settings"
                className="w-[25px] h-[25px]"
              />
            </div>
          </Link>
          <div
            aria-label="Open Notification"
            className="hover:shadow-md cursor-pointer w-[50px] bg-background h-[50px] rounded-full hidden lg:flex items-center justify-center"
          >
            <img
              src={Notification}
              alt="Settings"
              className="w-[25px] h-[25px]"
            />
          </div>
          <img
            src={user?.image}
            className="w-[35px] lg:w-[60px] h-[35px] lg:h-[60px] rounded-full ml-[5px] cursor-pointer"
          />
        </div>
        <div className="bg-background rounded-[40px] w-full flex lg:hidden items-center gap-[15px] px-[25px] py-[15px] mt-[20px]">
          <img src={SearchIcon} alt="search" className="w-4 h-4" />
          <input
            value={search}
            aria-label="Search"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search for something"
            className="text-[13px] bg-background placeholder:text-primary-light active:outline-none focus:outline-none"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
