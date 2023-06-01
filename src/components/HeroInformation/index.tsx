import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  icon: string;
  title: string;
  children: React.ReactNode;
};

export function HeroInformation({ children, icon, className, title, ...props }: Props) {
  return (
    <div className="flex items-center gap-2 w-1/5 justify-center">
      <div className="flex items-center justify-center w-14 h-14 bg-main-dark-light rounded-xl">
        <Image src={ icon } alt="Pagamento Seguro" className="w-7 h-7"/>
      </div>
      <span className="text-white w-2/3">
      <strong className="text-md">
          { title }
        </strong>
        <p className="text-xs">
          { children }
        </p>
      </span>
    </div>
  );
}
