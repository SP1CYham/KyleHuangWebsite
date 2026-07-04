import { type ReactNode } from 'react';

interface BaseProps {
  children: ReactNode;
}

export default function Base({ children }: BaseProps) {
  return (
    <div className="flex justify-center">
      <div className="max-w-250 min-w-0 flex-1 p-4">{children}</div>
    </div>
  );
}
