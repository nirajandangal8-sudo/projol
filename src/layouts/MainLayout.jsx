import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
