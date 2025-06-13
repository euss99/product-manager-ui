import { Outlet } from "react-router";

import Header from "@/components/shared/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto max-w-6xl p-4 mt-6 bg-white shadow rounded">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;