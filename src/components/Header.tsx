import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <NavLink to={to} className="m-1 rounded-2xl border-2 border-gray-400 px-2 py-1 text-center">
      {text}
    </NavLink>
  );
}

function Header() {
  return (
    <div className="sticky top-0 flex w-screen items-center border-b-2 bg-white p-4 whitespace-nowrap">
      <Link className="mr-3 flex min-w-fit items-center gap-3" to="/">
        <img src="/favicon.svg" className="size-10" />
        <span className="text-2xl font-bold">SPICYHAM</span>
      </Link>

      <nav className="flex">
        <NavItem to="/" text="home" />
        <NavItem to="/coding" text="coding" />
        <NavItem to="/art" text="art" />
        <NavItem to="/" text="about" />
        <NavItem to="/light-mode" text="light mode" />
      </nav>
    </div>
  );
}

export default Header;
