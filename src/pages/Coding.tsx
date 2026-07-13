import { useState } from 'react';
import { type ReactNode } from 'react';

import HeaderGraphic from '../components/HeaderGraphic';
import Base from '../Base';
import Category from '../components/CategoryCard';
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

      <HeaderGraphic />
      <Base>
        <div className="text-center">
          <p className="my-3 wrap-normal">check out some of the projects i've made!</p>

          <Category
            categoryArray={[
              {
                title: 'friend compass oh god',
                text: 'moving pictures and all.',
                img: '/favicon.svg',
                onClick: () => setProjIndex(1),
                flex: 4,
              },
              {
                title: 't(ai)me',
                text: 'moving pictures and all.',
                img: '/favicon.svg',
                onClick: () => setProjIndex(1),
                flex: 1,
              },
            ]}
          />

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
