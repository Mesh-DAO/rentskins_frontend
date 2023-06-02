import Image from "next/image";
import { Button } from "../Button";
import IconSteam from "../Icons/IconSteam";
import IconCart from "../Icons/Cart";
import IconEye from "../Icons/Eye";

interface Props {
  name: string;
  name_color: string;
  icon_url: string;
};

export function CardSkin({ name, name_color, icon_url }: Props) {
  const [skinType, skinName] = name.split("|")
  return (
    <article className="w-72 rounded-lg flex flex-col gap-3 px-3 pt-3 pb-4 border-2 border-mesh-light-1 border-opacity-30 text-white">
      <div className="border-2 flex flex-col items-center justify-center bg-mesh-skin-gradient rounded-lg border-mesh-light-1 border-opacity-40">
        <div className={`w-52 h-2 bg-[#${name_color}] rounded-b-full`} />
        <Image
          src={`https://steamcommunity-a.akamaihd.net/economy/image/${icon_url}/206fx170f`}
          alt="placeholder"
          width={206}
          height={154}
        />
      </div>
      <h1 className="font-semibold">{skinName}</h1>
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-sm opacity-60">{skinType}</h1>
        <div className="flex gap-2">
          <Button
            color="invisible"
          >
            <IconSteam />
          </Button>
          <Button
            color="invisible"
          >
            <IconEye />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">R$325</h1>
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
          <Button color="visible">
            Comprar
          </Button>
        </div>
      </div>
    </article>
  )
}