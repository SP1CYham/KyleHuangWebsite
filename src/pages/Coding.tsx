import Base from "../Base";
import ProjectCard from "../components/ProjectCard";

export default function Coding() {
  return (
    <>
      <Base>
        <div className="p-4">
          coding
          <div className="flex gap-3 h-full">
            <ProjectCard
              title="wfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
              text="fffffffffffffffffffffffffffffffffffffff"
              img="/favicon.svg"
              to="erg"
            />
            <ProjectCard title="erg" text="erg" img="/favicon.svg" to="erg" />
            <ProjectCard title="erg" text="erg" img="/favicon.svg" to="erg" />
            <ProjectCard title="erg" text="erg" img="erg" to="erg" />
          </div>
        </div>
      </Base>
    </>
  );
}
