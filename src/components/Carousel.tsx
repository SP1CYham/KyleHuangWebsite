import { useState, useContext } from 'react';
import Imag from './Imag';
import { AppContext } from '../App';
import { Howl } from 'howler';
import asset from '../asset';

export default function Carousel({
  imgsToShow,
  imgs,
  h = 80,
}: {
  imgsToShow: number;
  imgs: string[][];
  w?: number;
  h?: number;
}) {
  //imgs is array of array of length 2 of strings
  //first array is src, second is desc
  //example: [["link", "this is my first drawing"]]

  const [index, setIndex] = useState(0);

  const locked = imgs.length <= imgsToShow ? true : false;

  const canGoLeft = index > 0;
  const canGoRight = index + imgsToShow < imgs.length;

  const [lHovered, setLHovered] = useState(false);
  const [rHovered, setRHovered] = useState(false);

  const moveSfx = new Howl({
    src: [asset('/assets/sfx/move.mp3')],
    volume: 0.2,
  });

  function goLeft() {
    if (locked) return;
    if (canGoLeft) setIndex((i) => i - 1);
    console.log('left. index: ' + (index - 1));
    moveSfx.play();
  }
  function goRight() {
    if (locked) return;
    if (canGoRight) setIndex((i) => i + 1);
    console.log('right. index: ' + (index + 1));
    moveSfx.play();
  }

  const { mobile, darkMode } = useContext(AppContext)!;
  const widthButton = mobile ? h / 2 : h;

  return (
    <div
      className={`bg-accent2 flex min-w-0 items-center border-2 border-white`}
      style={{ height: `${h}px`, borderRadius: `${widthButton / 2}px` }}
    >
      {!locked && (
        <button
          onClick={goLeft}
          disabled={!canGoLeft}
          onMouseEnter={() => !!canGoLeft && setLHovered(true)}
          onMouseLeave={() => setLHovered(false)}
          style={{
            margin: 0,
            height: `${h}px`,
            borderLeft: 0,
            borderRadius: `${widthButton / 2}px 0 0 ${widthButton / 2}px`,
            width: `${widthButton}px`,
            textAlign: 'center',
            backgroundColor: !canGoLeft
              ? `${darkMode ? 'var(--color-black)' : 'var(--color-accent2-light)'}`
              : lHovered
                ? 'var(--color-midtone)'
                : 'var(--color-accent)',
            cursor: !canGoLeft ? 'not-allowed' : 'pointer',
            fontWeight: !canGoLeft ? 'normal' : lHovered ? 'bold' : 'normal',
            padding: '0',
            transition: 'background-color 0.2s ease',
          }}
          className="text-5xl font-medium"
        >
          {'<'}
        </button>
      )}

      {locked && (
        <div className="flex flex-1">
          {imgs.map((value, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center"
              style={{ height: h - 2 }}
            >
              <Imag src={value[0]} desc={value[1]} h={h}></Imag>
            </div>
          ))}
        </div>
      )}

      {!locked && (
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${imgsToShow})))`,
            }}
          >
            {imgs.map((value, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center"
                style={{ width: `calc(100% / ${imgsToShow})`, height: h - 2 }}
              >
                <Imag src={value[0]} desc={value[1]} h={h}></Imag>
              </div>
            ))}
          </div>
        </div>
      )}

      {!locked && (
        <button
          onClick={goRight}
          disabled={!canGoRight}
          onMouseEnter={() => !!canGoRight && setRHovered(true)}
          onMouseLeave={() => setRHovered(false)}
          style={{
            margin: 0,
            height: `${h}px`,
            borderRight: 0,
            borderRadius: `0 ${widthButton / 2}px ${widthButton / 2}px 0`,
            width: `${widthButton}px`,
            textAlign: 'center',
            backgroundColor: !canGoRight
              ? `${darkMode ? 'var(--color-black)' : 'var(--color-accent2-light)'}`
              : rHovered
                ? 'var(--color-midtone)'
                : 'var(--color-accent)',
            cursor: !canGoRight ? 'not-allowed' : 'pointer',
            fontWeight: !canGoRight ? 'normal' : rHovered ? 'bold' : 'normal',
            padding: '0',
            transition: 'background-color 0.2s ease',
          }}
          className="text-5xl font-medium"
        >
          {'>'}
        </button>
      )}
    </div>
  );
}
