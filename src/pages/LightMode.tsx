import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App';
import NoiseGrad from '../components/NoiseGrad';
import asset from '../asset';
import { useOverlay } from '../components/ImagOverlay';
import { Howl } from 'howler';

// the light-machine animation runs across these frames (WebsiteLightMode_001..012.webp)
const FIRST_FRAME = 1;
const LAST_FRAME = 12;
const frameBegin = '/assets/other/lightMachine/WebsiteLightMode_0';

export default function LightMode() {
  const { darkMode, toggleDarkMode, mobile, machine, toggleMachine } = useContext(AppContext)!;

  const pullSfx = new Howl({
    src: [asset('/assets/sfx/pull.ogg')],
    volume: 0.5,
  });
  const switchOnSfx = new Howl({
    src: [asset('/assets/sfx/leverDown.ogg')],
  });
  const switchOffSfx = new Howl({
    src: [asset('/assets/sfx/leverUp.ogg')],
  });
  const setupSfx = new Howl({
    src: [asset('/assets/sfx/setupLights.mp3')],
  });
  const flashSfx = new Howl({
    src: [asset('/assets/sfx/flashbang.mp3')],
  });

  const [progress, setProgress] = useState(darkMode ? 0 : 1);
  function addProgress() {
    setProgress(Math.round(progress * 10 + 1) / 10);
    if (progress >= 0.85) {
      setCanInteract(false);
      setTimeout(() => {
        turnOn();
        setupSfx.play();
      }, 300);
      switchOnSfx.play();
    } else {
      pullSfx.play();
    }
  }

  function marginLeft(num = 0) {
    let a = (2 ** num - 1) * 60 + 5;
    if (a > 65) a = 65;
    if (a < 5) a = 5;
    return a;
  }

  const [animProg, setAnimProg] = useState(machine ? LAST_FRAME : FIRST_FRAME);
  const [canInteract, setCanInteract] = useState(true);
  const [playing, setPlaying] = useState(false);

  const frameString = frameBegin + String(animProg).padStart(2, '0') + '.webp';

  const { show } = useOverlay();

  useEffect(() => {
    if (!playing) return;
    if (animProg >= LAST_FRAME) {
      toggleMachine();
      setPlaying(false);
      setTimeout(() => {
        (toggleDarkMode(), show({ flash: true }), flashSfx.play());
      }, 300);
      setTimeout(() => {
        setCanInteract(true);
      }, 600);
      return;
    }
    const timer = setTimeout(
      () => setAnimProg((f) => (f > LAST_FRAME ? (f = LAST_FRAME) : f + 1)),
      100,
    );
    return () => clearTimeout(timer);
  }, [playing, animProg]);

  function turnOn() {
    if (!canInteract) return; // already animating
    setPlaying(true);
    setAnimProg(FIRST_FRAME);
  }

  return (
    <>
      <div className="flex min-h-[85vh] w-screen flex-col items-center justify-center">
        <div
          className={`${machine || playing ? `${canInteract ? `${darkMode ? 'bg-shadow' : 'bg-white'}` : 'bg-white'}` : 'bg-transparent'} aspect-video w-[60%] max-w-130 object-contain`}
          style={{
            maskImage: `url(${asset(frameString)})`,
            maskSize: 'cover',
            WebkitMaskImage: `url(${asset(frameString)})`,
            WebkitMaskSize: 'cover',
          }}
        />
        <NoiseGrad
          className={`${darkMode ? 'border-shadow bg-black' : 'border-white bg-cyan-800'} mb-10 flex aspect-3/2 h-auto w-[90%] max-w-150 flex-col rounded-2xl border-5`}
          childClassName="rounded-2xl"
          color={darkMode ? 'var(--color-shadow)' : 'var(--color-white)'}
          direction="to top"
          xtraOpacity={100}
        >
          <div className="flex-1">
            <div
              className={`${mobile ? 'mt-5 text-4xl sm:mt-10' : 'my-5 text-8xl'} ${darkMode ? 'text-shadow text-shadow-[0px_4px_0px_var(--color-black)]' : 'text-white text-shadow-[0px_4px_0px_var(--color-cyan-800)]'} align-center line-clamp-1 inline-block w-full truncate text-center font-[Impact]`}
            >
              LIGHT MODE
            </div>
          </div>
          <div
            className={`${darkMode ? 'bg-shadow border-black' : 'border-cyan-900 bg-white'} mx-8 my-5 flex flex-2 rounded-full border-b-4`}
          >
            <div
              className={`${machine ? 'transition-all duration-150' : ''} ${darkMode ? 'border-accent2 to-accent2/50 from-shadow via-black' : 'to-accent2 border-accent2 from-white via-cyan-800'} my-auto aspect-square h-[80%] rounded-full border-t-3 bg-black bg-linear-to-t via-90% hover:cursor-pointer`}
              style={{ marginLeft: marginLeft(progress).toString() + '%' }}
              onClick={
                machine
                  ? () => {
                      if (!canInteract) return;
                      toggleDarkMode();
                      darkMode ? switchOffSfx.play() : switchOnSfx.play();
                      progress >= 1 ? setProgress(0) : setProgress(1);
                    }
                  : () => {
                      if (!canInteract) return; // ignore clicks mid power-on
                      addProgress();
                    }
              }
            ></div>
          </div>
        </NoiseGrad>
      </div>
    </>
  );
}
