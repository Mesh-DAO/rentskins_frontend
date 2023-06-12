import Image from 'next/image'
import { Button } from '../Button'
import IconSteam from '@/assets/IconSteam'
import IconCart from '@/assets/Cart'
import IconEye from '@/assets/Eye'
import ColoredLine from '../ColoredLine'

interface Props {
  name: string
  nameColor: string
  iconUrl: string
}

export function CardSkin({ name, nameColor, iconUrl }: Props) {
  const [skinType, skinName] = name.split('|')

  return (
    <article className="flex w-72 flex-col gap-3 rounded-lg border-2 border-mesh-color-primary-1400 border-opacity-60 px-3 pb-4 pt-3 text-white">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-mesh-color-primary-1400 bg-mesh-gradient-black-pattern">
        <div
          className={`h-2 w-52 rounded-b-full`}
          style={{ backgroundColor: `#${nameColor}` }}
        />
        <Image
          src={`https://steamcommunity-a.akamaihd.net/economy/image/${iconUrl}`}
          alt="placeholder"
          width={206}
          height={154}
          draggable={false}
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
      <ColoredLine />
      <div className="flex items-center justify-end">
        <div className="flex gap-2">
          <Button color="invisible">
            <IconCart />
          </Button>
          <Button color="green">Comprar</Button>
        </div>
      </div>
    </article>
  )
}
