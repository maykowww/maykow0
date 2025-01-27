import type { ReactNode } from "react";

type OpacityCardProps = {
  children: ReactNode
}

export const OpacityCard = ({children}: OpacityCardProps) => {
  return (
    <div className="p-8 bg-black bg-opacity-40 rounded-lg w-fit">
      {children}
    </div>
  );
}