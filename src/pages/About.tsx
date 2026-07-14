import Base from '../Base';
import Card from '../components/Card';
import HeaderGraphic from '../components/HeaderGraphic';
import { scrollContainerRef } from '../App';

import NoiseGrad from '../components/NoiseGrad';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <HeaderGraphic title="ABOUT ME" finalMult={1.02} />

      <Base maxW={45} className="z-10">
        <div className="md:flex">
          <img loading="lazy" src="/favicon.svg" className="h-full w-full items-center md:flex-1" />
          <p className="md:flex-1">
            i'm a developer, animator and incoming Waterloo CS student. <br /> it's nice to meet
            you!
          </p>
        </div>
      </Base>
    </>
  );
}
