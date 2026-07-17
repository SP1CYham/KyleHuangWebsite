import { useState, useRef } from 'react';
import { type ReactNode } from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

import HeaderGraphic from '../components/HeaderGraphic';
import Category from '../components/CategoryCard';
import ArtCard from '../components/ArtCard';

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
              wipsPath="public/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
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
              wipsPath="public/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
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
              links={[['https://www.youtube.com/watch?v=a-2mq2p-guY', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
              ]}
            >
              na
            </ArtCard>

            <ArtCard
              title="Terraria Goblin Tinkerer Animated"
              youtube="https://www.youtube.com/embed/qrPZx68gY9I"
              software={['Flipaclip', 'Premiere Pro']}
              frames="1354 (20 fps)"
              time="~1 month"
              date="Apr 9, 2024"
              links={[['https://www.youtube.com/watch?v=qrPZx68gY9I', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
              ]}
            >
              na
            </ArtCard>

            <ArtCard
              title="Hermitcraft S10 Trap Animation"
              youtube="https://www.youtube.com/embed/gfI4R38zY-g"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[['https://www.youtube.com/watch?v=gfI4R38zY-g', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
              ]}
            >
              na
            </ArtCard>

            <ArtCard
              title="Dream vs. Gumball"
              youtube="https://www.youtube.com/embed/24v18rdIe80"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[['https://www.youtube.com/watch?v=24v18rdIe80', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
              ]}
            >
              na
            </ArtCard>

            <ArtCard
              title="PVZ Oak vs. Bling Yeti"
              youtube="https://www.youtube.com/embed/TgrYxzbDuUs"
              software={['Flipaclip', 'Premiere Pro']}
              frames="~1000 (15 fps)"
              time="~1 week"
              date="Feb 27, 2024"
              links={[['https://www.youtube.com/watch?v=TgrYxzbDuUs', 'Youtube Link!']]}
              wipsPath="/assets/art/animation/gnome/"
              wips={[
                [
                  'cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
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
            <CategoryHead title="3d art">renders and other 3d work.</CategoryHead>

            <ArtCard
              title="Transparent"
              img="/favicon.svg"
              wipsPath="/"
              wips={[
                ['favicon.svg', ''],
                ['favicon.svg', ''],
                ['favicon.svg', ''],
                ['favicon.svg', ''],
              ]}
            >
              placeholder description
            </ArtCard>

            <ArtCard title="Ready to Depart" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Hermitcraft Bunny" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Hack the North" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Ni Hao Film" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Pokemon Day 2026" img="/favicon.svg">
              placeholder description
            </ArtCard>
          </>
        );
      case 3: //2d
        return (
          <>
            <CategoryHead title="2d art">characters & backgrounds!</CategoryHead>

            <ArtCard title="Family Car Gif" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="ESL Door Mural" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Lost Flock" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Pac Ma Menu" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Mr Beast Caricature" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="The Vietnam Guy" img="/favicon.svg">
              placeholder description
            </ArtCard>
          </>
        );
      case 4: //promo
        return (
          <>
            <CategoryHead title="promo">for highschool clubs and such.</CategoryHead>

            <ArtCard title="Pixel Art Workshop" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Samosa" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Kowloon City" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Comes in Pairs" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Depths" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Matcha Mochi" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Animation Workshop" img="/favicon.svg">
              placeholder description
            </ArtCard>

            <ArtCard title="Asia Month Teaser" img="/favicon.svg">
              placeholder description
            </ArtCard>
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
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(1),
                flex: 2,
              },
              {
                title: '3D renders',
                text: 'moving pictures and all.',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(2),
                flex: 2,
              },
              {
                title: '2D art',
                text: 'characters & backgrounds!',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(3),
                flex: 1,
              },
              {
                title: 'promo',
                text: 'for highschool clubs and such',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(4),
                flex: 1,
              },
              {
                title: 'music',
                text: 'dj toenail on the beat',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(5),
                flex: 1,
              },
              {
                title: 'other stuff',
                text: 'drawings, video essays, etc',
                img: '/favicon.svg',
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
