import { Head, SideBar } from "@components";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      <div className="grid grid-cols-10">
        <aside className="col-span-2">
          <SideBar />
        </aside>
        <main className="p-10 col-span-6 col-start-2">{children}</main>
      </div>
    </>
  );
};

export default Layout;
