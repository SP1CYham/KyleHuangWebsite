import { useState, useRef } from 'react';
import { type ReactNode } from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

import HeaderGraphic from '../components/HeaderGraphic';
import CategoryCard from '../components/CategoryCard';
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
          <span className="hover:animate-wiggle inline-block">{title}</span>
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
              moving pictures! <br /> you can find most of these on my{' '}
              <Link to="https://www.youtube.com/@SPICYham" target="_blank">
                youtube channel.
              </Link>{' '}
              <br /> <p className="text-accent">{'(90% of these are terraria animations lol)'}</p>
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
      <HeaderGraphic />
      <Base>
        <div className="text-center">
          <p className="my-3 wrap-normal">check out some of the art i've made!</p>
          <div className="mb-3 flex h-60 gap-3">
            <CategoryCard
              title="animations!"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(1)}
              flex={2}
            >
              moving pictures and all.
            </CategoryCard>
            <CategoryCard
              title="3D renders!"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(2)}
              flex={2}
            >
              made in another dimension!
            </CategoryCard>
          </div>
          <div className="mb-3 flex h-60 gap-3">
            <CategoryCard title="2D art" img="/favicon.svg" onClick={() => handleCategoryClick(3)}>
              characters & backgrounds!
            </CategoryCard>
            <CategoryCard title="promo" img="/favicon.svg" onClick={() => handleCategoryClick(4)}>
              for highschool <br /> clubs and such
            </CategoryCard>
            <CategoryCard title="music" img="/favicon.svg" onClick={() => handleCategoryClick(5)}>
              dj toenail <br /> on the beat
            </CategoryCard>
            <CategoryCard
              title="other stuff"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(5)}
            >
              drawings, video essays, etc
            </CategoryCard>
          </div>
        </div>

        <div className="h-20" ref={categoryRef}></div>

        {ArtCategory()}
      </Base>
    </>
  );
}
