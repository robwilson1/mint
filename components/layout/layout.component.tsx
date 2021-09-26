import { Head } from "@components/head";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      {/* Sidebar */}
      <main className="p-10">{children}</main>
    </>
  );
};

export default Layout;
