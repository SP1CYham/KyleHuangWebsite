import { type ReactNode } from 'react';

interface BaseProps {
  children?: ReactNode;
  className?: string;
  maxW?: number;
}

export default function Base({ children, className, maxW = 60 }: BaseProps) {
  const maxWString = maxW.toString() + 'rem';

  return (
    <div className="flex justify-center">
      <div className={`min-w-0 flex-1 p-4 ${className}`} style={{ maxWidth: maxWString }}>
        {children}
      </div>
    </div>
  );
}
