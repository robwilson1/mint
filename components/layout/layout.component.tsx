import { Head } from "@components";

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
