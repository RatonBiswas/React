import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Ratan" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context Api</h5>
        {/* <NavLinks user={user} logout={logout} /> */}
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
