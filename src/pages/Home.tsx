import Base from '../Base';
import Card from '../components/Card';
import HeaderGraphic from '../components/HeaderGraphic';
import { scrollContainerRef } from '../App';

import NoiseGrad from '../components/NoiseGrad';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <HeaderGraphic />

      <Base maxW={45} className="z-10">
        {/*casual ver */}
        <h1>hello, i'm kyle huang!</h1>
        <p className="text-center">
          i'm a developer, animator and incoming Waterloo CS student. <br /> it's nice to meet you!
        </p>
        <img loading="lazy" src="public/favicon.svg" className="my-10 h-50 w-full items-center" />
        <h2>what i've been up to:</h2>
        <ul>
          <li>
            creating animations, devlogs and video essays for my{' '}
            <Link to="https://www.youtube.com/@SPICYham/videos" target="_blank">
              youtube channel
            </Link>{' '}
            with over <strong> 108,000 subscribers</strong>
          </li>
          <li>
            developing{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              Humpty's Rise,
            </Link>{' '}
            a dungeon-crawler with <strong>procedural gen, balatro-style upgrades</strong> using
            unity
          </li>
          <li>
            competing in lots of <Link to="/coding">hackathons and game jams!</Link>
          </li>
          <br />
          <br />
        </ul>

        <div className="flex h-auto w-full flex-col md:flex-row">
          <NoiseGrad
            childClassName=" "
            className="flex-1 border-r-0 border-b-2 border-white p-3 md:border-r-2 md:border-b-0"
            overrideColor="var(--color-black)"
            overrideDirection="to bottom"
            overridePercent={50}
            xtraOpacity={100}
          >
            <h2 className="mb-3">development</h2>
            <Card text="Python" />
            <Card text="C#" />
            <Card text="HTML/CSS" />
            <Card text="JavaScript" />
            <Card text="React" />
          </NoiseGrad>
          <NoiseGrad
            childClassName=" "
            className="flex-2 p-3"
            overrideColor="var(--color-black)"
            overrideDirection="to bottom"
            overridePercent={50}
            xtraOpacity={100}
          >
            <h2 className="mb-3">software</h2>
            <Card text="Unity 2D/3D" />
            <Card text="Adobe Animate" />
            <Card text="Adobe Premiere Pro" />
            <Card text="Adobe Photoshop" />
            <Card text="Adobe After Effects" />
            <Card text="Audacity" />
            <Card text="FL Studio" />
            <Card text="Toonsquid" />
            <Card text="Blender" />
          </NoiseGrad>
        </div>

        <br />
        <br />

        <NoiseGrad
          className="bg-accent2 flex max-h-[150] flex-col justify-center rounded-2xl border-2 border-white p-4 text-center align-middle text-wrap"
          childClassName="rounded-2xl"
          direction="to top"
          color="var(--color-black)"
          baseFrequency={0.6}
          xtraOpacity={50}
        >
          <h2 className="-mt-2 mb-2 text-center">latest video:</h2>
          <iframe
            src="https://www.youtube.com/embed/sQxJLyRYvn0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-auto w-full rounded-2xl"
            style={{ aspectRatio: '16/9' }}
          ></iframe>
        </NoiseGrad>

        <div className="mt-10 flex w-full justify-center">
          <div
            className="flex max-w-90 flex-col items-center self-center"
            onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Link to="/art">
              <button className="w-90">see more of my art!</button>
            </Link>
            <Link to="/coding">
              <button className="w-90">check out my coding projects!</button>
            </Link>
            <Link to="/about">
              <button className="w-90">learn more about me!</button>
            </Link>
            <Link to="/resume">
              <button className="w-90 font-black">R E S U M E</button>
            </Link>
          </div>
        </div>
      </Base>
    </>
  );
}
