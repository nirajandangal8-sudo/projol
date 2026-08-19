import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import UserList from "./pages/UserList";
import UserView from "./pages/UserView";
import MainLayout from "./layouts/MainLayout";
import FooterLessLayout from "./layouts/FooterLessLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:userId" element={<UserView />} />
      </Route>
      <Route element={<FooterLessLayout />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
