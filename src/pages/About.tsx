import Base from '../Base';
import HeaderGraphic from '../components/HeaderGraphic';
import { Link } from 'react-router-dom';
import asset from '../asset';
import { Howl } from 'howler';

const clickSfx = new Howl({
  src: [asset('/assets/sfx/click.ogg')],
});

export default function About() {
  return (
    <>
      <HeaderGraphic title="ABOUT ME" finalMult={1.02} />

      <Base maxW={45} className="z-10 mb-30">
        <div className="mb-10 gap-10 md:flex">
          <div className="md:sticky md:top-24 md:min-w-0 md:flex-1">
            <img
              loading="lazy"
              src={asset('assets/other/me.webp')}
              className="h-auto max-h-60 w-full items-center object-scale-down md:max-h-full"
            />
          </div>

          <div className="md:flex-1">
            <h2 className="text-midtone mt-3 mb-2 text-2xl md:-mt-2">Hiya!</h2>
            <div>
              I'm <strong>Kyle Huang</strong>, but people online may know me as{' '}
              <strong>SPICYHAM</strong>. I'm an animator, developer and CS student heading to the
              University of Waterloo this fall.
              <br />
              <br />
              I've been actively posting content for 6 years, amassing{' '}
              <strong>80+ million views</strong> in total. My animations and games have been
              recognized by <strong>ReLogic</strong> and <strong>Critical Reflex</strong>,
              publishers of games like Terraria and Buckshot Roulette. I've also swam my whole life
              and coached swimmers for 2 years.
              <br />
              <br />
              Some of my interests:
              <ul>
                <li>game dev</li>
                <li>swimming and pickleball</li>
                <li>making music (sax, drums)</li>
                <li>sandbox video games</li>
              </ul>
              <br />
              feel free to reach out through{' '}
              <Link to="https://discord.gg/MD26m85Qq5" target="_blank">
                discord
              </Link>{' '}
              or email{' '}
              <Link to="mailto:huangkyle08@gmail.com?subject=Message%20From%20Your%20Website!&body=I%20saw%20your%20website,%20it's%20really%20cool%20and%20you're%20so%20cool%20and%20handsome.">
                {'huangkyle08@gmail.com'}
              </Link>
              !
            </div>
          </div>
        </div>
        <Link to="/resume" onClick={() => clickSfx.play()}>
          <button className="w-full">R E S U M E</button>
        </Link>
      </Base>
    </>
  );
}
