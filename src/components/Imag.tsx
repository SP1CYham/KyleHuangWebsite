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

  function handleImagClick() {
    console.log('ckicekd');
    show({ src: src, desc: desc });
  }

  return (
    <div
      onClick={() => handleImagClick()}
      className={`${className}`}
      style={h ? { height: `${h}px` } : {}}
    >
      <img
        src={src}
        className={`hover:animate-wiggle h-auto w-full max-w-100 truncate object-cover p-3 transition-all duration-150 hover:cursor-zoom-in hover:p-1 active:p-4 ${imgClassName}`}
        style={h ? { height: `${h}px` } : {}}
        loading="lazy"
        alt={'image'}
      ></img>
    </div>
  );
}
