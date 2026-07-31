import { useState, createContext, useContext, useEffect } from 'react';
import { scrollContainerRef } from '../App';
import { Link } from 'react-router-dom';

import HeaderGraphic from '../components/HeaderGraphic';
import Base from '../Base';
import Category from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import ArtCard from '../components/ArtCard';

import { AppContext } from '../App';

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

  const { registerFn } = useContext(AppContext)!;

  useEffect(() => {
    registerFn(() => {
      resetProjIndex();
    });
  }, []);

  function CodingCategory() {
    switch (projIndex) {
      case 0:
        return <div></div>;
      case 1: //humpty
        return (
          <ProjectCard
            titleImg="/assets/coding/humptysRise/humptyTitle.png"
            titleShadow="#3E157080"
            pixel={true}
            imgMinusHeight={40}
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
              ['cMainMenu.webp', "the main menu of Humpty's Rise, with slight edits"],
              ['humptyThumb.webp', 'cool'],
            ]}
            ssPath="public/assets/coding/humptysRise/"
            links={[['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!']]}
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
      case 2: //exposure
        return (
          <ProjectCard
            video="/assets/coding/exposure/exposureTitle.webm"
            titleShadow="#3E157080"
            title="Exposure"
            youtube="https://www.youtube.com/embed/DXqbNUakSM8"
            tagline="A full photography editing suite + personalized coach"
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
              ['cCamera.webp', 'the basic camera, with additional features like leveling.'],
              [
                'cCropRight.webp',
                'the coach can analyse and suggest changes, like cropping out the right distraction.',
              ],
              [
                'cMetadata.webp',
                'the coach can also scrape metadata, giving advice central to your model of camera.',
              ],
              ['cAdjustments.webp', 'tweak your photo; the photographer remains in control.'],
              ['cGen1.webp', 'replace unwanted parts of your photo.'],
              ['cGen2.webp', 'voila!'],
              [
                'cCurateSet.webp',
                'the coach can curate your photos, and even preview your portfolio!',
              ],
            ]}
            ssPath="public/assets/coding/exposure/"
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
      case 3: //friend compass
        return (
          <ProjectCard
            titleImg="/assets/coding/friendCompass/friendTitle.webp"
            titleShadow="2629BD80"
            title="Friend Compass"
            tagline="An SMS-based friend finder"
            youtube="https://www.youtube.com/embed/EtJe8NGx1LQ"
            uses={['Twilio', 'Amazon DynamoDB', 'Android Studio', 'Kitlio', 'Node.js']}
            ss={[
              ['cMainView.webp', 'the main view of the game!'],
              [
                'cRegister.webp',
                'registering is as easy as scanning a (now defunct) qr code! scrapes hack the north data, like your name',
              ],
              [
                'cAddFriend.webp',
                'adding friends is as easy as scanning a (now defunct) qr code! scrapes hack the north data, like your name',
              ],
              [
                'cTrackFriend.webp',
                "track your friend's location using compass location and only SMS!",
              ],
            ]}
            ssPath="public/assets/coding/friendCompass/"
            links={[
              ['https://github.com/supershoop/FriendCompass', 'github link'],
              ['https://devpost.com/software/friend-compass', 'devpost'],
              ['https://www.youtube.com/watch?v=DXqbNUakSM8', 'demo video'],
            ]}
          >
            <strong>Friend Compass</strong> was a project was born out of limitation during{' '}
            <Link to="https://hackthenorth.com/" target="_blank">
              Hack the North 2025:
            </Link>{' '}
            My friend Owen, didn't have a data plan. Instead, he had what many data plans do offer
            is unlimited call and texting. We combined this with map games like Pikmin Bloom and
            Pokemon Go, and created Friend Compass.
            <br /> <br />
            Friend Compass is an Android App that displays your direction, position and elevation,
            but also where your friends are! We designed it to connect friends in unexpected places:
            you never know when your friend might be shopping a grocery isle away! As our first ever
            hackathon, we picked a small-scale project to build something with novelty we would use.
            <br /> <br />
            Though the project is quite simple, Friend Compass has a lot of potential, like
            emergency location directions in situations without Wifi. Even with such a simple
            project, we still had our fair share of difficulties:
            <ul>
              <li>
                Only Owen had an Android phone, so we couldn't even test the app with multiplayer by
                ourselves and had to borrow other hackers' phone (shoutout to them!)
              </li>
              <li>
                The code we wrote for Twilio, the automatic text service we used just refused to
                work for a solid day
              </li>
              <li>It was our first hackathon and first all-nighter, so we were a little fried</li>
              <li>
                I literally didn't have a computer and had to borrow one from the provided computer
                lab (which I think is shut down now? the one in E7)
              </li>
              <li>I HATE KOTLIN I HATE KOTLIN WHYYYYYY</li>
            </ul>
            <br />
            Please read the devpost it is hilarious lol. Also, never mention Friend Compass to Owen
            Wang ever. It is triggering.
          </ProjectCard>
        );
      case 4: //buckshot
        return (
          <ProjectCard
            titleImg="/assets/coding/buckshot/buckshotTitle.webp"
            titleShadow="#3E157080"
            pixel={true}
            title="Buckshot Mobile"
            tagline="A Buckshot Roulette remake for mobile"
            itchio="https://sp1cyham.itch.io/multiplayer-buckshot-roulette"
            itchioEmbedMobile={2893473}
            youtube="https://www.youtube.com/embed/ppfFA4YLgpY"
            uses={[
              'Unity 3D',
              'Devlog/Making of',
              'Local Multiplayer',
              'Mobile App',
              'Blender',
              'Blockbench',
              'Critical Reflex',
              'Audacity',
              'FL Studio',
              'Pixilart Studio',
              'C#',
            ]}
            ss={[
              ['cBoardView.webp', 'a view of the board'],
              ['cHealthSystem.webp', 'each lightning bolt represents 1 health point'],
              ['cLighter.webp', 'a cutscene animation, using the items (in this case, a lighter)'],
              ['cDealerView.webp', 'cinematic view of the dealer'],
            ]}
            ssPath="public/assets/coding/buckshot/"
            links={[
              [
                'https://sp1cyham.itch.io/multiplayer-buckshot-roulette',
                'itch.io link (no download)',
              ],
              ['https://github.com/SP1CYham/Buckshot-Mobile', 'github link'],
              ['https://www.youtube.com/watch?v=I_nc_XhKI2g', 'listen to the ost!'],
            ]}
          >
            <i>*please keep in mind the game is not available to download!</i>
            <br />
            <br />
            <strong>Buckshot Mobile</strong> is a remake of Buckshot Roulette, a video game by Mike
            Klubnika.
            <br />
            <br />
            Buckshot Roulette, like Russian Roulette, is a game about probability. Live and blank
            rounds are loaded in the shotgun in a random order, and you must best your opponent
            simply named “The Dealer” to win. While watching big youtubers and streamers like
            Markiplier, 8BitRyan, and CaseOh play, I wondered how cool Buckshot Roulette could be if
            it was made as a tabletop multiplayer game. Imagine shooting your opponent by actually
            holding up the phone and shooting! You actually don't have to imagine; I coded Buckshot
            Roulette as a tabletop multiplayer game, and here is the making of it. . wip
          </ProjectCard>
        );
      case 5: //taime
        return (
          <ProjectCard
            video="/assets/coding/taime/taimeTitle.webm"
            videoLoop={true}
            titleShadow="#3E1570"
            pixel={true}
            title="T(AI)ME"
            tagline="How much time does AI save you? Is it worth it??"
            youtube="https://www.youtube.com/embed/BWxXolwkqVo"
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
              [
                'cSavedTime.webp',
                'How much time someone saved by using AI! But what was the impact?',
              ],
              ['cQuestions.webp', 'some of the questions we asked quiz takers'],
            ]}
            ssPath="public/assets/coding/taime/"
            links={[
              ['https://devpost.com/software/t-ai-me-4dlnvk', 'devpost link!'],
              ['https://github.com/SP1CYham/jamhacksProject2026AIweb', 'github link!'],
            ]}
          >
            WIP
            <br />
            <br />
            Across North America, ongoing plans for data centers (such as recent proposals in
            Mississauga and Hamilton) and AI-related projects have sparked significant debate on the
            environmental cost of progress. Despite this, consumers are either mostly unaware of
            these impacts or the scale of impact on them and their local community. These facilities
            require massive amounts of electricity, water, and physical infrastructure, yet most
            consumers have little understanding of how their everyday AI usage contributes to these
            demands. We created TAIME (pronounced time) to bridge this gap. Our goal was to make the
            hidden environmental costs of AI visible, understandable, and personally relevant. By
            connecting individual AI usage to environmental metrics and local community impacts, we
            hope to encourage more informed conversations about the future of AI and the
            infrastructure that powers it. What it does TAIME is an interactive transparency
            platform that estimates the environmental footprint of an individual's AI usage through
            a survey-based model. Users answer questions about their AI habits, including frequency
            of AI use, types of models used, image, video, and text generation activity, and
            duration and intensity of usage. Using publicly available research and infrastructure
            estimates, TAIME generates personalized impact metrics, including estimated electricity
            consumption, estimated carbon emissions, estimated water usage, as well as show the
            potential impacts of AI infrastructure on local communities through utility bills and
            cognitive function.
            <br />
            <br />
            How we built it with hopes and dreams? Taime was built by a team of four over the course
            of JAMHacks using a Node.js backend with a Typescript, HTML, and CSS frontend. The
            calculation engine uses user-submitted usecases to estimate the number of tokens, which
            can be used to find energy and water consumption. This required us to do large amounts
            of research into the energy consumption created by different models and it's relevant
            cost found in areas such as Ontario. Challenges we ran into Accurate quantitative
            sources on AI power consumption are often biased and few and far between, and we tried
            finding citable and defensible sources The environmental impact on an individual level
            was much lower than expected, meaning we had to adjust some features Being able to build
            a product that feels personal and impactful to the user elliot is a beautiful chadlite
            and claude is an ltn
            <br />
            <br />
            Accomplishments that we're proud of Being beginner hackers, we were really proud that we
            managed to pick up so many skills on the fly and ultimately create a product we are
            proud of. Cool visual elements Finding the really awesome 213 page MIT study What we
            learned "meow. wait no i learned that coding. is evil. and that everyone that works in
            tech and ai is kind of evil. " Elliot "we learned a lot about ai and it's actual impacts
            on the environment, challenging our assumptions such as energy and water usage." Kyle
            "and I LEARNED how to use claude" Lucas "i learned about the power of friendship and
            that my head fits perfectly under a chair that blocks out light so i can sleep in hour
            intervals" Andrew
            <br />
            <br />
            What's next for T(AI)ME We think that our product could be further integrated to LLMs
            via plug-ins or browser extensions that would allow users to understand their impact and
            usage during sessions. Further research must also be conducted on the resource
            consumption, as data is still unreliable.
          </ProjectCard>
        );
      case 6: //wbs
        return (
          <ProjectCard
            titleImg="/assets/coding/wbs/wbsTitle.webp"
            titleShadow="#3E157080"
            pixel={true}
            title="Woodlands Bathroom Simulator"
            tagline="A FNAF fangame about my highschool"
            itchio="https://sp1cyham.itch.io/wbs"
            itchioEmbed={10512227}
            itchioEmbedMobile={2728107}
            youtube="https://www.youtube.com/embed/OUgwzJAGKE4"

            uses={[
              'Unity 2D',
              'A* Pathfinding',
              'Enemy AI/Behavior',
              'FL Studio',
              'Audacity',
              'C#',
            ]}
            ss={[
              ['cRightDoor.webp', 'the "art girl" at the right door'],
              ['cCamSide.webp', 'the "deca kid" seen through the side cam'],
              ['cRobotics.webp', "Absolute Robotics, or team 4308's bot in 2024"],
              ['cPiracy.webp', 'kjos piracy prevention (one of the in-between-night minigames)'],
              ['cTopDown.webp', 'explore the school in a twin-stick shooter!'],
            ]}
            ssPath="public/assets/coding/wbs/"
            links={[
              ['https://sp1cyham.itch.io/wbs', 'itch.io link!'],
              [
                'https://sp1cyham.itch.io/woodlands-bathroom-simulator-artsfest',
                'itch.io link (artsfest ver)',
              ],
            ]}
          >
            <strong>Woodlands Bathroom Simulator</strong> (what a title..) is a Five Nights at
            Freddy's fangame themed around my highschool's bathroom. While learning Unity, I decided
            to recreate games, and chose FNAF. After a bit of development though, I decided to give
            the game an actual theme and story, and my highschool, The Woodlands SS, came into mind.
            <br />
            <br />
            Not only does the game boast 5 nights with 4 unique "animatronics", a bonus 6th night
            with a 'Ram' bossfight (our school animal mascot), additional in-between-night minigames
            and a customizable difficulty night, but ALSO features a top-down bullet hell twin-stick
            shooter where you fight through 4 levels, and another final boss against the Ram.
            <br />
            <br />
            I legitimately thought I would get suspended when releasing the game, but it turned out
            to be a bit hit among students.. and teachers! Our school's art teacher allowed me to
            showcase the game at our school's ARTSFEST.
            <br />
            <br />
            Here's a disclaimer ripped straight from the game:
            <br />
            <i className="text-[10px] leading-none">
              This game is based on a real-life high school, The Woodlands. While I do draw
              inspiration from the school, this game does not accurately represent the school, its
              students, faculty, clubs, teachers, or facilities, including the bathrooms. This game
              was not created with hate, but instead respect to The Woodlands for being such an
              amazing school. (Hour-long lunch breaks, amazing clubs, awesome teachers--like cmon!)
              This game is a personal project I've been working on for 8-ish months with the main
              purpose of entertaining. The post-apocalyptic world that the game is set in and the
              events that occur are not at all accurate to the real school; everything is fictional,
              and any resemblance to real individuals, events, or locations is purely coincidental.
              This game is not intended to offend or misrepresent anyone associated with The
              Woodlands, and I apologize if I do.
            </i>
            <br />
            <br />
            Of course, you can play the game and it's ARTSFEST version on{' '}
            <Link to="https://sp1cyham.itch.io/wbs" target="_blank">
              itch.io
            </Link>
            .
          </ProjectCard>
        );
      case 7: //etc
        return (
          <>
            <Base>
              <ArtCard
                title="Cut in Pairs"
                img="/assets/coding/other/cutinpairs.webp"
                itchio="https://sp1cyham.itch.io/cuts-in-pairs"
                itchioEmbed={15295080}
                itchioEmbedMobile={3973122}
              >
                A little game I made for my high school CS Club's game jam. I actually was an exec
                at the time of making the game so my game didn't compete. It was also my first time
                using Godot, and this game works on mobile too! You can check out the annual game
                jam{' '}
                <Link to="https://itch.io/jam/woodlands-cs-club-jam-2025" target="_blank">
                  here!
                </Link>
              </ArtCard>
              <ArtCard
                title="Physics Project"
                img="/assets/coding/other/trafficText.webp"
                itchio="https://sp1cyham.itch.io/traffic-texter-fong-fizx-psa"
                itchioEmbed={13355125}
                itchioEmbedMobile={3464584}
              >
                placeholder description
              </ArtCard>
              <ArtCard
                title="Shoyu the Tofu"
                img="/assets/coding/other/shoyuTofu.webp"
                itchio="https://supershoop.itch.io/shoyu-the-tofu"
                itchioEmbed={11267376}
                itchioEmbedMobile={2915183}
              >
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
        <p className="my-3 wrap-normal">
          check out some of the projects i've made! <br /> <br />
          you can find most of my work on{' '}
          <Link to="https://github.com/SP1CYham" target="_blank">
            github
          </Link>
          ,
          <br />
          some of my video games on{' '}
          <Link to="https://sp1cyham.itch.io" target="_blank">
            itch.io
          </Link>
          ,
          <br />
          and my hackathon projects on{' '}
          <Link to="https://devpost.com/kylehuang1107" target="_blank">
            devpost!
          </Link>
          <br />
          <br />
        </p>

        <Category
          overrideMax={5}
          categoryArray={[
            {
              title: "Humpty's Rise",
              text: 'dungeon crawler w/ balatro-like elements built in unity!',
              img: '/assets/coding/humptysRise/humptyThumb.webp',
              onClick: () => handleCategoryClick(1),
              flex: 3,
            },
            {
              title: 'Exposure',
              text: 'full photography editing suite + personalized coach',
              img: '/assets/coding/exposure/cCurateSet.webp',
              onClick: () => handleCategoryClick(2),
              flex: 2,
            },
            {
              title: 'Friend Compass',
              text: 'navigation for friends using only SMS!',
              img: '/assets/coding/friendCompass/cRegister.webp',
              onClick: () => handleCategoryClick(3),
              flex: 2,
            },
            {
              title: 'Buckshot Mobile',
              text: 'a recreation of "Buckshot Roulette" for mobile multiplayer',
              img: '/assets/coding/buckshot/cDealerView.webp',
              onClick: () => handleCategoryClick(4),
              flex: 2,
            },
            {
              title: 'T(AI)ME',
              text: 'how is AI saving you time... and impacting the world?',
              img: '/assets/coding/taime/cSavedTime.webp',
              onClick: () => handleCategoryClick(5),
              flex: 2,
            },
            {
              title: 'Woodlands Bath. Sim.',
              text: 'a FNAF fangame themed around a high-school bathroom',
              img: '/assets/coding/wbs/cCamSide.webp',
              onClick: () => handleCategoryClick(6),
              flex: 3,
            },
            {
              title: 'other',
              text: 'etc',
              img: '/assets/coding/other/shoyuTofu.webp',
              onClick: () => handleCategoryClick(7),
              flex: 2,
            },
          ]}
        />
      </Base>
    </>
  );
}
