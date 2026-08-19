import { Outlet } from "react-router";
import Header from "../components/Header";

function FooterLessLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default FooterLessLayout;
