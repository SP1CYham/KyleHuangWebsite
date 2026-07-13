import { Link } from 'react-router-dom';
import NoiseGrad from './NoiseGrad';

//icons
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';

function iconFunc(num = 1) {
  switch (num) {
    case 0:
      return <FaYoutube className="h-6 w-6" />;
    case 1:
      return <AiFillInstagram className="h-6 w-6" />;
    case 2:
      return <IoLogoGithub className="h-6 w-6" />;
    case 3:
      return <FaLinkedin className="h-6 w-6" />;
    case 4:
      return <FaTiktok className="h-5 w-5" />;
    case 5:
      return <FaDiscord className="h-6 w-6" />;
    case 6:
      return <FaRedditAlien className="h-6 w-6" />;
    case 7:
      return <IoLogoGithub className="h-6 w-6" />;
  }
}

function icon(to = '', index = 1) {
  return (
    <Link target="_blank" to={to} className="mx-2 align-middle">
      {iconFunc(index)}
    </Link>
  );
}

function Footer() {
  return (
    <NoiseGrad
      className="bg-shadow text-accent flex w-screen flex-col p-4 md:flex-row"
      direction="to top"
      color="var(--color-accent2)"
      xtraOpacity={0}
      percent={50}
    >
      <div className="flex flex-row">
        {icon('https://www.youtube.com/@SPICYham', 0) /*youtube*/}
        {icon('https://www.instagram.com/sp1cy_ham', 1) /*insta*/}
        {icon('https://www.tiktok.com/@sp1cyham', 4) /*tiktok*/}
        {icon('https://discord.gg/6Jrc2j4', 5) /*discord*/}
        {icon('https://www.reddit.com/user/BR0COL1/', 6) /*reddit*/}
        {icon('https://github.com/SP1CYham', 2) /*github*/}
        {icon('fix latere', 3) /*linkedin*/}
      </div>

      <p className="mt-2 mr-5 ml-2 flex-1 md:mt-0 md:text-right">
        {' '}
        kyle huang / spicyham studios 2026
      </p>
    </NoiseGrad>
  );
}

export default Footer;
