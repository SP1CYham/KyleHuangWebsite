import Base from '../Base';
import ProjectCard from '../components/ProjectCard';

import Card from '../components/Card';

export default function Coding() {
  return (
    <>
      <Base>
        <div className="p-4 text-center">
          <p className="my-3 wrap-normal">check out some of the projects i've made!</p>
          <div className="flex h-60 gap-3">
            <ProjectCard title="humptys rise" text="isdewsfwerfg" img="/favicon.svg" to="erg" />
            <ProjectCard title="friend compass" text="kill me" img="/favicon.svg" to="erg" />
            <ProjectCard
              title="fucking uhhh t(ai)me i guess"
              text="buh"
              img="/favicon.svg"
              to="erg"
            />
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
