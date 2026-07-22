import { useState, useEffect } from 'react';
import NoiseGrad from './NoiseGrad';
import asset from '../asset';

interface categoryProps {
  title: string;
  text: string;
  img: string;
  onClick?: () => void;
  flex: number;
}

export function CategoryCard({ title, text, img, onClick, flex = 1 }: categoryProps) {
  return (
    <div
      className="bg-accent2 group hover:bg-accent relative h-full min-w-0 overflow-hidden rounded-3xl transition-all duration-300 hover:cursor-pointer active:bg-white"
      style={{ flex }}
      onClick={onClick}
    >
      <img
        src={asset(img)}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-x-150 group-hover:rotate-3 group-active:scale-200 group-active:-rotate-3"
        style={{
          mixBlendMode: 'screen',
          zIndex: 0,
        }}
        loading="lazy"
      />
      <div className="relative z-10 flex h-full flex-col">
        <NoiseGrad
          className="flex h-full flex-col rounded-3xl transition-all"
          childClassName="rounded-3xl transition-all"
          direction="170deg"
        >
          <NoiseGrad
            className="flex h-full flex-col rounded-3xl border-2 border-white transition-all"
            childClassName="rounded-3xl transition-all"
            percent={60}
            xtraOpacity={0}
            baseFrequency={3}
            direction="170deg"
            color="var(--color-midtone)"
          >
            <p className="text-shadow-accent2 z-10 ml-1 flex-2 shrink-0 text-left text-6xl font-bold -tracking-widest hyphens-auto italic transition-all duration-300 text-shadow-lg/100 group-hover:text-[4em] group-hover:text-shadow-[10px_10px_0px_rgb(0_0_0/1)] group-active:text-[3em] md:hyphens-none">
              {title}
            </p>
            <p className="group-hover:animate-hover line-clamp-3 inline-block min-h-12 flex-1 shrink-0 place-content-end p-4 text-right align-text-bottom text-balance">
              {text}
            </p>
          </NoiseGrad>
        </NoiseGrad>
      </div>
    </div>
  );
}

export default function Category({
  categoryArray,
  overrideMax = null,
}: {
  categoryArray: categoryProps[];
  overrideMax?: number | null;
}) {
  function findMaxCat() {
    const innerWidth = window.innerWidth;
    if (innerWidth > 768) return overrideMax ? overrideMax : 4;
    else return 2;
  }

  const [maxCatPerRow, setMaxCatPerRow] = useState(findMaxCat());

  useEffect(() => {
    const handleResize = () => setMaxCatPerRow(findMaxCat());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allCategories: categoryProps[][] = [];
  let currentRow: categoryProps[] = [];
  let currentFlex = 0;

  categoryArray.forEach((category) => {
    currentFlex += category.flex;
    currentRow.push(category);
    if (currentFlex >= maxCatPerRow) {
      allCategories.push(currentRow);
      currentRow = [];
      currentFlex = 0;
    }
  });

  //flush remaining items
  if (currentRow.length > 0) {
    allCategories.push(currentRow);
  }

  return (
    <div className="flex flex-col gap-3">
      {allCategories.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-3 flex h-60 gap-3">
          {row.map((category, catIndex) => (
            <CategoryCard
              key={catIndex}
              title={category.title}
              text={category.text}
              img={category.img}
              onClick={category.onClick}
              flex={category.flex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
