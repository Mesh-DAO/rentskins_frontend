import Image from "next/image";
import { Button } from "../Button";
import IconSteam from "@/assets/IconSteam";
import IconCart from "@/assets/Cart";
import IconEye from "@/assets/Eye";

interface Props {
  name: string;
  name_color: string;
  icon_url: string;
}

export function CardSkin({ name, name_color, icon_url }: Props) {
  const [skinType, skinName] = name.split("|");
  return (
    <article className="flex w-72 flex-col gap-3 rounded-lg border-2 border-dark-olive-green border-opacity-60 px-3 pb-4 pt-3 text-white">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dark-olive-green bg-mesh-skin-gradient">
        <div className={`h-2 w-52 bg-[#${name_color}] rounded-b-full`} />
        <Image
          src={`https://steamcommunity-a.akamaihd.net/economy/image/${icon_url}/206fx170f`}
          alt="placeholder"
          width={206}
          height={154}
        />
      </div>
      <h1 className="font-semibold">{skinName}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-medium opacity-60">{skinType}</h1>
        <div className="flex gap-2">
          <Button color="invisible">
            <IconSteam />
          </Button>
          <Button color="invisible">
            <IconEye />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">R$325</h1>
        <h1>
          <strong>FT / </strong>
          <span className="opacity-60">0.0003</span>
        </h1>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex gap-2">
          <Button color="invisible">
            <IconCart />
          </Button>
          <Button color="visible">Comprar</Button>
        </div>
      </div>
    </article>
  );
}
