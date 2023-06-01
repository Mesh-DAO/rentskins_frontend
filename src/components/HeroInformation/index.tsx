import classNames from "classnames";
import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  icon: string;
  title: string;
  content: string;
};

export function HeroInformation({ icon, className, title, content, ...props }: Props) {
  return (
    <div className="flex items-end gap-2 w-1/5">
      <div className="flex items-center justify-center w-12 h-12 bg-main-dark-light rounded-xl">
        <Image src={ icon } alt="Pagamento Seguro" className="w-6 h-6"/>
      </div>
      <span className="text-white w-1/2">
        <strong className="text-sm">
          { title }
        </strong>
        <p className="text-[10px]">
          { content }
        </p>
      </span>
    </div>
  );
}
