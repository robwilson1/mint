import { Head, SideBar } from "@components";

const Layout: React.FC<{ assetsCount: number; liabilitiesCount: number }> = ({
  children,
  assetsCount,
  liabilitiesCount,
}) => (
  <>
    <Head />
    <div className="flex">
      <aside>
        <SideBar
          assetsCount={assetsCount}
          liabilitiesCount={liabilitiesCount}
        />
      </aside>
      <main className="p-10">{children}</main>
    </div>
  </>
);

export default Layout;
