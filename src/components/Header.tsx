import { useState, useContext, createContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import NoiseGrad from './NoiseGrad';
import { scrollContainerRef } from '../App';

import SpicyhamLogo from './spicyhamLogo';
import SpicyhamLogoFace from './spicyhamLogoFace';

import { AppContext } from '../App';

import { IoMdArrowDropdown } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa6';
import { FaPaintbrush } from 'react-icons/fa6';

import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa6';

function Icon({ index, className }: { index?: number; className: string }) {
  switch (index) {
    case 0:
      return <IoHomeSharp className={className} />;
    case 1:
      return <FaCode className={className} />;
    case 2:
      return <FaPaintbrush className={className} />;
    case 3:
      return <SpicyhamLogo className={className} />;
  }
}

function NavItem({
  to,
  text,
  mobile = false,
  index,
}: {
  to: string;
  text: string;
  mobile?: boolean;
  index?: number;
}) {
  const { triggerFn } = useContext(AppContext)!;
  const { dropdownFalse } = useContext(dropdownCnxt)!;
  const { pathname } = useLocation();

  const desktopString =
    'bg-accent group-hover:bg-midtone group-active:bg-light m-1 -mb-2 line-clamp-1 inline-block cursor-default rounded-2xl border-2 border-white px-2 py-1 font-normal text-nowrap text-white transition-all group-hover:px-3 group-hover:font-bold';

  return (
    <NavLink
      to={to}
      className={`group h-full align-middle ${mobile ? '' : 'inline-block'}`}
      onClick={() => {
        scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        if (text === 'coding') {
          triggerFn();
        }
        dropdownFalse();
      }}
    >
      <div className={mobile ? 'flex' : ''}>
        <Icon
          className={
            mobile
              ? `mr-5.5 -ml-2.5 h-auto w-5 ${to === pathname ? 'text-white' : 'text-midtone'}`
              : 'hidden'
          }
          index={index}
        />
        <div className={!mobile ? desktopString : 'text-[1.3rem] text-white'}>{text}</div>
      </div>
    </NavLink>
  );
}

export const dropdownCnxt = createContext<{ dropdownFalse: () => void } | null>(null);

function Header() {
  const [hovered, setHovered] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function dropdownFalse() {
    setDropdown(false);
  }

  function spicyhamLogo(className: string) {
    return (
      <div>
        {!hovered && <SpicyhamLogo className={className} />}
        {hovered && <SpicyhamLogoFace className={className} />}
      </div>
    );
  }

  const { darkMode } = useContext(AppContext)!;

  return (
    <div className="sticky top-0 z-10 w-screen items-center gap-0">
      <dropdownCnxt.Provider value={{ dropdownFalse }}>
        <NoiseGrad
          direction="to top"
          color="var(--color-shadow)"
          xtraOpacity={0}
          percent={60}
          baseFrequency={0.2}
          className="bg-black"
        >
          <NoiseGrad
            direction="to left"
            color="var(--color-accent2)"
            xtraOpacity={70}
            percent={20}
            baseFrequency={0.08}
            className="flex flex-row p-4 whitespace-nowrap md:flex-row"
          >
            <div className="flex w-full align-middle whitespace-nowrap">
              <Link
                className="group mr-3 flex min-w-fit items-center gap-3"
                to="/"
                style={{ textDecoration: 'none' }}

                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {spicyhamLogo('size-10 md:block text-accent')}
                <span className="text-3xl font-bold tracking-tight text-white">
                  <div className="transition-all group-hover:font-medium group-active:font-black">
                    SPICYHAM
                  </div>
                </span>
              </Link>

              {/* nav buttons for desktop */}
              <nav className="hidden md:flex">
                <NavItem to="/" text="home" />
                <NavItem to="/coding" text="coding" />
                <NavItem to="/art" text="art" />
                <NavItem to="/about" text="about" />
              </nav>

              <div className="mr-3 flex h-auto w-full flex-1 flex-row">
                <Link className="group mt-1 mr-2 ml-auto" to="/light-mode">
                  {darkMode ? (
                    <IoSunny className="text-midtone h-7 w-7 text-center group-hover:text-white" />
                  ) : (
                    <FaMoon className="text-midtone h-7 w-7 text-center group-hover:text-white" />
                  )}
                </Link>

                <div
                  className="hover:animate-hover mr-3 h-10 w-10 hover:cursor-pointer md:hidden"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <IoMdArrowDropdown
                    className="h-full w-full transition-all"
                    style={{ rotate: dropdown ? '180deg' : '0deg' }}
                  />
                </div>
              </div>
            </div>
          </NoiseGrad>
        </NoiseGrad>

        {/* nav buttons for mobile */}

        <NoiseGrad
          direction="to bottom"
          color="var(--color-shadow)"
          xtraOpacity={50}
          percent={20}
          baseFrequency={0.2}
          className="bg-black/80 backdrop-blur-sm md:hidden"
        >
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-in-out"
            style={{ gridTemplateRows: dropdown ? '1fr' : '0fr' }}
            aria-hidden={!dropdown}
          >
            <div className="overflow-hidden">
              <div className="ml-9 pt-2 pb-3">
                <NavItem to="/" text="home" mobile index={0} />
                <NavItem to="/coding" text="coding" mobile index={1} />
                <NavItem to="/art" text="art" mobile index={2} />
                <NavItem to="/about" text="about" mobile index={3} />
              </div>
            </div>
          </div>
        </NoiseGrad>
      </dropdownCnxt.Provider>
    </div>
  );
}

export default Header;
