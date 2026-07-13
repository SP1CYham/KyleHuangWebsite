import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import NoiseGrad from './NoiseGrad';
import { scrollContainerRef } from '../App';

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className="group inline-block h-full align-middle"
      onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="bg-accent m-1 -mb-2 line-clamp-1 inline-block cursor-default rounded-2xl border-2 border-white px-2 py-1 font-normal text-nowrap text-white transition-all group-hover:bg-[#f249bf] group-hover:px-3 group-hover:font-bold group-active:bg-[#f5b6f8]">
        {text}
      </div>
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
          className="flex flex-row p-4 whitespace-nowrap md:flex-row"
        >
          <Link className="mr-3 flex min-w-fit items-center gap-3 md:hidden md:h-0" to="/">
            <img src="/favicon.svg" className="size-20" />
          </Link>

          <div className="flex flex-col whitespace-nowrap md:flex-row">
            <Link
              className="mr-3 flex min-w-fit items-center gap-3"
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <img src="/favicon.svg" className="hidden size-10 md:block" />
              <span className="text-3xl font-bold tracking-tight text-white">
                <div className="transition-all hover:font-medium active:font-black">SPICYHAM</div>
              </span>
            </Link>
            <nav className="mt-2 flex md:mt-0">
              <NavItem to="/" text="home" />
              <NavItem to="/coding" text="coding" />
              <NavItem to="/art" text="art" />
              <NavItem to="/" text="about" />
              <NavItem to="/light-mode" text="light mode" />
            </nav>
          </div>
        </NoiseGrad>
      </NoiseGrad>
    </div>
  );
}

export default Header;
