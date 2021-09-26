import {
  TrendingDownIcon,
  TrendingUpIcon,
  MinusIcon,
} from "@heroicons/react/outline";

export default function getTrendData<T extends Mint.Liability | Mint.Asset>(
  input: T[]
): Mint.TrendDataOutput {
  const total = input.reduce(
    (acc, asset) => (acc += asset?.history[0]?.amount ?? 0),
    0
  );
  const previousTotal = input.reduce(
    (acc, asset) => (acc += asset?.history[1]?.amount ?? 0),
    0
  );

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
