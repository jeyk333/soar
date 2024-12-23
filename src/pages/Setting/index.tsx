import { FC, useState, ReactNode } from 'react';

import EditProfile from '@/components/EditProfile';

const TABS: string[] = ['Edit Profile', 'Preferences', 'Security'];

const Setting: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Edit Profile');

  const renderTabContent: { [key: string]: ReactNode } = {
    'Edit Profile': <EditProfile />,
    Preferences: <p>Under Development</p>,
    Security: <p>Under Development</p>,
  };
  return (
    <div className="bg-white py-[22px] md:py-[30px] px-5 md:px-[30px] rounded-3xl">
      <div className="border-b border-border-light w-full pb-1 flex items-center gap-[42px] mb-[41px]">
        {TABS.map((tab: string) => (
          <button
            key={tab}
            className={`relative font-medium ${activeTab === tab ? 'text-text' : 'text-text-label'}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="px-[6px] md:px-4 py-2 block text-[13px] md:text-base">
              {tab}
            </span>
            {activeTab === tab ? (
              <span className="absolute -bottom-1 block h-[3px] w-full bg-text rounded-tr-[10px] rounded-tl-[10px]"></span>
            ) : null}
          </button>
        ))}
      </div>
      <div>{renderTabContent[activeTab]}</div>
    </div>
  );
};

export default Setting;
