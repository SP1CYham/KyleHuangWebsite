import { useState, useRef, useEffect, useMemo, useContext } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';

import NoiseGrad from './NoiseGrad';
import asset from '../asset';

import { AppContext } from '../App';

interface MusicPlayerProps {
  title?: string;
  src?: string; // path to an audio file in /public. omit for a silent demo
  duration?: number; // fallback length (seconds), used only when there's no real audio
  bars?: number; // number of waveform bars
}

// seconds -> "m:ss"
function formatTime(t: number) {
  if (!isFinite(t) || t < 0) t = 0;
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function MusicPlayer({
  title = 'untitled track',
  src,
  duration = 100,
  bars = 100,
}: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(src ? 0 : duration);

  const audioRef = useRef<HTMLAudioElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);

  const { mobile, muted, darkMode } = useContext(AppContext)!;
  const waveBars = mobile ? Math.round(bars / 2.5) : bars;

  // stable fake waveform: heights in 0.15–1, only regenerated if the bar count changes
  const waveform = useMemo(
    () => Array.from({ length: waveBars }, () => 0.15 + Math.random() * 0.85),
    [waveBars],
  );

  const progress = total > 0 ? Math.min(current / total, 1) : 0;

  // drive the real <audio> element from the play/pause state
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return; // demo mode: no <audio> rendered
    if (playing) el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [playing]);

  // keep the native <audio> in sync with the global mute (set the property directly,
  // since React doesn't reliably reflect the `muted` attribute onto the element)
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // demo clock: advance `current` while playing when there's no real audio to read from
  useEffect(() => {
    if (src) return; // real audio reports time via onTimeUpdate instead
    if (!playing) {
      lastTs.current = null;
      return;
    }
    const tick = (ts: number) => {
      if (lastTs.current != null) {
        setCurrent((c) => {
          const next = c + (ts - lastTs.current!) / 1000;
          return next >= total ? 0 : next; // loop back to the start
        });
      }
      lastTs.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, src, total]);

  function seekToFraction(fraction: number) {
    const t = Math.max(0, Math.min(fraction, 1)) * total;
    setCurrent(t);
    if (audioRef.current) audioRef.current.currentTime = t;
  }

  function handleWaveformClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    seekToFraction((e.clientX - rect.left) / rect.width);
  }

  return (
    <NoiseGrad
      className={`${playing ? `${darkMode ? 'bg-accent/50' : 'bg-shadow'}` : 'bg-black'} mb-10 flex w-full items-center gap-4 rounded-4xl border-2 border-white p-4 transition-all`}
      childClassName="rounded-4xl"
      direction="to top"
      color="var(--color-accent2)"
      baseFrequency={0.4}
      xtraOpacity={40}
    >
      {src && (
        <audio
          ref={audioRef}
          src={asset(src)}
          preload="metadata"
          onLoadedMetadata={(e) => setTotal(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onEnded={() => setPlaying(false)}
        />
      )}
      {/* right: play / pause */}
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'pause' : 'play'}
        className="grid size-14 shrink-0 place-items-center rounded-full border-white p-0! text-white"
      >
        {playing ? <FaPause className="h-5 w-5" /> : <FaPlay className="h-5 w-5 translate-x-px" />}
      </button>

      {/* left: title, timecode, waveform */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="truncate text-base font-bold text-white md:text-lg">{title}</div>

        <div className="font-medium text-white tabular-nums">
          {formatTime(current)} <span className="text-midtone">/ {formatTime(total)}</span>
        </div>

        <div
          className="flex h-12 w-full cursor-pointer items-center gap-0.5"
          onClick={handleWaveformClick}
          role="slider"
          aria-label="seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(total)}
          aria-valuenow={Math.round(current)}
        >
          {waveform.map((h, i) => (
            <div
              key={i}
              className={`min-w-0 flex-1 rounded-full transition-colors duration-150 ${
                i / waveBars < progress ? 'bg-midtone' : 'bg-accent/70'
              }`}
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>
      </div>
    </NoiseGrad>
  );
}
