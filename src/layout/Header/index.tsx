import { FC, useState, ChangeEvent } from 'react';

import Settings from '@/assets/images/settings.png';
import Notification from '@/assets/images/notification.png';
import Placeholder from '@/assets/images/placeholder.png';
import SearchIcon from '@/assets/images/search.png';

const Header: FC = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <nav className="mx-10 py-5 border-b border-border flex items-center gap-[30px]">
      <h1 className="text-[28px] text-primary font-semibold leading-[33.89px]">
        Overview
      </h1>
      <div className="bg-background rounded-[40px] w-[255px] ml-auto flex items-center gap-[15px] px-[25px] py-[15px]">
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
      <div className="w-[50px] bg-background h-[50px] rounded-full flex items-center justify-center">
        <img src={Settings} alt="Settings" className="w-[25px] h-[25px]" />
      </div>
      <div className="w-[50px] bg-background h-[50px] rounded-full flex items-center justify-center">
        <img src={Notification} alt="Settings" className="w-[25px] h-[25px]" />
      </div>
      <img
        src={Placeholder}
        className="w-[60px] h-[60px] rounded-full ml-[5px]"
      />
    </nav>
  );
};

export default Header;
