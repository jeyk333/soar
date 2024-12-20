import { FC, ElementType, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '@/assets/images/text-logo.png';
import { MENUS, MenuType } from '@/constants/menus';

const Sidebar: FC = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const { pathname } = useLocation();

  return (
    <div className="w-2/12 border-r border-border">
      <div className="py-8">
        <img src={Logo} alt="Soar Task" className="w-[167px] mx-auto" />
      </div>
      <div className="flex flex-col">
        {MENUS.map((menu: MenuType) => {
          const Icon: ElementType = menu.icon;
          return (
            <Link
              to={menu.path}
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
