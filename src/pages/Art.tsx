import { useState, useRef } from 'react';
import { type ReactNode } from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

import HeaderGraphic from '../components/HeaderGraphic';
import Category from '../components/CategoryCard';
import ArtCard from '../components/ArtCard';
import Imag from '../components/Imag';
import Carousel from '../components/Carousel';

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
              wipsPath="/assets/art/animation/gnome"
              wips={[
                [
                  '/cGnomeSketch.webp',
                  'a small sketch to map colors and design. i remember struggled a lot with the gnome design. bottom right art is by OrangeDudeTV and inspired the design!',
                ],
                [
                  '/cGnomeBG.webp',
                  'various backgrounds throughout the video that genuinely showed up for less than a second',
                ],
                ['/cBanner.webp', 'the player banner in all of its glory'],
                ['/cProjects.webp', 'all the different flipaclip projects'],
                ['/cMidFinger.webp', 'uncensored gnome middle finger'],
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
              title="art"
              img="/favicon.svg"
              youtube="https://www.youtube.com/embed/6k6zenVHE9k"
              software={['photoshop', 'ibis paint']}
              links={[
                ['https://twss.dev/posts/', 'insta'],
                ['https://twss.dev/posts/', 'youtube'],
              ]}
            >
              wefwords words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words words words words
              words words words words words words words words words words words w
            </ArtCard>

            <ArtCard title="art" img="/favicon.svg">
              wef
            </ArtCard>
          </>
        );
      case 2:
        return (
          <>
            <ArtCard title="arreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet" img="/favicon.svg">
              words words words words words words wwords words words words words words words words
              words words words words words words words words words words words words
            </ArtCard>
          </>
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
                onClick: () => handleCategoryClick(3),
                flex: 1,
              },
              {
                title: 'music',
                text: 'dj toenail on the beat',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(3),
                flex: 1,
              },
              {
                title: 'other stuff',
                text: 'drawings, video essays, etc',
                img: '/favicon.svg',
                onClick: () => handleCategoryClick(3),
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
