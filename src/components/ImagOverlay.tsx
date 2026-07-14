import { useState, useContext, createContext, type ReactNode } from 'react';
import NoiseGrad from './NoiseGrad';

interface OverlayContent {
  src: string;
  desc: string;
}

interface OverlayContextType {
  show: (content: OverlayContent) => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<OverlayContent | null>(null);

  function show(c: OverlayContent) {
    setContent(c);
  }

  return (
    <OverlayContext.Provider value={{ show }}>
      {children}

      {content && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center hover:cursor-zoom-out"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setContent(null)}
        >
          <NoiseGrad
            className="border-accent mx-5 flex flex-1 flex-col items-center rounded-3xl border-2 bg-black object-center p-5 text-center align-middle md:mx-30"
            childClassName="rounded-3xl"
            color="var(--color-shadow)"
            direction="to top"
            baseFrequency={2}
          >
            <div className="m-auto flex h-full w-full flex-1">
              <img
                src={content.src}
                className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="mt-4 max-w-[80%] items-center text-center text-balance">{content.desc}</p>
            <p className="text-midtone mt-4">(click anywhere to close)</p>
          </NoiseGrad>
        </div>
      )}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context) throw new Error('overlay context is null!');
  return context;
}
