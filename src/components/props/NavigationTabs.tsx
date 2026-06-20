// components/shared/Tabs.tsx

type Tab = {
  id: string;
  label: string;
  icon?: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
};

export function Tabs({
  tabs,
  activeTab,
  onChange,
}: TabsProps) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${
            activeTab === tab.id ? "tab--active" : ""
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.icon && (
            <img
              src={tab.icon}
              alt={tab.label}
            />
          )}

          {tab.label}
        </button>
      ))}
    </div>
  );
}