import { useState, useRef } from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

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

  function ArtCategory() {
    switch (projIndex) {
      case 1: //animations
        return (
          <>
            <p className="text-center">this is like 90% terraria animations lol</p>
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
            <ArtCard title="art" img="/favicon.svg">
              words words words words words words wwords words words words words words words words
              words words words words words words words words words words words words
            </ArtCard>
          </>
        );
    }
  }

  return (
    <>
      <Base>
        <div className="text-center">
          <p className="my-3 wrap-normal">check out some of the art i've made!</p>
          <div className="mb-3 flex h-60 gap-3">
            <CategoryCard
              title="animations!"
              text="moving pictures and all."
              img="/favicon.svg"
              onClick={() => handleCategoryClick(1)}
              flex={2}
            />
            <CategoryCard
              title="3D renders!"
              text="made in blender and in another dimension!"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(2)}
              flex={2}
            />
          </div>
          <div className="mb-3 flex h-60 gap-3">
            <CategoryCard
              title="2D art"
              text="characters, backgrounds, graphics, etc"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(3)}
            />
            <CategoryCard
              title="promotional art"
              text="for highschool clubs and such"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(4)}
            />
            <CategoryCard
              title="music"
              text="not a very good producer, but i enjoy it a lot!"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(5)}
            />
            <CategoryCard
              title="other stuff"
              text="from random drawings to video essays"
              img="/favicon.svg"
              onClick={() => handleCategoryClick(5)}
            />
          </div>
        </div>

        <div className="h-20" ref={categoryRef}></div>

        {ArtCategory()}
      </Base>
    </>
  );
}
