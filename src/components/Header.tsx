import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className="px-2 py-1 m-2 text-center rounded-2xl border-2 border-gray-400"
    >
      {text}
    </NavLink>
  );
}

function Header() {
  return (
    <div
      className="sticky top-0 w-screen whitespace-nowrap p-4 
      flex items-center gap-3 
    bg-white border-b-2"
    >
      <a className="flex gap-3 items-center" href="/">
        <img src="/favicon.svg" className="size-10" />
        <span className="font-bold text-2xl">SPICYHAM</span>
      </a>

      <nav className="flex">
        <NavItem to="/" text="home" />
        <NavItem to="/" text="coding" />
        <NavItem to="/" text="art" />
        <NavItem to="/" text="about" />
        <NavItem to="/light-mode" text="light mode" />
      </nav>
    </div>
  );
}

export default Header;
