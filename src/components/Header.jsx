import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-red-300 p-4 flex justify-between items-center">
      <div>Home</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/user">Users</NavLink>
      </nav>
    </header>
  );
}

export default Header;
