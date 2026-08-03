import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App';
import NoiseGrad from '../components/NoiseGrad';
import asset from '../asset';

// the light-machine animation runs across these frames (WebsiteLightMode_001..012.webp)
const FIRST_FRAME = 1;
const LAST_FRAME = 12;
const frameBegin = '/assets/other/lightMachine/WebsiteLightMode_0';

export default function LightMode() {
  const { darkMode, toggleDarkMode, mobile, machine, toggleMachine } = useContext(AppContext)!;
  const [progress, setProgress] = useState(darkMode ? 0 : 1);

  function marginLeft(num = 0) {
    let a = (2 ** num - 1) * 60 + 5;
    if (a > 65) a = 65;
    if (a < 5) a = 5;
    return a;
  }

  const [animProg, setAnimProg] = useState(machine ? LAST_FRAME : FIRST_FRAME);
  const [playing, setPlaying] = useState(false);

  const frameString = frameBegin + String(animProg).padStart(2, '0') + '.webp';

  useEffect(() => {
    if (!playing) return;
    if (animProg >= LAST_FRAME) {
      setPlaying(false);
      toggleMachine();
      setTimeout(() => toggleDarkMode(), 300);
      return;
    }
    const timer = setTimeout(() => setAnimProg((f) => f + 1), 100);
    return () => clearTimeout(timer);
  }, [playing, animProg]);

  function turnOn() {
    if (playing) return; // already animating
    setAnimProg(FIRST_FRAME);
    setPlaying(true);
  }

  return (
    <>
      <div className="flex min-h-[85vh] w-screen flex-col items-center justify-center">
        <div
          className={`${machine || playing ? 'bg-white' : 'bg-transparent'} aspect-video w-[60%] max-w-130 flex-1`}
          style={{
            maskImage: `url(${asset(frameString)})`,
            maskSize: 'cover',
            WebkitMaskImage: `url(${asset(frameString)})`,
            WebkitMaskSize: 'cover',
          }}
        />
        <NoiseGrad
          className="border-shadow mb-10 flex aspect-3/2 h-auto w-[90%] max-w-150 flex-col rounded-2xl border-5 bg-black"
          color="var(--color-shadow)"
          direction="to top"
          xtraOpacity={100}
        >
          <div className="flex-1">
            <div
              className={`${mobile ? 'mt-5 text-4xl sm:mt-10' : 'my-5 text-8xl'} text-shadow align-center line-clamp-1 inline-block w-full truncate text-center font-[Impact] text-shadow-[0px_4px_0px_var(--color-black)]`}
            >
              LIGHT MODE
            </div>
          </div>
          <div className="bg-shadow mx-8 my-5 flex flex-2 rounded-full border-b-4 border-black">
            <div
              className={`${machine ? 'transition-all duration-150' : ''} border-accent2 to-accent2/50 from-shadow my-auto aspect-square h-[80%] rounded-full border-t-3 bg-black bg-linear-to-t via-black via-90% hover:cursor-pointer`}
              style={{ marginLeft: marginLeft(progress).toString() + '%' }}
              onClick={
                machine
                  ? () => {
                      toggleDarkMode();
                      progress >= 1 ? setProgress(0) : setProgress(1);
                    }
                  : () => {
                      if (playing) return; // ignore clicks mid power-on
                      setProgress(Math.round(progress * 10 + 1) / 10);
                      if (progress >= 0.85) {
                        turnOn(); // plays the animation, then flips machine + dark mode
                      }
                    }
              }
            ></div>
          </div>
        </NoiseGrad>
      </div>
    </>
  );
}
