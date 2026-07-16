import { useState } from 'react';
import { type ReactNode } from 'react';

import { scrollContainerRef } from '../App';

import HeaderGraphic from '../components/HeaderGraphic';
import Base from '../Base';
import Category from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import Card from '../components/Card';

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
          <ProjectCard title="humpty rise" img="/favicon.svg">
            this is my first project to show off
          </ProjectCard>
        );
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
              title: 'friend compass oh god',
              text: 'moving pictures and all.',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(1),
              flex: 2,
            },
            {
              title: 't(ai)me',
              text: 'moving pictures and all.',
              img: '/favicon.svg',
              onClick: () => handleCategoryClick(2),
              flex: 2,
            },
          ]}
        />
      </Base>
    </>
  );
}
