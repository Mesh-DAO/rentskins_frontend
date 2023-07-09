/* eslint-disable camelcase */
import Image from 'next/image'

type Props = {
  name_color: string
  icon_url: string
  primeiroName: string
}

export function CardSkinImage({ name_color, icon_url, primeiroName }: Props) {
  return (
    <div className="bg-mesh-skin-gradient relative mb-4 flex flex-col items-center justify-center rounded-lg border-[1px] border-[#5E675E] bg-mesh-image-details">
      <div
        className="h-1 w-[80%] rounded-b"
        style={{ background: `#${name_color}` }}
      />
      <Image
        src={`https://steamcommunity-a.akamaihd.net/economy/image/${icon_url}`}
        alt={`${primeiroName}`}
        width={145}
        height={109}
      />
    </div>
  )
}
