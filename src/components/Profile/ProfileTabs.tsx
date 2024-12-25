import React from "react";
import { useSearchParams } from "react-router-dom";

interface Tab {
  name: string;
  icon: React.ReactNode | null;
  value: string;
}

interface ProfileTabsProps {
  tabs: Tab[];
  defaultTab: string;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ tabs, defaultTab }) => {
  const [searchParam, setSearchParams] = useSearchParams();

  // Get the current tab or fall back to the default tab
  const currentTab = searchParam.get("tab") || defaultTab || tabs[0].value;

  return (
    <div className="border-t">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setSearchParams({
                tab: tab.value,
              });
            }}
            className={`flex-1 py-4 flex items-center justify-center space-x-2 border-b-2 ${
              currentTab === tab.value
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;
