import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${
        narrow ? "max-w-3xl" : "max-w-6xl xl:max-w-7xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
