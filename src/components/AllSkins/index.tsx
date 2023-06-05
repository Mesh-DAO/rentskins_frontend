import { skins } from "@/Mock"
import { CardSkin } from "../CardSkin"

interface skin {
  name: string;
  name_color: string;
  icon_url: string;
}

export default function AllSkins() {
  return (
    <div className="flex gap-5 flex-wrap mt-6 w-full">
      {
        skins.map(({
          name,
          name_color,
          icon_url
        }: skin, idx: number) => (
          <CardSkin
            icon_url={icon_url}
            name={name}
            name_color={name_color}
            key={`${name}-${idx}`}
          />
        ))
      }
    </div>
  )
}