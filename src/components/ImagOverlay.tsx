import { useState, useContext, createContext, type ReactNode } from 'react';
import NoiseGrad from './NoiseGrad';
import asset from '../asset';
import { Howl } from 'howler';

interface OverlayContent {
  src?: string;
  desc?: string;
  video?: boolean;
  flash?: boolean;
}

interface OverlayContextType {
  show: (content: OverlayContent) => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<OverlayContent | null>(null);
  const [flashed, setFlashed] = useState(false);

  const selectSfx = new Howl({
    src: [asset('/assets/sfx/select.wav')],
  });
  const deselectSfx = new Howl({
    src: [asset('/assets/sfx/deselect.wav')],
  });

  function show(c: OverlayContent) {
    setContent(c);
    if (c.flash === true) {
      setTimeout(() => {
        setFlashed(true);
      }, 3000);
      setTimeout(() => {
        setContent(null);
      }, 5000);
    } else selectSfx.play();
  }

  return (
    <OverlayContext.Provider value={{ show }}>
      {children}

      {content &&
        (content.flash ? (
          <div
            className={`${flashed ? 'bg-transparent' : 'bg-[#FFFFFF]'} fixed inset-0 z-9999 w-screen transition-colors duration-2000`}
          />
        ) : (
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center hover:cursor-zoom-out"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => {
              (setContent(null), deselectSfx.play());
            }}
          >
            <NoiseGrad
              className="border-accent mx-5 flex flex-1 flex-col items-center rounded-3xl border-2 bg-black object-center p-5 text-center align-middle md:mx-30"
              childClassName="rounded-3xl"
              color="var(--color-shadow)"
              direction="to top"
              baseFrequency={2}
            >
              <div className="m-auto flex h-full w-full flex-1">
                {!content.video ? (
                  <img
                    src={content.src}
                    className="mx-auto h-auto max-h-[70vh] w-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    src={content.src}
                    className="mx-auto h-auto max-h-[70vh] w-full max-w-full object-contain"
                    loop
                    autoPlay
                  />
                )}
              </div>
              <p className="mt-4 max-w-[80%] items-center text-center text-balance">
                {content.desc}
              </p>
              <p className="text-midtone mt-4">(click anywhere to close)</p>
            </NoiseGrad>
          </div>
        ))}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context) throw new Error('overlay context is null!');
  return context;
}
