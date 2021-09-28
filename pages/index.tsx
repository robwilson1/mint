import type { NextPage } from "next";
import useSWR, { useSWRConfig } from "swr";
import { History, Layout, SummaryCards } from "@components";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  // const { mutate } = useSWRConfig();
  const { data } = useSWR<Mint.Data>("/api/data", fetcher);

  const assets = data?.assets || [];
  const assetsCount = assets.length;
  const liabilities = data?.liabilities || [];
  const liabilitiesCount = liabilities.length;

  return (
    <Layout assetsCount={assetsCount} liabilitiesCount={liabilitiesCount}>
      <SummaryCards assets={assets} liabilities={liabilities} />
      <History assets={assets} liabilities={liabilities} />
    </Layout>
  );
};

export default Home;
