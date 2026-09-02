import { useState, useRef } from 'react';
import { type ReactNode } from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

import HeaderGraphic from '../components/HeaderGraphic';
import Category from '../components/CategoryCard';
import ArtCard from '../components/ArtCard';
import MusicPlayer from '../components/MusicPlayer';

export default function Art() {
  const [projIndex, setProjIndex] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);

  function handleCategoryClick(index = 0) {
    setProjIndex(index);
    setTimeout(() => {
      categoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1);
  }

  function CategoryHead({ title, children }: { title: string; children?: ReactNode }) {
    return (
      <>
        <h1>
          <span className="inline-block">{title}</span>
        </h1>
        <p className="mb-6 text-center">{children}</p>
      </>
    );
  }

  function ArtCategory() {
    switch (projIndex) {
      case 0:
        return <div></div>;
      case 1: //animations
        return (
          <>
            <CategoryHead title="animations!">
              moving pictures! animations are my main artform. <br /> you can find most of these on
              my{' '}
              <Link to="https://www.youtube.com/@SPICYham" target="_blank">
                youtube channel.
              </Link>{' '}
            </CategoryHead>
            <ArtCard
              title="Terraria Gnome Animated"
              youtube="https://www.youtube.com/embed/sQxJLyRYvn0"
              software={['Flipaclip', 'Premiere Pro', 'ibisPaintX', 'FL Studio']}
              frames="3500 (15 fps)"
              time="~13 months"
              date="Feb 13, 2025"
              links={[['https://youtu.be/sQxJLyRYvn0', 'YouTube Link!']]}
              wipsPath="public/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
                [
                  'cGnomeBG.webp',
                  'various backgrounds throughout the video that genuinely showed up for less than a second',
                ],
                [
                  'cGnomeFeat.webp',
                  "featured in the media spotlight in Feburary 2025's state of the game!",
                ],
                ['cBanner.webp', 'the player banner in all of its glory'],
                ['cProjects.webp', 'all the different flipaclip projects'],
                ['cMidFinger.webp', 'uncensored gnome middle finger'],
              ]}
            >
              This is the latest entry in my Terraria Animated series. At the time, no animations
              ever focused on Terraria Calamity, a very popular mod of Terraria. I combined this
              with the idea of chasing down a gnome Tom and Jerry style, along with a
              Animation-vs-Animator-esque meta sequence of downloading the mod and using its
              features to finally stop the gnome.
              <br />
              <br />
              This video was done in collaboration with{' '}
              <Link to="https://www.youtube.com/@Terraw" target="_blank">
                Terrasteel,
              </Link>{' '}
              an awesome Terraria youtuber I've been watching for a while, appearing as exposition
              in order to give the protagonist a motive (the in-game achievement).
              <br />
              <br />
              This video took months; I started working on it before Solar Eclipse animated came out
              and took a long break in the middle of animating. This would be my last video animated
              in Flipaclip as the app limitations were starting to hinder my work.
            </ArtCard>

            <ArtCard
              title="CO-MOTION - Collaborative Animation Project"
              youtube="https://www.youtube.com/embed/sfZZX7dUDc4"
              software={['Flipaclip', 'After Effects', 'Premiere Pro', 'Toonsquid', 'Blender']}
              frames="250 (painfully detailed) frames"
              time="~7 months"
              date="Jun 5th, 2026"
              links={[
                ['https://www.instagram.com/reel/DZc3PtaRsEY/', 'Instagram Link'],
                ['https://www.youtube.com/watch?v=sfZZX7dUDc4', 'Youtube Link!'],
                ['https://www.instagram.com/reel/DW37RX9Efn9/', 'Promotional Video I Made'],
              ]}
              wipsPath="public/assets/art/animation/comotion/"
              wips={[
                [
                  'cComotionSketch.webm',
                  'the animation sketch. originally, it was planned to be 200 frames, but art kept being submitted!',
                ],
                [
                  'cArtClubGuys.webp',
                  'these guys are discord emojis in the art club server. the white cat is designed by @0ghoti, and the mouse cheese guy is designed by @AllBrite!',
                ],
                [
                  'cClubFrames.webp',
                  "i also wanted to represent our school's other clubs: (in order) deca, music, absolute robotics / 4308, tmun, drama, prefets, asian student association, athletics, cs and debate club!",
                ],
              ]}
            >
              My sendoff to our school's Art Club: a 250-frame collaborative animation with full
              color, rendering and all. We ended with over <strong>40 individual artists </strong>
              participating, and <strong>85+ individual </strong>
              drawings contributed.
              <br />
              <br />
              Artists contributed by drawing Art Club logos, Woodlands (our school) logos/crests, or
              skull drawings. Artists were given full creative freedom, resulting in a chaotic but
              beautiful sequence of different colors, rendering styles and mediums!
              <br />
              <br />
              Originally, I planned each frame to be assigned to an individual artist, but soon
              realized it was unrealistic. I ended up creating most of the animation myself over a
              few months. I tried incorporating as much Woodlands culture as possible, using student
              artwork as backgrounds, including a section filled with other clubs, and more.
            </ArtCard>

            <ArtCard
              title="Terraria Solar Eclipse Animated"
              youtube="https://www.youtube.com/embed/-ia6zQR0olI"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1500 (12 fps)"
              time="2 days"
              date="Apr 9, 2024"
              links={[['https://www.youtube.com/watch?v=-ia6zQR0olI', 'Youtube Link!']]}
              wipsPath="public/assets/art/animation/eclipse/"
              wips={[
                ['cEclipseShowcase.webp', 'LETS GOOOOOOOO'],
                ['cRedigit.webp', 'LETS GOOOOOOOO x2'],
                [
                  'cEclipseIRL.webp',
                  'crappy picture i took when i went to see the real solar eclipse (not totality)',
                ],
              ]}
            >
              This was created to celebrate the{' '}
              <Link
                to="https://en.wikipedia.org/wiki/Solar_eclipse_of_April_8,_2024"
                target="_blank"
              >
                Great North American Eclipse,
              </Link>{' '}
              which I had heard about a couple days prior. The idea of an animation about one of the
              most infamous <i>'Terraria'</i> things in Terraria, the dreaded Solar Eclipse, while
              it was happening in real life, was something I couldn't pass off.
              <br />
              <br />
              I had the idea of all my animations so far coming together for one big event. I
              included all my previous characters (except meteorite armor guy sorry) into a sort of
              multiverse (cliche I know). I originally planned all players in all my animations to
              be the same person in different times, so I came up with new names for the other
              players (that you can see in the death log).
              <br />
              <br />
              This led me to speedrunning the whole video in just <strong>2 days.</strong> I
              actually saw the solar eclipse in-person too (not in totality but it was still cool),
              animating the drive there and the drive back, and editing all night long. I skipped a
              swim practice to try and get it out on the day of, and still missed it.
              <br />
              <br />
              This rush led to wayyy more mistakes in the animation than usual, like the missing
              sounds when hitting the moon, and the Moon Lord literally disappearing at the end (I
              WAS GONNA EDIT HIM IN FORTNITE DANCING IT WAS GONNA BE SO FUNNY IM SO MAD).
              <br />
              <br />
              Despite it all,{' '}
              <Link
                to="https://www.reddit.com/r/Terraria/comments/1bzj7j6/comment/kyuosz7/"
                target="blank"
              >
                Redigit,
              </Link>{' '}
              the creator of Terraria saw it, which I'm still flabbergasted about!
            </ArtCard>

            <ArtCard
              title="Sherma (Silksong Animated)"
              youtube="https://www.youtube.com/embed/a-2mq2p-guY"
              software={['Toonsquid', 'Premiere Pro', 'After Effects']}
              frames="720 (15 fps)"
              time="1 week"
              date="Nov 23, 2025"
              links={[
                ['https://www.youtube.com/watch?v=a-2mq2p-guY', 'Youtube Link!'],
                [
                  'https://giphy.com/gifs/pixel-sp1cyham-hk-silksong-dUWwzOoultuiIjy8u4',
                  'Giphy Link!',
                ],
              ]}
            >
              A Hollow Knight: Silksong animation! I had the idea of Hornet playing along with
              Sherma for a while, but never got around to making it. Even after I started animating,
              I struggled to get the backgrounds looking right and lost motivation.
              <br />
              <br />
              This was also my first full-blown animation made with Toonsquid! If you noticed the
              shading and compositing is wayyy better in this video than any previous video, that's
              why.
              <br />
              <br />
              I knew the Silksong hype kinda died down so the video wouldn't do great, so I posted
              it on Reddit and a gif on Giphy first. Somehow I check 3 days later and the gif blows
              up on Giphy with a million views. Then I get like 3 messages on Reddit asking if they
              could repost the video on youtube, and someone actually reposts on youtube and that
              one blows up.
              <br />
              <br />I then proceeded to post on Youtube. It did not blow up. Life is unfair.
            </ArtCard>

            <ArtCard
              title="Terraria Goblin Tinkerer Animated"
              youtube="https://www.youtube.com/embed/qrPZx68gY9I"
              software={['Flipaclip', 'Premiere Pro']}
              frames="1354 (20 fps)"
              time="~1 month"
              date="Apr 9, 2024"
              links={[['https://www.youtube.com/watch?v=qrPZx68gY9I', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/goblin/"
              wips={[['cGoblinSketch.webp', 'a small sketch to map colors and design']]}
            >
              Terraria Goblin Tinkerer Animated remains my most viewed (longform) video. This kinda
              baffles me since at first it flopped heavily. I kinda assumed the whole Terraria trend
              was over and I would have to start doing something else.
              <br />
              <br />
              This video did, in part, inspire the change to a much more narrative-focused animation
              style. What I mean by that is, previously I would rely on the game's weird quirks and
              mechanics to make an animation interesting, like the jumpscare you get from Duke
              Fishron when fishing with a truffle worm. My more recent animations, instead of
              showing a funny scenario in Terraria, tell a story set in Terraria's world. Even
              though it takes longer to animate it, this form of storytelling is much more fufilling
              to watch and to make.
              <br />
              <br />I don't think anything I can make will ever surpass this video's view count.
              Except those goddammed shorts. And my stupid gifs. lol.
            </ArtCard>

            <ArtCard
              title="Hermitcraft S10 Trap Animation"
              youtube="https://www.youtube.com/embed/gfI4R38zY-g"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[['https://www.youtube.com/watch?v=gfI4R38zY-g', 'Youtube Link!']]}
            >
              This was one of the greatest moments of Hermitcraft S10 so I knew I had to animate it.
              <br />
              <br />I also tried out a new lip-syncing style in this video, and it ended up sticking
              cuz I use it all the time now!
            </ArtCard>

            <ArtCard
              title="Dream vs. Gumball"
              youtube="https://www.youtube.com/embed/24v18rdIe80"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[['https://www.youtube.com/watch?v=24v18rdIe80', 'Youtube Link!']]}
            >
              this video is an enigma
            </ArtCard>

            <ArtCard
              title="PVZ Oak vs. Bling Yeti"
              youtube="https://www.youtube.com/embed/TgrYxzbDuUs"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[
                ['https://www.youtube.com/watch?v=TgrYxzbDuUs', 'Youtube Link!'],
                ['https://giphy.com/gifs/phonk-tree-pvz-hCmk4p5Hc7P5FawQkv', 'Giphy Link!'],
              ]}
            >
              yeah
            </ArtCard>

            <ArtCard
              title="cave divers when they fight queen bee"
              youtube="https://youtube.com/embed/9qmniMSMA8c"
              youtubeAspect="9/16"
              software={['Flipaclip', 'Capcut :sob:']}
              frames="~132 (15 fps)"
              time="like an hour"
              date="Feb 24, 2025"
              links={[['https://youtube.com/shorts/9qmniMSMA8c', 'Youtube Link.']]}
            >
              i made this in computer science class in one morning. my friend wrote the description
              in 10 seconds. <br />
              <br /> it has 7 million views.
              <br />
              <br /> i dont even pretend to know the algorithm anymore.
            </ArtCard>
          </>
        );
      case 2: //3d art
        return (
          <>
            <CategoryHead title="3d art">
              renders and other 3d work.
              <br />
              made with blender!
            </CategoryHead>

            <ArtCard
              title="Translucent"
              img="/assets/art/3D/translucent/transFish.webp"
              imgs={[
                '/assets/art/3D/translucent/transPhone.webp',
                '/assets/art/3D/translucent/transForest.webp',
                '/assets/art/3D/translucent/transBed.webp',
              ]}
              wipsPath="/assets/art/3D/translucent/"
              wips={[
                ['cTransFull.webp', 'the full complete image of Translucent'],
                ['cPhone.webp', 'the phone scene behind the scenes'],
                [
                  'c3DForest.webp',
                  'i made this forest literally an hour before the summative was due',
                ],
                ['cFishPoster.webp', 'FISH POSTER YEAHHHHHHHHHHH'],
                ['cFishPosterReal.webp', 'FISH POSTER BUT REAL YEAHHHHHHHHHHH'],
              ]}
              date="Jan. 21st 2026"
              time="~1 month"
            >
              Translucent is my art series I made as my final summative for my highschool media arts
              class. Its supposed to represent stress in my life by personifying and exaggerating
              scenarios and objects, but isn't afraid to shy away from whimsy and the surreal. It
              also has a theme of windows (like you're peering into my life, but only a part of it,
              hence the name Translucent).
              <br />
              <br />I didn't really try super hard to stick to the theme though, and just had fun
              creating weird scenes in blender. Its a school assignment after all for a class where
              I didn't need the credits anyways. I did get a 100 on this though, so win-win.
              <br />
              <br />
              Much of my 3D work, especially these pieces, are inspired by the wonderful work of
              Louie Zong.
            </ArtCard>

            <ArtCard
              title="Ready to Depart"
              img="/assets/art/3D/readyToDepart.webp"
              date="Nov. 20 2025"
              time="1.5 hours"
            >
              A small art piece I made for a creative exploration exercise in media arts.
              <br />
              <br />
              There's not much "deeper meaning" or whatever in this, I just tried to embrace the
              whimsy and surreal.
            </ArtCard>

            <ArtCard
              title="Hermitcraft Bunny"
              img="/assets/art/3D/hermitcraftBunny/hermitcraftBunny.webp"
              wipsPath="/assets/art/3D/hermitcraftBunny/"
              wips={[
                ['cHermitcraftBunnyConcept.webp', 'a small sketch to layout the composition'],
                ['cHappyGhast.webp', 'it was so fun modelling this happy ghast :)'],
              ]}
              date="Jan. 21st 2026"
              time="~4 days"
            >
              This was made for an Art Secret Santa for our highschool Art Club! My recipient wanted
              something Hermitcraft-related, so I 3D-modelled one of the funniest moments in S11
              thus far.
            </ArtCard>

            <ArtCard
              title="Hack the North"
              img="/assets/art/3D/htn.webp"
              date="Oct. 3rd 2025"
              time="1 week"
            >
              This was my first real piece in blender! It was inspired by my friend, Owen, and I's
              time at Hack the North 2025. It was hella stressful and our first hackathons ever.
              This was made for a media arts assignment where we replicated a certain artist's
              style, and I chose Louie Zong.
              <br />
              <br />
              Check out <Link to="/coding">Friend Compass,</Link> the Android App we made at
              HTN2025!
            </ArtCard>

            <ArtCard
              title="Ni Hao Film"
              youtube="https://www.youtube.com/embed/mz9-sbVoQCo"
              date="Nov. 16th 2025"
              time="1 week"
            >
              A small short film I made for media arts about being a 2nd-generation immigrant.
              <br />
              <br />
              I'm not very happy with the result but oh well.
            </ArtCard>

            <ArtCard
              title="Pokemon Day 2026"
              img="/assets/art/3D/pokemonDay2026.webp"
              date="Feb. 27th 2026"
              time="1 day"
            >
              Pokemon day!
              <br />
              <br />I wasn't really into pokemon as a kid, but at the time I was playing so much
              Cobblemon (minecraft pokemon mod) with my friends. I thought it would be fun to make
              artwork!
              <br />
              <br />
              It features my favourite pokemon, Gengar, my friend Hang's favourite pokemon, Snorlax,
              and Jirachi for the hell of it.
            </ArtCard>
          </>
        );
      case 3: //2d
        return (
          <>
            <CategoryHead title="2d art">characters & backgrounds!</CategoryHead>

            <ArtCard
              title="Late Drive Home"
              video="/assets/art/2D/lateDriveHome.webm"
              frames="16, 8 fps"
              date="June 28, 2024"
              time="~5-7 days"
            >
              An art piece I made after a long swim meet and the coziest drive home I've ever
              experienced.
              <br />
              <br />I also made{' '}
              <Link target="_blank" to="https://youtu.be/Qeq75XT7UhM">
                music for this piece!
              </Link>
            </ArtCard>

            <ArtCard
              title="ESL Door Mural"
              img="/assets/art/2D/eslDoor/eslDoor.webp"
              wipsPath="/assets/art/2D/eslDoor/"
              wips={[
                ['cDoorIRL.webp', 'the real door at The Woodlands Secondary School!'],
                [
                  'cDoorInit.webp',
                  'my initial proposal was for a different door. i was not picked (obviously) but had the opportunity to do ESL instead! thankfully one of my friends was picked and did a great job!',
                ],
                [
                  'cDoorSketch.webp',
                  'a preliminary sketch. i actually like the wonders of the world in the background, i wish i did that in the final design.',
                ],
              ]}
              date="May 8, 2024"
              time="like a month"
            >
              Our highschool, The Woodlands, has door mural opportunities for artists every year.
              Doors to classrooms wrapped with student artwork, and I think its awesome!
              <br />
              <br />I decided to submit a mural design in 2024, originally for a science classroom
              (you can see my old design below), but one of my friends got the mural instead (100%
              deserved), and the art teacher asked if I wanted to do the ESL (english as a second
              language) mural instead.
              <br />
              <br />I didn't know what design I'd even do but I decided on doing it anyways.
              Designing the mural was also really difficult since there was a huge window in the
              middle of the door (most of the design had to sit at the floor).
              <br />
              <br />I decided on a "hang in there" poster-like design, with a cat gliding down with
              a bunch of different country flags into Canada. I really tried to get "hang in there"
              text in the door design, with a bunch of different languages but ultimately decided
              against it. The main subject being a cat meant the design could be universally related
              to, no matter what race, religion, culture, etc you were.
            </ArtCard>

            <ArtCard
              title="Lost Flock"
              img="/assets/art/2D/lostflock.webp"
              date="Apr. 26, 2023"
              time="~3 days"
            >
              A small little background.
            </ArtCard>

            <ArtCard
              title="Panda's Plight"
              video="/assets/art/2D/hang.webm"
              date="Dec. 16, 2022"
              time="~2 days"
            >
              I just came up with the name lol.
              <br />
              <br />
              This was made for an art secret santa in our highschool's Art Club. I made it for Hang
              Zeng who now attends the same uni program as me!
            </ArtCard>

            <ArtCard
              title="Pac Ma Menu"
              img="/assets/art/2D/pacMa/pacMa.webp"
              wips={[
                [
                  '/assets/art/2D/pacMa/cPacMaColor.webp',
                  'when i compressed the image with Squoosh the color compression did this and it actually looks pretty cool',
                ],
              ]}
              date="May. 6, 2023"
              time="~2 days"
            >
              The main menu art of one of Lucas Ma, my friend's, Unity game called Pac Ma. It was a
              bullet hell avoiding game (vaguely like Just Shapes and Beats), but had stolen pac man
              assets.
            </ArtCard>

            <ArtCard title="Pikmin Pancake" img="/assets/art/2D/pikminPancake.webp">
              a fun little thing i made for media arts class! heavily inspired by pikmin bloom
              startup screen art
              <br />
              <br />i dont actually own the image pls dont sue
            </ArtCard>

            <ArtCard title="Mr Beast Caricature" img="/assets/art/2D/mrBeast.webp">
              MISTER BEAAAAAAAAAAAAAAAAAAAAAAAAAAST
              <br />
              <br />
              (i made this for a caricature assignment in media arts lol)
              <br />
              <br />
              <p>
                [Intro]
                <br />
                Rap Battle!
                <br />
                Seong Gi-Hun!
                <br />
                Versus
                <br />
                MrBeast!
                <br />
                Begin!
              </p>
              <p>
                [Verse 1: Mr. Beast]
                <br />
                Welcome to your final test
                <br />
                I&rsquo;m Mr. Beast
                <br />
                We can scrap the 'S'
                <br />
                'Cause I've never missed a beat
                <br />
                You had to cut from honey
                <br />
                Under threat of a gun blast
                <br />
                When I had a cut from Honey
                <br />
                That&rsquo;s another check that I'm gon' cash
                <br />
                You're coming last, Number one is Jimmy!
                <br />
                Only dub you have is horribly written
                <br />
                You're accomplished 'cause you fought the opposition
                <br />
                And became the best, but the consequences
                <br />
                That you've got to live with is you paved their deaths
                <br />
                All to pay your debt; I applaud you, Gi-Hun
                <br />
                In the diss game, you won't get rich
                <br />
                I'm like your momma, I'm dead sick
                <br />
                Then check the gaming channel
                <br />
                Millions of children watch it
                <br />
                How'd you win all that Won, kid
                <br />
                But not custody of one kid?
                <br />
                Did ya think you'd get her back
                <br />
                With that lighter you bought her?
                <br />
                You're playing tug-o-war with your ex
                <br />
                But the rope is your daughter (Ooh!)
                <br />
                So stupid, Sang Woo showed you the light
                <br />
                You didn't go to SNU, that's right
                <br />
                If the task was 'last to get backstabbed by a pal'
                <br />
                You wouldn't make it through the night
                <br />
                When I feast, I don't need a suit and tie
                <br />
                Wrapping with gold like the food I try
                <br />
                Utter a word, then you will die
                <br />
                Save those subs for PewDiePie
                <br />
                You might also like
                <br />
                A&amp;W
                <br />
                Lana Del Rey
                <br />
                Flowers
                <br />
                Miley Cyrus
                <br />
                Say You Won&rsquo;t Let Go
                <br />
                James Arthur
                <br />
                [Verse 2: Seong Gi-Hun]
                <br />
                So this is the next test
                <br />
                They&rsquo;ll make us fight in our survival?
                <br />
                But instead of a kiddie game
                <br />
                We&rsquo;ll be playing this manchild? (Hm?)
                <br />
                Your career's fragile like glass
                <br />I will smash it if you push me
                <br />
                Made your fortune from subscribers
                <br />
                Now give them their fucking cookies!
                <br />
                You've done all this good
                <br />
                You fed lives in need, right 'til they get by each time
                <br />
                Gave islands, sweet rides, let high trees thrive
                <br />
                Set headlines, being nice when you spread vibes
                <br />
                Teens hype it and then buy MrBeast line
                <br />
                So you make ten times what you leave guys
                <br />
                Only ever "moving" when you're in set sight of a keen child
                <br />
                Like an anti-red light, green light
                <br />
                Don't talk about loyalty, you don't get any
                <br />
                You're like "I spent at least
                <br />
                Ten-thousand dollars renting people out
                <br />
                To pretend to be friends with me"
                <br />I wondered why VIPs
                <br />
                Had to hide their face behind plastic
                <br />
                Now that I see this bastard
                <br />I get what the point of the mask is
                <br />
                [Verse 3: Mr. Beast, Karl]
                <br />I just replaced all
                <br />
                Of Gi-Hun's surviving friends with Legos!
                <br />
                Um, Jimmy
                <br />
                There aren't any Legos (Hahahaha!)
                <br />
                For a 'critique on greed'
                <br />
                It seems ironic
                <br />
                Your show sold out like it's stock
                <br />
                From shopmrbeast.com, bitch
              </p>
              <p>
                [Verse 4: Seong Gi-Hun]
                <br />
                (Yeah) You spent twenty-four hours in a bunker
                <br />
                Another twenty-four inside of a fake prison
                <br />
                And over fifty hours in a coffin
                <br />
                Could you do us all a big solid and stay in it?
                <br />
                Spending a minute with the Jeff Bezos for daycare kiddies
                <br />
                Is a challenge that I couldn't be paid to be in
                <br />
                You can't make good lines, I won't stay within 'em
                <br />
                Like Jake the Viking, I'm straight up leaving
              </p>
              <p>
                [Verse 5: Mr. Beast]
                <br />
                Let's hope that you didn't bet
                <br />
                All of your money on winning this fight now
                <br />
                'Cause a lot like your job, if that happened
                <br />
                You're likely to die in my fire and strike out
                <br />
                Join Team Seas and clean
                <br />
                That garbage past you deem so awful!
                <br />
                You lost everything to a pensioner
                <br />
                Who lost his fucking marbles!
                <br />
                [Verse 6: Front Man]
                <br />I make the calls
                <br />
                In this torture ridden place
                <br />
                You only got balls
                <br />
                In an Orbeez giveaway
                <br />
                It's a real manhunt, you don't got the courage to beat me
                <br />
                Go hide in your nerdy Dream streams
                <br />
                We've got more beef than your burger meat, Beast
                <br />
                Plotting more seeds in your girl than Team Trees
                <br />
                Pictured a world where equality rules
                <br />
                That's not just a pic you can fly to the moon
                <br />
                Got no firepower against my roster
                <br />
                Don't you identify as an attack helicopter?
                <br />
                You said "Hi" to your brother with a brand new channel
                <br />I said "Bye" to my brother with a mag of ammo
                <br />
                Go cry to your momma in an ad to pack dough
                <br />
                You'd ditch your morals to put your hand on Lambos
                <br />
                Can't handle the truth; if you run out of money
                <br />
                You run out of your personality too
                <br />
                Out of one-hundred percent of your viewers
                <br />
                Nobody watches your channel for you
              </p>
            </ArtCard>
          </>
        );
      case 4: //promo
        return (
          <>
            <CategoryHead title="promo">for highschool clubs and such.</CategoryHead>

            <ArtCard
              title="Pixel Art Workshop"
              img="/assets/art/promo/pixelWorkshop.png"
              links={[['https://www.instagram.com/p/DInGD03tzs1/', 'insta link!']]}
            >
              The workshop I hosted about pixel art!
              <br />
              <br />
              Hugely inspired by the brilliant Brandon James Greer.
            </ArtCard>

            <ArtCard
              title="Samosa"
              img="/assets/art/promo/samosa.webp"
              links={[['https://www.instagram.com/p/DBhrj--tgV0/', 'insta link!']]}
            >
              Our highschool had these "exemption days", being the only days when schoool clubs
              could sell food.
              <br />
              <br />
              Our club, Asian Student Association, sold samosas and made bank. Naturally, it was all
              because of this promo image (it was actually cuz the place we ordered them from was
              about to shut down or something so they sold it to us on an uber discount)
            </ArtCard>

            <ArtCard
              title="Kowloon City"
              img="/assets/art/promo/kowloon.webp"
              links={[['https://www.instagram.com/p/DU6_DocDK6b/', 'insta link!']]}
            >
              I made this for a Kowloon City Crisis Committee in TMUN 2026. I'm not actually part of
              TMUN, Andrew Dai asked if I wanted to and I said yeah
            </ArtCard>

            <ArtCard
              title="Absolute Robotics Reveal (2025)"
              youtube="https://www.youtube.com/embed/nIxVWvzXnkc"
              links={[['https://www.instagram.com/p/DIMD9l0uMSm/', 'insta link!']]}
              software={['Premiere Pro', 'After Effects']}
            >
              Despite not even being part of Absolute Robotics / FRC Team 4308, I was asked to make
              the robot reveal for 2025's bot, Doohickey. I did not record the footage, but edited,
              animated, composited and color graded everything.
              <br />
              <br />I had a lot of fun with this project. Our highschool's team was notorious for
              always getting the reveal out late, so I split the video in 2: one serious side and
              one goofy side, reflecting the bot's name.
              <br />
              <br />
              Later I found out this trailer was used to get a $1,000 sponsorship donation from the
              Rotary Club of Mississauga. Funny how things work out that way.
            </ArtCard>

            <ArtCard
              title="Comes in Pairs"
              img="/assets/art/promo/csJamPairs.webp"
              links={[['https://itch.io/jam/woodlands-cs-club-jam-2025', 'game jam link!']]}
            >
              A poster for our CS club game jam, where the theme was "Comes in Pairs".
              <br />
              <br />
              Check out my game I made for the jam, Cut in Pairs, in the coding section of the
              website.
            </ArtCard>

            <ArtCard
              title="Depths"
              img="/assets/art/promo/csJamDepths.webp"
              links={[
                ['https://itch.io/jam/woodlands-cs-club-game-jam-spring-2026', 'game jam link!'],
              ]}
            >
              A poster for our CS club game jam, where the theme was "Comes in Pairs".
              <br />
              <br />
              You can tell CS club started falling off at this time.
            </ArtCard>

            <ArtCard
              title="Matcha Mochi"
              img="/assets/art/promo/matchaMochi.webp"
              links={[['https://www.instagram.com/p/DRS04u4gLOx/', 'insta link!']]}
            >
              holy performative
            </ArtCard>

            <ArtCard
              title="WGS Bedwars Tournament"
              youtube="https://youtube.com/embed/T5LH8mLbAos"
              youtubeAspect="1/1"
              links={[
                ['https://www.instagram.com/p/Cyit8pmLkak/?img_index=1', 'insta link!'],
                [
                  'https://youtube.com/shorts/xCjnxtE9VOM',
                  'similar animated poster for val. tournament',
                ],
              ]}
              software={['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'Minemator']}
            >
              This is an animated trailer/video for our school's Gaming Club. My friend Andrew
              designed some of the poster and recorded the footage, while I edited, designed, and
              animated in minemator.
              <br />
              <br />
              This trailer used the entire Adobe video and photo editing suite, 2 entire weeks, and
              3D animation. Then the actual event happens and our organizers fumbled the entire
              thing. Goes to show sometimes life isn't fair.
              <br />
              <br />
              To obtain my role as exec, I animated a different poster (that Andrew designed for
              2023's Valorant tournament), you can watch that down below.
            </ArtCard>

            <ArtCard
              title="Animation Workshop"
              video="/assets/art/promo/animWorkshop.webm"
              links={[['https://www.instagram.com/p/DCZN2dhJAhU/?img_index=1', 'insta link!']]}
            >
              I also did a workshop on animation!
            </ArtCard>

            <ArtCard
              title="Mooncake Workshop"
              img="/assets/art/promo/mooncake1.webp"
              imgs={['/assets/art/promo/mooncake2.webp']}
              links={[
                ['https://www.instagram.com/p/C_57CJJJkAU/?img_index=1', 'insta link!'],
                ['https://www.instagram.com/p/DAKVXDzgcH1/', 'recap reel link!'],
              ]}
            >
              This was our first workshop when we fully took over as the leaders of the Asian
              Student Association club at our highschool. It was a lot of fun!
              <br />
              <br />
              Also check out the recap reel I made!
            </ArtCard>

            <ArtCard
              title="Secret Santa"
              img="/assets/art/promo/secretSanta.webp"
              links={[['https://www.instagram.com/p/DSJf4LUDNU_/', 'insta link!']]}
            >
              A poster for our Art Club's Art Secret Santa event!
            </ArtCard>

            <ArtCard
              title="Asia Month Teaser"
              img="/assets/art/promo/asaTeaser.webp"
              links={[['https://www.instagram.com/p/DX0V5xQgAlc/', 'insta link!']]}
            >
              The last ever promo I made for ASA. Gone are the times.
            </ArtCard>
          </>
        );
      case 5: //music
        return (
          <>
            <CategoryHead title="music">
              most of these are demos or for games,
              <br />
              so these songs are pretty scrappy.
              <br />
              maybe one day i'll put them on streaming platforms?
              <br />
              <br />i use FL Studio to make music.
            </CategoryHead>

            <MusicPlayer title="Humpty's Rise: Basement" src="/assets/music/1basementCombat.ogg" />
            <MusicPlayer title="Humpty's Rise: Factory" src="/assets/music/eggLevel2.mp3" />
            <MusicPlayer title="Bittersweet Battle" src="/assets/music/pinao.mp3" />
            <MusicPlayer title="Mole Music" src="/assets/music/victorShakuhachi.mp3" />
            <MusicPlayer title="Balatro Theme (Remix)" src="/assets/music/balala.mp3" />
            <MusicPlayer
              title="Woodlands Bathroom Simulator: Ram Bossfight"
              src="/assets/music/fnaf boss.mp3"
            />
            <MusicPlayer title="36-Bar Blues" src="/assets/music/victor1Midi.mp3" />
            <ArtCard
              title="Buckshot Mobile OST"
              youtube="https://www.youtube.com/embed/I_nc_XhKI2g"
            />
            <ArtCard
              title="CO-MOTION (Music)"
              youtube="https://www.youtube.com/embed/sfZZX7dUDc4"
            />
          </>
        );
      default:
        return (
          <div className="text-center">
            work in progress! <br /> {':)'}{' '}
          </div>
        );
    }
  }

  return (
    <>
      <HeaderGraphic title="ART N' STUFF" finalMult={0.83} />
      <Base>
        <div className="text-center">
          <p className="my-3 wrap-normal">check out some of the art i've made!</p>

          <Category
            categoryArray={[
              {
                title: 'animations!',
                text: 'moving pictures and all.',
                img: '/assets/art/animation/gnome/gnomeThumb.webp',
                onClick: () => handleCategoryClick(1),
                flex: 2,
              },
              {
                title: '3D renders',
                text: 'rendered in another dimension!',
                img: '/assets/art/3D/translucent/transPhone.webp',
                onClick: () => handleCategoryClick(2),
                flex: 2,
              },
              {
                title: '2D art',
                text: 'characters & backgrounds!',
                img: '/assets/art/2D/lostflock.webp',
                onClick: () => handleCategoryClick(3),
                flex: 1,
              },
              {
                title: 'promo',
                text: 'for highschool clubs and such',
                img: '/assets/art/promo/asaTeaser.webp',
                onClick: () => handleCategoryClick(4),
                flex: 1,
              },
              {
                title: 'music',
                text: 'dj toenail on the beat',
                img: '/assets/art/3D/readyToDepart.webp',
                onClick: () => handleCategoryClick(5),
                flex: 1,
              },
              {
                title: 'other stuff',
                text: 'drawings, video essays, etc',
                img: '/assets/art/2D/eslDoor/cDoorIRL.webp',
                onClick: () => handleCategoryClick(6),
                flex: 1,
              },
            ]}
          />
        </div>

        <div className="h-20" ref={categoryRef}></div>

        {ArtCategory()}
      </Base>
    </>
  );
}
