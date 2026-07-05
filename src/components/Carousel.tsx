import { useState } from 'react';
import Imag from './Imag';

export default function Carousel({ imgsToShow, imgs }: { imgsToShow: number; imgs: string[][] }) {
  //imgs is array of array of length 2 of strings
  //first array is src, second is desc
  //example: [["link", "this is my first drawing"]]

  const [index, setIndex] = useState(0);

  const locked = imgs.length <= imgsToShow ? true : false;
  const lockedNum = locked ? 0 : 1;

  const canGoLeft = index > 0;
  const canGoRight = index + imgsToShow < imgs.length;

  function goLeft() {
    if (locked) return;
    if (canGoLeft) setIndex((i) => i - 1);
    console.log('left. index: ' + (index - 1));
  }
  function goRight() {
    if (locked) return;
    if (canGoRight) setIndex((i) => i + 1);
    console.log('right. index: ' + (index + 1));
  }

  return (
    <div className="mx-20 flex items-center gap-3">
      {!locked && (
        <button onClick={goLeft} disabled={!canGoLeft}>
          left
        </button>
      )}

      {locked && (
        <div className="flex flex-1 justify-center">
          {imgs.map((value, index) => (
            <div key={index} className="flex flex-1 justify-center px-1">
              <div className="flex shrink-0 px-1">
                <Imag src={value[0]} desc={value[1]}></Imag>
              </div>
            </div>
          ))}
        </div>
      )}

      {!locked && (
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${imgsToShow})))`,
            }}
          >
            {imgs.map((value, index) => (
              <div
                key={index}
                className="flex shrink-0 px-1"
                style={{ width: `calc(100% / ${imgsToShow})` }}
              >
                <div className="">
                  <Imag src={value[0]} desc={value[1]}></Imag>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!locked && (
        <button onClick={goRight} disabled={!canGoRight}>
          right
        </button>
      )}
    </div>
  );
}
