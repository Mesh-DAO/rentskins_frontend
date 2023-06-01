import React from "react";
import { MouseEventHandler } from "react";
import Image from "next/image";
import SteamIcon from "../../assets/icon-steam.svg";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  width?: string;
  height?: string;
  disable?: boolean;
};

export function SteamButton({
  onClick,
  height = "h-[60px]",
  width = "w-[330px]",
}: Props) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`rounded-md font-Roboto transition-all ease-in-out duration-300 no-underline ${width} ${height} flex gap-4 justify-center items-center
      bg-alt-steam-button transition-colors hover:bg-steam-button-pattern`}
    >
      <Image src={SteamIcon} alt="Steam Login" width={24} height={24}/>
      <span className="text-[22px] text-mesh-dark-2 font-bold"> Entre com a sua Steam </span>
    </button>
  );
}
