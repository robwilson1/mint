import {
  TrendingDownIcon,
  TrendingUpIcon,
  MinusIcon,
} from "@heroicons/react/outline";

interface getNetWorthDataInput {
  assetsTotal: Mint.Amount;
  previousAssetsTotal: Mint.Amount;
  liabilitiesTotal: Mint.Amount;
  previousLiabilitiesTotal: Mint.Amount;
}

export default function getNetWorthData({
  assetsTotal,
  previousAssetsTotal,
  liabilitiesTotal,
  previousLiabilitiesTotal,
}: getNetWorthDataInput): Mint.TrendDataOutput {
  const total = assetsTotal - liabilitiesTotal;
  const previousTotal = previousAssetsTotal - previousLiabilitiesTotal;

  if (total > previousTotal) {
    return {
      Icon: TrendingUpIcon,
      iconColour: "text-green-300",
      total,
      previousTotal,
    };
  }

  if (total < previousTotal) {
    return {
      Icon: TrendingDownIcon,
      iconColour: "text-red-300",
      total,
      previousTotal,
    };
  }

  return {
    Icon: MinusIcon,
    iconColour: "text-blue-300",
    total,
    previousTotal,
  };
}
