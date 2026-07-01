import Base from '../Base';
import ArtCard from '../components/ArtCard';

import Card from '../components/Card';

export default function Coding() {
  return (
    <>
      <Base>
        <div className="p-4 text-center">
          <p className="my-3 wrap-normal">check out some of the ART i've made!</p>

          <ArtCard title="art" img="/favicon.svg">
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
            words words words words words words words words words words words words words words
            words words words words words words words words words words words words words words
          </ArtCard>

          <ArtCard
            title="art"
            img="/favicon.svg"
            youtube="https://www.youtube.com/embed/6k6zenVHE9k"
            tools={['photoshop', 'ibis paint']}
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
        </div>
      </Base>
    </>
  );
}
