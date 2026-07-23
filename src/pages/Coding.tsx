import { useState, createContext } from 'react';
import { scrollContainerRef } from '../App';
import { Link } from 'react-router-dom';

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
            uses={[
              'Unity 2D',
              'A* Pathfinding',
              'Procedural Generation',
              'Enemy AI/Behavior',
              'Modular Upgrade System',
              'Auto-Build System',
              'Custom Font',
              'Audacity',
              'FL Studio',
              'Pixilart Studio',
              'Pixelforge',
              'C#',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!'],
              ['https://sp1cyham.itch.io/humptys-rise', 'ignore'],
            ]}
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
            <br />
            <br />
            The game features complex enemy AI using A* pathfinding, procedural room spawning, a
            modular and infinitely scalable system for upgrades, hundreds of animated sprites, a
            system to automatically build rooms from just an outline, a custom font, a full
            (unreleased) OST and much, much more.
            <br />
            <br />
            The game isn't released yet, but I've learned a lot from making it! You can play a
            (very) early demo on{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              itch.io
            </Link>
            .
          </ProjectCard>
        );
      case 2:
        return (
          <ProjectCard
            titleImg="/assets/coding/humptysRise/humptyTitle.png"
            titleShadow="#3E157080"
            pixel={true}
            title="Exposure"
            tagline="A full photography editing suite + personalized coach"
            img="favicon.svg"
            uses={[
              'Expo',
              'React Native',
              'Auth0',
              'MongoDB Atlas',
              'Gemini API',
              'Nano Banana',
              'Python',
              'Non-Destructive Editing',
              'Fast API',
              'Figma',
              'Adobe After Effects',
              'ElevenLabs + LiveKit',
              'Typescript',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://github.com/waaberi/ht6-2026', 'github link'],
              ['https://devpost.com/software/exposure-qet3vc', 'devpost'],
              ['https://www.youtube.com/watch?v=DXqbNUakSM8', 'demo video'],
            ]}
          >
            <strong>Exposure</strong> is a fully-fledged photography suite, with:
            <ul>
              <li>A built-in camera with grid + leveling aids</li>
              <li>Editing tools to adjust light, color, crop, etc</li>
              <li>
                A fully integrated AI coach powered by Gemini, giving you suggestions and tips for
                shooting and edits
              </li>
              <li>Cloud sync and an account system with MongoDB Atlas and Auth0</li>
              <li>
                Presets and image generation with non-destructive editing, fully preserving layer
                history
              </li>
              <li>Chats, where the user can ask anything about their photos</li>
              <li>A portfolio curation and preview system!</li>
            </ul>
            <br />
            Created at Toronto's largest summer hackathon,{' '}
            <Link to="https://hackthe6ix.com/" target="_blank">
              Hack the 6ix,
            </Link>{' '}
            my team created Exposure to try and help give aspiring photographers an extra leg up.
            Most existing apps, such as Photoshop and Lightroom, are not adapted for the need of
            non-technical people / beginners. The idea was inspired by my mom, who loves taking
            photographs but is completely lost on how to edit or color grade.
            <br />
            <br />
            Exposure analyses your photo and suggests adjustments, showing where in the photo the
            suggestions applies. It also scrapes metadata, including photo ISO, aperture, camera
            model, lens and more, giving tips for shooting. Image generation is powered by Nano
            Banana and uses a diffing algorithm to seperate the original and modified parts of the
            image. All adjustments can be saved as presets, which (along with generated assets) act
            as non-destructive layers applied on top of the photo. In the gallery, Exposure can
            curate your list of images, and prepare a portfolio preview. Exposure makes sure the
            photographer is always in control.
            <br />
            <br />
            The backend is built using FastAPI, using Auth0 and MongoDB Atlas for cloud storage and
            account systems. The user is able to chat using ElevenLabs + LiveKit about any photo in
            the gallery to ask for tips or even question like: "what lens should I buy next?". The
            app supports both IOS and Android, and the development environment works on MacOS, Linux
            and Windows.
            <p className="text-accent text-[7px]">
              yes, i know, ai bad. i hate gen ai too. unfortunately, i need a job.
            </p>
          </ProjectCard>
        );
      case 3:
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
            uses={[
              'Expo',
              'React Native',
              'Fast API',
              'Gemini API',
              'Nano Banana',
              'Figma',
              'Adobe After Effects',
              'Python',
              'MongoDB Atlas',
              'ElevenLabs + LiveKit',
              'Typescript',
              '',
              '',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://github.com/waaberi/ht6-2026', 'github link'],
              ['https://devpost.com/software/exposure-qet3vc', 'devpost'],
              ['https://www.youtube.com/watch?v=DXqbNUakSM8', 'demo video'],
            ]}
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
            <br />
            <br />
            The game features complex enemy AI using A* pathfinding, procedural room spawning, a
            modular and infinitely scalable system for upgrades, hundreds of animated sprites, a
            system to automatically build rooms from just an outline, a custom font and much, much
            more.
            <br />
            <br />
            The game isn't released yet, but I've learned a lot from making it! You can play a
            (very) early demo on{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              itch.io
            </Link>
            .
          </ProjectCard>
        );
      case 4:
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
            uses={[
              'Unity 2D',
              'A* Pathfinding',
              'Procedural Generation',
              'Enemy AI/Behavior',
              'Modular Upgrade System',
              'Auto-Build System',
              'Custom Font',
              'Audacity',
              'FL Studio',
              'Pixilart Studio',
              'Pixelforge',
              'C#',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!'],
              ['https://sp1cyham.itch.io/humptys-rise', 'ignore'],
            ]}
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
            <br />
            <br />
            The game features complex enemy AI using A* pathfinding, procedural room spawning, a
            modular and infinitely scalable system for upgrades, hundreds of animated sprites, a
            system to automatically build rooms from just an outline, a custom font and much, much
            more.
            <br />
            <br />
            The game isn't released yet, but I've learned a lot from making it! You can play a
            (very) early demo on{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              itch.io
            </Link>
            .
          </ProjectCard>
        );
      case 5:
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
            uses={[
              'Unity 2D',
              'A* Pathfinding',
              'Procedural Generation',
              'Enemy AI/Behavior',
              'Modular Upgrade System',
              'Auto-Build System',
              'Custom Font',
              'Audacity',
              'FL Studio',
              'Pixilart Studio',
              'Pixelforge',
              'C#',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!'],
              ['https://sp1cyham.itch.io/humptys-rise', 'ignore'],
            ]}
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
            <br />
            <br />
            The game features complex enemy AI using A* pathfinding, procedural room spawning, a
            modular and infinitely scalable system for upgrades, hundreds of animated sprites, a
            system to automatically build rooms from just an outline, a custom font and much, much
            more.
            <br />
            <br />
            The game isn't released yet, but I've learned a lot from making it! You can play a
            (very) early demo on{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              itch.io
            </Link>
            .
          </ProjectCard>
        );
      case 6:
        return (
          <ProjectCard
            titleImg="/assets/coding/humptysRise/humptyTitle.png"
            titleShadow="#3E157080"
            pixel={true}
            title="Woodlands Bathroom Simulator"
            tagline="A Humpty Dumpty themed dungeon crawler"
            img="/favicon.svg"
            itchio="https://sp1cyham.itch.io/wbs"
            itchioEmbed={10512227}
            itchioEmbedMobile={2728107}

            uses={[
              'Unity 2D',
              'A* Pathfinding',
              'Procedural Generation',
              'Enemy AI/Behavior',
              'Modular Upgrade System',
              'Auto-Build System',
              'Custom Font',
              'Audacity',
              'FL Studio',
              'Pixilart Studio',
              'Pixelforge',
              'C#',
            ]}
            ss={[
              ['cGnomeSketch.webp', 'edr'],
              ['cBanner.webp', 'df'],
            ]}
            ssPath="public/assets/art/animation/gnome/"
            links={[
              ['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!'],
              ['https://sp1cyham.itch.io/humptys-rise', 'ignore'],
            ]}
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
            <br />
            <br />
            The game features complex enemy AI using A* pathfinding, procedural room spawning, a
            modular and infinitely scalable system for upgrades, hundreds of animated sprites, a
            system to automatically build rooms from just an outline, a custom font and much, much
            more.
            <br />
            <br />
            The game isn't released yet, but I've learned a lot from making it! You can play a
            (very) early demo on{' '}
            <Link to="https://sp1cyham.itch.io/humptys-rise" target="_blank">
              itch.io
            </Link>
            .
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
