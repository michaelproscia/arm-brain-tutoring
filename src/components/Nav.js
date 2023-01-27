import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav justify-content-end gap-3 me-5">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="pricing">
        Pricing
      </NavLink>
      <NavLink className="nav-link" to="contact">
        Contact
      </NavLink>
    </nav>
  );
}
