import { default as NextHead } from "next/head";

const Head: React.FC = () => (
  <NextHead>
    <title>Mint</title>
    <meta
      name="description"
      content="Mint gives you an overview of your money and finances"
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
