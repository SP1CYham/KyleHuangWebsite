import { useState, createContext } from 'react';
import { scrollContainerRef } from '../App';

import HeaderGraphic from '../components/HeaderGraphic';
import Base from '../Base';
import Category from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import ArtCard from '../components/ArtCard';

interface CategoryContextTypes {
  projIndex: number;
  resetProjIndex: () => void;
}

export const CategoryContext = createContext<CategoryContextTypes | null>(null);

export default function Coding() {
  const [projIndex, setProjIndex] = useState(0);

  function handleCategoryClick(index = 0) {
    setProjIndex(index);
    setTimeout(() => {
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1);
  }

  function resetProjIndex() {
    handleCategoryClick(0);
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
            itchio="https://sp1cyham.itch.io/humptys-rise"
            itchioEmbed={13998305}
            itchioEmbedMobile={3083622}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            uses={['cGnomeSketch.webp', 'favicon.svg', 'favicon.svg', 'favicon.svg']}
          >
            <i>*above demo is a beta build!</i>
            <br />
            <br />
            <strong>Humpty's Rise</strong> is a dungeon crawler with balatro-like elements. Collect
            cards and shells, apply modifiers, and take your revenge against the evil usurper, The
            Gingerbread Man.
            <br />
            <br />
            Created by a friend and I in a school game jam in the Unity game engine, this game has
            been in progress since grade 10, changing forms multiple times along the way.
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
          <ProjectCard title="Friend Compass" img="/favicon.svg">
            this is my second project to show off
          </ProjectCard>
        );
      case 4:
        return (
          <ProjectCard title="Buckshot Mobile" img="/favicon.svg">
            placeholder description
          </ProjectCard>
        );
      case 5:
        return (
          <ProjectCard title="T(AI)ME" img="/favicon.svg">
            placeholder description
          </ProjectCard>
        );
      case 6:
        return (
          <ProjectCard
            title="Woodlands Bathroom Simulator"
            img="/favicon.svg"
            itchio="https://sp1cyham.itch.io/wbs"
            itchioEmbed={10512227}
            itchioEmbedMobile={2728107}
          >
            placeholder description
          </ProjectCard>
        );
      case 7:
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
      <CategoryContext.Provider value={{ projIndex, resetProjIndex }}>
        {CodingCategory()}
      </CategoryContext.Provider>

      {projIndex === 0 && <HeaderGraphic title="CODING" finalMult={1.37} />}
      <Base className="text-center">
        <p className="my-3 wrap-normal">check out some of the projects i've made!</p>

        <Category
          overrideMax={5}
          categoryArray={[
            {
              title: "Humpty's Rise",
              text: 'dungeon crawler w/ balatro-like elements built in unity!',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(1),
              flex: 3,
            },
            {
              title: 'Exposure',
              text: 'full photography editing suite + personalized coach',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(2),
              flex: 2,
            },
            {
              title: 'Friend Compass',
              text: 'navigation for friends using only SMS!',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(3),
              flex: 2,
            },
            {
              title: 'Buckshot Mobile',
              text: 'a recreation of "Buckshot Roulette" for mobile multiplayer',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(4),
              flex: 2,
            },
            {
              title: 'T(AI)ME',
              text: 'how is AI saving you time... and impacting the world?',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(5),
              flex: 2,
            },
            {
              title: 'Woodlands Bath. Sim.',
              text: 'a FNAF fangame themed around a high-school bathroom',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(6),
              flex: 3,
            },
            {
              title: 'other',
              text: 'etc',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(7),
              flex: 2,
            },
          ]}
        />
      </Base>
    </>
  );
}
