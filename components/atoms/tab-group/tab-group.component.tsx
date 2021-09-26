import { Dispatch, SetStateAction } from "react";

interface TabGroupProps {
  tabs: Mint.Category[];
  selectedTab: Mint.Category;
  setSelectedTab: Dispatch<SetStateAction<Mint.Category>>;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div>
      <nav className="flex flex-col sm:flex-row">
        {tabs.map((name) => {
          const rootClassName =
            "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none";
          const focusedClasName = "border-b-2 border-blue-500";

          return (
            <button
              key={name}
              className={
                selectedTab === name
                  ? `${rootClassName} ${focusedClasName}`
                  : rootClassName
              }
              onClick={() => setSelectedTab(name)}
            >
              {name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabGroup;
