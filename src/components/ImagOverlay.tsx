import { useState, useContext, createContext, type ReactNode } from 'react';

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
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setContent(null)}
        >
          <div className="mx-30 flex flex-1 flex-col items-center rounded-3xl bg-black object-center p-10 text-center align-middle">
            {/*fix latr */}
            <img
              src={content.src}
              onClick={(e) => e.stopPropagation}
              className="mx-auto block h-auto max-h-80 w-full"
            />
            {/*dont exit when click image*/}
            <p className="mt-4 max-w-[80%] items-center text-center">{content.desc}</p>
            <p className="text-accent mt-4">(click anywhere to close)</p>
          </div>
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
