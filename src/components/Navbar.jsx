import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbarr">
        <Link to="/home">
          <img className="pokebola" src="/src/assets/img/pokebola.png" alt="" />{" "}
        </Link>
        <div className="links">
          <NavLink
            id="link"
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink id="link" to="/pokemones">
            Pokemones
          </NavLink>
        </div>
      </nav>
    </>
  );
}
