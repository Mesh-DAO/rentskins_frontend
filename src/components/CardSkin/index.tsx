import Image from 'next/image'
import { Button } from '../Button'
import IconSteam from '@/assets/IconSteam'
import IconCart from '@/assets/Cart'
import IconEye from '@/assets/Eye'
import ColoredLine from '../ColoredLine'
import IconMagic from '../Icons/IconMagicpen'
import { Title } from '../Title'

interface Props {
  name: string
  nameColor: string
  iconUrl: string
  itsRent?: boolean
}

export function CardSkin({ name, nameColor, iconUrl, itsRent }: Props) {
  const [skinType, skinName] = name.split('|')

  return (
    <article className="flex w-72 flex-col gap-3 rounded-lg border-2 border-dark-olive-green border-opacity-60 px-3 pb-4 pt-3 text-white">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dark-olive-green bg-mesh-skin-gradient">
        <div
          className={`h-2 w-52 rounded-b-full`}
          style={{ backgroundColor: `#${nameColor}` }}
        />
        <Image
          src={`https://steamcommunity-a.akamaihd.net/economy/image/${iconUrl}`}
          alt="placeholder"
          width={206}
          height={154}
        />
      </div>
      <h1 className="font-semibold">{skinName}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-medium opacity-60">{skinType}</h1>
        <div className="flex gap-2">
          {itsRent && (
            <Button color="invisible">
              <IconMagic />
            </Button>
          )}
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
        {itsRent ? (
          <div className="flex flex-col items-end gap-2">
            <Button color="visible">Devolução</Button>
            <Title color="red" bg="light-red" className="rounded-xl px-2">
              Expira em 21 dias
            </Title>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button color="invisible">
              <IconCart />
            </Button>
            <Button color="visible">Comprar</Button>
          </div>
        )}
      </div>
    </article>
  )
}
