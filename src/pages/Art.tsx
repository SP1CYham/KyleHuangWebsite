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
              software={['Flipaclip', 'Premiere Pro', 'ibisPaintX']}
              frames="2000"
              time="a lot of time"
              date="Feb 13, 2025"
              links={[['https://youtu.be/sQxJLyRYvn0', 'YouTube Link!']]}
              wips={[
                [
                  '/favicon.svg',
                  'the first sketch of the video. i always make a mini sketch before attempting a video to outline colors define character shape',
                ],
                [
                  '/favicon.svg',
                  'the first sketch of the video. i always make a mini sketch before attempting a video to outline colors define character shape',
                ],
              ]}
            >
              animation took me like weeks bro
              <br />
              also did in collaboration with{' '}
              <Link to="https://www.youtube.com/@Terraw" target="_blank">
                Terrasteel,
              </Link>{' '}
              an awesome Terraria youtuber I've been watching for a while, so that was awesome!
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
