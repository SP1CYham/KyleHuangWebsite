import { type ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
}

export default function Base({ children }: BaseProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-250 flex-1">{children}</div>
    </div>
  );
}
