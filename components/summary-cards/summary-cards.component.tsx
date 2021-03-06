import { useMemo } from "react";
import { getTrendData, getNetWorthData } from "@utils";
import { SummaryCard } from "@components";

const SummaryCards: React.FC<Mint.Data> = ({ assets, liabilities }) => {
  const {
    total: assetsTotal,
    previousTotal: previousAssetsTotal,
    Icon: AssetsTrendIcon,
    iconColour: AssetsTrendColour,
  } = useMemo(() => getTrendData(assets), [assets]);

  const {
    total: liabilitiesTotal,
    previousTotal: previousLiabilitiesTotal,
    Icon: LiabilitiesTrendIcon,
    iconColour: liabilitiesTrendColour,
  } = useMemo(() => getTrendData(liabilities), [liabilities]);

  const {
    total: netWorthTotal,
    Icon: NetWorthTrendIcon,
    iconColour: netWorthTrendColour,
  } = useMemo(
    () =>
      getNetWorthData({
        assetsTotal,
        previousAssetsTotal,
        liabilitiesTotal,
        previousLiabilitiesTotal,
      }),
    [
      assetsTotal,
      previousAssetsTotal,
      liabilitiesTotal,
      previousLiabilitiesTotal,
    ]
  );

  return (
    <section className="bg-white mb-10 p-10 rounded-2xl grid grid-cols-3 gap-10">
      <SummaryCard
        title="Assets"
        Icon={AssetsTrendIcon}
        iconColour={AssetsTrendColour}
        total={assetsTotal}
      />
      <SummaryCard
        title="Liabilites"
        Icon={LiabilitiesTrendIcon}
        iconColour={liabilitiesTrendColour}
        total={liabilitiesTotal}
      />
      <SummaryCard
        title="Net Worth"
        Icon={NetWorthTrendIcon}
        iconColour={netWorthTrendColour}
        total={netWorthTotal}
      />
    </section>
  );
};

export default SummaryCards;
