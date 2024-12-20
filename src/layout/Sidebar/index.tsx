import { FC } from 'react';

import Logo from '../../assets/images/text-logo.png';

const Sidebar: FC = () => {
  return (
    <div className="w-2/12">
      <div className="py-8">
        <img src={Logo} alt="Soar Task" className="w-[167px] mx-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
