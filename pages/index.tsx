import type { NextPage } from "next";
import { Layout } from "@components/layout";
import { SummaryCards } from "@components/summary-cards";
import { History } from "@components/history";

const Home: NextPage = () => {
  return (
    <Layout>
      <SummaryCards />
      <History />
    </Layout>
  );
};

export default Home;
