import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/photos">Photos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
