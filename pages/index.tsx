import type { NextPage } from "next";
import { History, Layout, SummaryCards } from "@components";

const Home: NextPage = () => {
  return (
    <Layout>
      <SummaryCards />
      <History />
    </Layout>
  );
};

export default Home;
