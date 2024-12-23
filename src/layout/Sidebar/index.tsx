import { FC, ElementType, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '@/assets/images/text-logo.png';
import { MENUS, MenuType } from '@/constants/menus';
import { RootState, AppDispatch } from '@/store';
import { toggleSidebar } from '@/store/user/action';

const Sidebar: FC = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const { pathname } = useLocation();
  const { showMobileSidebar } = useSelector((root: RootState) => root.user);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      className={`${showMobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-all w-8/12 md:w-5/12 lg:w-3/12 xl:w-2/12 border-r border-border absolute lg:relative z-[999] bg-white h-screen`}
    >
      <span
        onClick={() => dispatch(toggleSidebar())}
        className="cursor-pointer absolute right-4 top-4 text-lg block lg:hidden font-semibold"
      >
        &#x2715;
      </span>
      <div className="py-8">
        <img src={Logo} alt="Soar Task" className="w-[167px] mx-auto" />
      </div>
      <div className="flex flex-col">
        {MENUS.map((menu: MenuType) => {
          const Icon: ElementType = menu.icon;
          return (
            <Link
              to={menu.path}
              onClick={() => dispatch(toggleSidebar())}
              key={menu.id}
              onMouseEnter={() => setIsHovering(menu.id)}
              onMouseLeave={() => setIsHovering(null)}
              className={`${pathname === menu.path ? 'text-text' : 'text-text-light'} hover:text-text text-lg font-medium py-4 relative`}
            >
              {pathname === menu.path ? (
                <div className="w-[6px] h-[60px] bg-text absolute left-0 top-0 rounded-tr-[10px] rounded-br-[10px]" />
              ) : null}
              <div className="w-[167px] mx-auto flex items-center gap-[26px]">
                <Icon
                  className="hover:text-text"
                  color={
                    pathname === menu.path || isHovering === menu.id
                      ? '#232323'
                      : '#B1B1B1'
                  }
                />{' '}
                {menu.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
