import { useOverlay } from './ImagOverlay';

export default function Imag({
  src,
  desc,
  className,
  imgClassName,
  h,
}: {
  src: string;
  desc: string;
  className?: string;
  imgClassName?: string;
  h?: number;
}) {
  const { show } = useOverlay();
  const video = src.substr(src.length - 4) === 'webm' ? true : false;

  function handleImagClick() {
    show({ src: src, desc: desc, video: video });
  }

  return (
    <div
      onClick={() => handleImagClick()}
      className={`${className}`}
      style={h ? { height: `${h}px` } : {}}
    >
      {!video ? (
        <img
          src={src}
          className={`hover:animate-wiggle h-auto w-full max-w-100 truncate object-cover p-1 transition-all duration-150 hover:cursor-zoom-in hover:p-1 md:p-3 md:active:p-4 ${imgClassName}`}
          style={h ? { height: `${h}px` } : {}}
          loading="lazy"
          alt={'image'}
        ></img>
      ) : (
        <video
          src={src}
          className={`hover:animate-wiggle h-auto w-full max-w-100 truncate object-cover p-1 transition-all duration-150 hover:cursor-zoom-in hover:p-1 md:p-3 md:active:p-4 ${imgClassName}`}
          style={h ? { height: `${h}px` } : {}}
          loop
          autoPlay
        ></video>
      )}
    </div>
  );
}
