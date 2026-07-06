import { useState } from 'react';
import { type ReactNode } from 'react';

import Base from '../Base';
import CategoryCard from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import Card from '../components/Card';

export default function Coding() {
  const [projIndex, setProjIndex] = useState(0);

  function CodingCategory() {
    switch (projIndex) {
      case 1:
        return (
          <ProjectCard title="humpty rise" img="/favicon.svg">
            this is my first project to show off
          </ProjectCard>
        );
      case 2:
        return (
          <ProjectCard title="python code" img="/favicon.svg">
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

      <Base>
        <div className="text-center">
          <p className="my-3 wrap-normal">check out some of the projects i've made!</p>
          <div className="flex h-60 gap-3">
            <CategoryCard title="humptys rise" img="/favicon.svg" onClick={() => setProjIndex(1)}>
              sdv
            </CategoryCard>
            <CategoryCard title="friend compass" img="/favicon.svg" onClick={() => setProjIndex(2)}>
              sdv
            </CategoryCard>
            <CategoryCard
              title=" uhhh t(ai)me i guess"
              img="/favicon.svg"
              onClick={() => setProjIndex(1)}
              flex={2}
            >
              dsv
            </CategoryCard>
          </div>

          <div className="mt-4">
            skills:
            <Card text="photoshop" />
            <Card text="blender" />
            <Card text="unity" />
            <Card text="python mayeb" />
            <Card text="react" />
          </div>
        </div>
      </Base>
    </>
  );
}
