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
            img="/assets/coding/humptysRise/cBoxArt.webp"
            pixel={true}
            imgMinusHeight={40}
            title="Humpty's Rise"
            tagline="A Humpty Dumpty themed dungeon crawler"
            overrideEmbed="https://store.steampowered.com/widget/5079540"
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
            links={[
              ['https://store.steampowered.com/app/5079540/Humptys_Rise/', 'steam storepage!'],
              ['https://sp1cyham.itch.io/humptys-rise', 'itch.io link!'],
            ]}
          >
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
            The game isn't released yet, but I've learned a lot from making it! You can wishlist the
            game on steam, or play a (very) early demo on{' '}
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
            uses={[
              'Twilio',
              'Amazon DynamoDB',
              'Android Studio',
              'Kitlio',
              'Node.js',
              'SMS-based Technology',
            ]}
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
            Klubnika. Buckshot Roulette, like Russian Roulette, is a game about probability. Live
            and blank rounds are loaded in the shotgun in a random order, and you must best your
            opponent simply named “The Dealer” to win. Items spawn during the game which allow you
            to double the damage of the shotgun, or check if the round is a live or a blank, adding
            a lot more strategy into the game.
            <br />
            <br />
            At the time, no multiplayer version of the game was available, and I realized the format
            would work incredibly well on mobile devices. I decided to spend a month remaking the
            game from scratch for mobile devices. This included all of the code, the 3D models, the
            art, music, game states and loops and more. I also recorded the entire process to turn
            into a developer vlog, or devlog.
            <br />
            <br />I made sure to confirm with the Critical Reflex team that the game was ok to
            publish. Only 30 minutes after releasing the game and the devlog, did the CEO personally
            reach out to me, telling me I had to take down the game. It had turned out the person I
            spoke to had incorrectly given permission for me to release when it actually violated
            the game's copyright.
            <br />
            <br />
            This really sucked. I had lost a month of my life to one message. What I was even more
            furious about though, was the lack of communication and coordination in their team.
            You're telling me you had weeks to confirm whether the game was actually ok to release,
            and only AFTER I released it did you realise it wasn't????
            <br />
            <br />
            Thank god I had the devlog recorded and uploaded, so I had something to show for all
            this work! Imagine if I was an aspiring game developer who spent even longer polishing
            and perfecting a fangame, and had it shut down immediately after release. That would
            absolutely kill my motivation to ever work on games again!!
            <br />
            <br />
            Thankfully, it seemed this whole situation has improved the coordination of the team.
            Please don't harrass Critical Reflex for any of this by the way, that's just not cool.
            <br />
            <br />I feel like it's been long enough, so I open-sourced the project in case anyone
            was curious about the inner workings of the game. Please don't distribute a build.
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
              'TypeScript',
              'HMTL',
              'CSS',
              'Node.js',
              'AI',
              'PSA',
              'Research',
              'Vite',
              'JamHacks 10',
            ]}
            ss={[
              [
                'cSavedTime.webp',
                'How much time someone saved by using AI! But what was the impact?',
              ],
              ['cQuestions.webp', 'some of the questions we asked quiz takers'],
              ['cTaimeCost.webp', 'Real life impact of AI.'],
              ['cTaimeMind.webp', 'how AI impacts the mind.'],
            ]}
            ssPath="public/assets/coding/taime/"
            links={[
              ['https://devpost.com/software/t-ai-me-4dlnvk', 'devpost link!'],
              ['https://github.com/SP1CYham/jamhacksProject2026AIweb', 'github link!'],
            ]}
          >
            Across North America, ongoing plans for data centers (such as recent proposals in
            Mississauga and Hamilton) and AI-related projects have sparked significant debate on the
            environmental cost of progress. These facilities require massive amounts of electricity,
            water, and physical infrastructure, yet most consumers have little understanding of how
            their everyday AI usage contributes to these demands. I and my team of 3 other hackers
            created T(AI)ME (pronounced time) to bridge this gap. Our goal was to make the hidden
            environmental costs of AI visible, understandable, and personally relevant. By
            connecting individual AI usage to environmental metrics and local community impacts, we
            hope to encourage more informed conversations about the future of AI and the
            infrastructure that powers it.
            <br />
            <br />
            <strong>T(AI)ME</strong> is an interactive transparency platform that estimates the
            environmental footprint of an individual's AI usage through a survey-based model. Users
            answer questions about their AI habits, including frequency of AI use, types of models
            used, image, video, and text generation activity, and duration and intensity of usage.
            Using publicly available research and infrastructure estimates, T(AI)ME generates
            personalized impact metrics, including estimated electricity consumption, estimated
            carbon emissions, estimated water usage, as well as show the potential impacts of AI
            infrastructure on local communities through utility bills and cognitive function.
            <br />
            <br />
            Taime was built by me and a team of 3 other people during JAMHacks 10 using Node.js,
            Typescript, HTML, and CSS. The calculation engine uses user-submitted usecases to
            estimate the number of tokens, which can be used to find energy and water consumption
            <br />
            <br />
            To be honest, we didn't really know what we were getting ourselves into. Turns out,
            people who vibecode burn millions of tokens every day, meaning even with the highest
            settings, the token estimated usage is too low. Additionally, we spent so long
            researching on AI that we barely implemented any features. Accurate, quantitative
            sources on AI power consumption are often biased and few and far between. Also,
            environmental impact on an individual level ended up being much lower than expected,
            leading to our stance almost seeming pro-AI when it was supposed to be more neutral.
            <br />
            <br />
            We think that our product could be further integrated to LLMs via plug-ins or browser
            extensions that would allow users to understand their impact and usage during sessions.
            Further research must also be conducted on the resource consumption, as data is still
            unreliable.
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
                using Godot, and this game works on mobile too!
                <br />
                <br />
                You can check out the annual game jam{' '}
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
                a game i made for my grade 11 physics class! we were tasked to do a PSA for texting
                while driving. i decided to make a game that actually tests your ability to text and
                drive.
              </ArtCard>
              <ArtCard
                title="Shoyu the Tofu"
                img="/assets/coding/other/shoyuTofu.webp"
                itchio="https://supershoop.itch.io/shoyu-the-tofu"
                itchioEmbed={11267376}
                itchioEmbedMobile={2915183}
              >
                its actually incredible how bad we f*cked this game up. like seriously. <br />
                <br />
                shoyu the tofu is probably the prime example of how you SHOULDN'T make a video game.
                this game was made in 4 days for the gmtk game jam 2024, where the theme was "built
                to scale". our ideas were actually pretty solid, where you play as this tofu who can
                puff up or shrink down. your size changes, but your density doesnt, so you can jump
                super high when puffed and can deal damage when shrunk down by ramming into enemies.
                <br />
                <br />
                but everything else just sucks. the hitboxes are egregious, the tilemaps are all
                shifted by decimals in random spots, the movement is clunky and uncontrollable, and
                the enemies are punishing and their hitboxes remain after death. you get stuck
                halfway through because we forgot to set the door prefab attributes to the next
                level.
                <br />
                <br />
                don't play this game. we're keeping it up for educational purposes. and i guess the
                art and music is ok.
              </ArtCard>
            </Base>
          </>
        );
      case 8: //circuit breaker
        return (
          <ProjectCard
            titleImg="/assets/coding/circuit/circuitTitle.webp"
            titleShadow="#3E157080"
            title="Circuit Breaker"
            tagline="A Wire-Placing Puzzle Game (Winner of GMTK Game Jam 2026!)"
            itchio="https://sp1cyham.itch.io/circuit-breaker"
            itchioEmbed={18772971}
            itchioEmbedMobile={4828647}
            itchAspect={8 / 5}
            youtube="https://www.youtube.com/embed/gQYV9-juHb4"

            uses={['Unity 2D', 'Pathfinding', 'Puzzle Design', 'FL Studio', 'Audacity', 'C#']}
            ss={[
              ['cCircuitArt.webp', 'itch io cover!'],
              ['cComic1.webp', 'the first comic page! details your origin as a marketable robot'],
              [
                'cComic2.webp',
                "the second comic page! you realise you've been sold to mr. evil at closed AI!!",
              ],
              [
                'cComic3.webp',
                'the third comic page! you run away, narrowly escaping by connecting wire to a bomb, caving in the door!',
              ],
              [
                'cComic4.webp',
                'the fourth comic page! this appears after beating the game, when you finally escape.',
              ],
              ['cComic5.webp', 'the last comic page! thanks for playing!!!'],
            ]}
            ssPath="public/assets/coding/circuit/"
            links={[
              ['https://sp1cyham.itch.io/circuit-breaker', 'itch.io link!'],
              ['https://youtu.be/awegilW3DTc?t=287', "GMTK's feature video!"],
            ]}
          >
            <i>
              *unity or itch is being weird and scaling the game wrong, please just play on the{' '}
              <Link to="https://sp1cyham.itch.io/circuit-breaker">actual itch page!</Link>
            </i>
            <br />
            <br />
            <strong>Circuit Breaker</strong> is a puzzle game my friend Lucas and I created in only
            3 days for the GMTK Game Jam 2026, which happened to be 2026's biggest game jam. <br />
            <br />
            Against over 10,000 other entries and over 37,000 developers, we placed #85th in audio,
            #64th in creativity, and #8th in enjoyment. We also landed in GMTK's top 20 favourite
            games, winning* the whole jam.
            <br />
            <br />
            Inspired by the theme "Countdown", the puzzle game features a wire placing mechanic that
            allows you to carve a path to a bomb. Then, you must escape the room before the
            electricity reaches the bomb. This creates an interesting set of mechanics for puzzles,
            as you must think about where to lay the fuse, and what to do while your available moves
            tick down.
            <br />
            <br />
            In Mark "GMTK" Brown's words,{' '}
            <i>
              "this is a very clever puzzler with a bunch of thoughtful conundrums that, if you're
              asking me, strike a perfect difficulty balance."
            </i>
            <br />
            <br />
            As a huge fan of GMTK, Mark Brown's game design videos and devlogs, as well as literally
            learning how to code from his tutorial, winning this jam was a dream come true. I
            documented my entire process in a 20 minute devlog which you can watch above! And try
            out the game on itch.io below!
            <br />
            <br />
            <i className="text-[7px]">
              *technically the "winner" is decided by placement alone, but most people consider
              placing top 100 as winning in jams as competitive as GMTK. Also, technically we did
              get a #1 spot in the "Mark's Favourites" category, so it counts!!
            </i>
          </ProjectCard>
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
              title: 'Circuit Breaker',
              text: 'winner of the GMTK Game Jam 2026!',
              img: '/assets/coding/circuit/cCircuitArt.webp',
              onClick: () => handleCategoryClick(8),
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
              flex: 2,
            },
            {
              title: 'other',
              text: 'etc',
              img: '/assets/coding/other/shoyuTofu.webp',
              onClick: () => handleCategoryClick(7),
              flex: 1,
            },
          ]}
        />
      </Base>
    </>
  );
}
