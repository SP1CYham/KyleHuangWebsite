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
    <div onClick={() => handleImagClick()} className={`${className}`} style={{ height: `${h}px` }}>
      <img
        src={src}
        className={`h-auto w-full object-cover p-3 transition transition-all duration-150 hover:rotate-2 hover:p-1 active:-rotate-2 active:p-4 ${imgClassName}`}
        style={{ height: `${h}px` }}
      ></img>
    </div>
  );
}
