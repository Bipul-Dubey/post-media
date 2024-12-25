interface Tab {
  name: string;
  icon: React.ReactNode | null;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string | null;
  defaultTab: string;
  onTabClick: (tabValue: string, tabName?: string) => void;
}

const CustomTabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  activeTab,
  onTabClick,
}) => {
  const currentTab = activeTab || defaultTab || tabs[0].value;

  return (
    <div className="border-t mx-auto">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            onClick={() => {
              onTabClick(tab.value, tab.name);
            }}
            key={tab.value}
            className={`max-w-fit px-8 flex-1 py-4 flex items-center justify-center space-x-2 border-b-2 ${
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

export default CustomTabs;
