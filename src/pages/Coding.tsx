import { useState } from 'react';
import { scrollContainerRef } from '../App';

import HeaderGraphic from '../components/HeaderGraphic';
import Base from '../Base';
import Category from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import ArtCard from '../components/ArtCard';

export default function Coding() {
  const [projIndex, setProjIndex] = useState(0);

  function handleCategoryClick(index = 0) {
    setProjIndex(index);
    setTimeout(() => {
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1);
  }

  function CodingCategory() {
    switch (projIndex) {
      case 0:
        return <div></div>;
      case 1:
        return (
          <ProjectCard
            titleImg="/assets/coding/humptysRise/humptyTitle.png"
            titleShadow="#3E157080"
            pixel={true}
            title="Humpty's Rise"
            tagline="A Humpty Dumpty themed dungeon crawler"
            img="/favicon.svg"
            ss={['favicon.svg', 'favicon.svg', 'favicon.svg', 'favicon.svg']}
            uses={['favicon.svg', 'favicon.svg', 'favicon.svg', 'favicon.svg']}
          >
            this is my first project to show off
          </ProjectCard>
        );
      case 2:
        return (
          <ProjectCard title="Friend Compass" img="/favicon.svg">
            this is my second project to show off
          </ProjectCard>
        );
      case 3:
        return (
          <ProjectCard title="Buckshot Mobile" img="/favicon.svg">
            placeholder description
          </ProjectCard>
        );
      case 4:
        return (
          <ProjectCard title="T(AI)ME" img="/favicon.svg">
            placeholder description
          </ProjectCard>
        );
      case 5:
        return (
          <ProjectCard title="Woodlands Bathroom Simulator" img="/favicon.svg">
            placeholder description
          </ProjectCard>
        );
      case 6:
        return (
          <>
            <Base>
              <ArtCard title="Cut in Pairs" img="/favicon.svg">
                placeholder description
              </ArtCard>
              <ArtCard title="Physics Project" img="/favicon.svg">
                placeholder description
              </ArtCard>
              <ArtCard title="Shoyu the Tofu" img="/favicon.svg">
                placeholder description
              </ArtCard>
            </Base>
          </>
        );
      default:
        return <div>either wip or bug!</div>;
    }
  }

  return (
    <>
      {CodingCategory()}

      {projIndex === 0 && <HeaderGraphic title="CODING" finalMult={1.37} />}
      <Base className="text-center">
        <p className="my-3 wrap-normal">check out some of the projects i've made!</p>

        <Category
          categoryArray={[
            {
              title: "Humpty's Rise",
              text: 'dungeon crawler w/ balatro-like elements built in unity!',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(1),
              flex: 3,
            },
            {
              title: 'Friend Compass',
              text: 'navigation for friends using only SMS!',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(2),
              flex: 2,
            },
            {
              title: 'Buckshot Mobile',
              text: 'a recreation of "Buckshot Roulette" for mobile multiplayer',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(3),
              flex: 2,
            },
            {
              title: 'T(AI)ME',
              text: 'how is AI saving you time... and impacting the world?',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(4),
              flex: 3,
            },
            {
              title: 'Woodlands Bath. Sim.',
              text: 'a FNAF fangame themed around a high-school bathroom',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(5),
              flex: 3,
            },
            {
              title: 'other',
              text: 'etc',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(6),
              flex: 3,
            },
          ]}
        />
      </Base>
    </>
  );
}
