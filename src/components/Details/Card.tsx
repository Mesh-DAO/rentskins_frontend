import Image from 'next/image'
import Link from 'next/link'
import { IconSteam } from '../Icons'
import ColoredLine from '../ColoredLine'
import { IconOlho } from '../Icons/IconOlho'

type PropsType = {
  skinImage: string
  skinName: string
  skinLinkGame: string
  skinLinkSteam: string
}

export function Card({
  skinImage,
  skinName,
  skinLinkGame,
  skinLinkSteam,
}: PropsType) {
  return (
    <div className="relative flex min-h-[560px] max-w-[742px] flex-col rounded-lg bg-mesh-image-details">
      <div className="absolute bottom-0 w-full">
        <ColoredLine />
      </div>
      <div className="flex space-x-4 p-2">
        <div className="flex h-8 w-[300px] items-center gap-2 rounded-lg border border-neutral-600 fill-white p-2 text-white opacity-50  first-line:border-neutral-600">
          <IconSteam />
          <Link href={skinLinkGame}>Visualizar no mercado da Steam</Link>
        </div>

        <div className="flex h-8 w-[200px] items-center gap-2 rounded-lg border border-neutral-600 fill-white p-2 text-white opacity-50">
          <IconOlho />
          <Link target="_blank" href={skinLinkSteam}>
            Inspecionar no jogo
          </Link>
        </div>
      </div>

      <Image
        src={skinImage}
        alt={skinName}
        width={510}
        height={380}
        className="mx-auto my-auto"
        draggable={false}
      />
    </div>
  )
}
