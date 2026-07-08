import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import NoiseGrad from './NoiseGrad';
import { scrollContainerRef } from '../App';

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className="text-center"
      onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <button>{text}</button>
    </NavLink>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-10 w-screen items-center bg-black">
      <NoiseGrad
        direction="to top"
        color="var(--color-shadow)"
        xtraOpacity={0}
        percent={60}
        baseFrequency={0.2}
      >
        <NoiseGrad
          direction="to left"
          color="var(--color-accent2)"
          xtraOpacity={70}
          percent={20}
          baseFrequency={0.08}
          className="flex p-4 whitespace-nowrap"
        >
          <Link className="mr-3 flex min-w-fit items-center gap-3" to="/">
            <img src="/favicon.svg" className="size-10" />
            <span
              className="text-3xl font-bold tracking-tight text-white"
              style={{ textDecoration: 'none' }}
            >
              <div className="no-underline transition-all hover:font-medium active:font-black">
                SPICYHAM
              </div>
            </span>
          </Link>

          <nav className="flex">
            <NavItem to="/" text="home" />
            <NavItem to="/coding" text="coding" />
            <NavItem to="/art" text="art" />
            <NavItem to="/" text="about" />
            <NavItem to="/light-mode" text="light mode" />
          </nav>
        </NoiseGrad>
      </NoiseGrad>
    </div>
  );
}

export default Header;
