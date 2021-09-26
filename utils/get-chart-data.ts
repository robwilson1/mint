import * as dayjs from "dayjs";

function getSortedHistory<T extends Mint.Liability | Mint.Asset>(input: T[]) {
  return input
    .reduce((acc: Mint.ChartHistory[][], item) => {
      const normalisedHistory = item.history.map((historyItem) => ({
        date: historyItem.date,
        name: dayjs.unix(historyItem.date).format("DD/MM/YYYY"),
        [item.name]: historyItem.amount,
      }));
      acc.push(normalisedHistory);
      return acc;
    }, [])
    .flat()
    .sort((a, b) => a.date - b.date);
}

function getDataKeys(input: Mint.ChartHistory[]) {
  return [
    ...new Set(
      input
        .flatMap((item) => Object.keys(item))
        .filter((keyName) => !["date", "name"].includes(keyName))
    ),
  ];
}

export default function getChartData<T extends Mint.Liability | Mint.Asset>(
  input: T[]
) {
  const sortedHistory = getSortedHistory(input);
  const dataKeys = getDataKeys(sortedHistory);

  for (const key of dataKeys) {
    let previousValue = 0;

    for (const slice of sortedHistory) {
      if (!slice[key]) {
        slice[key] = previousValue ?? 0;
      } else {
        previousValue = slice[key] as number;
      }
    }
  }

  for (const slice of sortedHistory) {
    const total = dataKeys.reduce(
      (acc, key) => acc + (slice[key] as number),
      0
    );
    slice["Total"] = total;
  }

  return sortedHistory;
}
