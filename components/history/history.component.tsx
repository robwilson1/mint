import { useMemo, useState } from "react";
import { Chart, TabGroup } from "@components";
import { getChartData } from "@utils";

const tabs: Mint.Category[] = ["Assets", "Liabilities", "Net Worth"];

const History: React.FC<Mint.Data> = ({ assets, liabilities }) => {
  const [selectedTab, setSelectedTab] = useState<Mint.Category>(tabs[0]);

  const assetData = useMemo(() => getChartData(assets), [assets]);
  const liabilityData = useMemo(() => getChartData(liabilities), [liabilities]);

  return (
    <section className="bg-white p-10 rounded-2xl">
      <TabGroup
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <div className="mt-5" style={{ height: "500px" }}>
        <Chart data={selectedTab === "Assets" ? assetData : liabilityData} />
      </div>
    </section>
  );
};

export default History;
