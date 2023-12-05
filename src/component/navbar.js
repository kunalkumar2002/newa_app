import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
