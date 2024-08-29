import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation/Navigation";

function RootLayout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
