/* eslint-disable camelcase */
import Image from 'next/image'
import ColoredLine from '@/components/ColoredLine'

type Props = {
  icon_url?: string
}

export function CardSkinModal({ icon_url }: Props) {
  return (
    <div className="relative mr-6 mt-2 flex h-full w-[60%] items-center justify-center rounded-lg bg-mesh-image-details bg-cover bg-no-repeat">
      <Image
        src={icon_url || ''}
        alt=""
        className="w-[80%] object-cover"
        draggable={false}
      />
      <div className="absolute bottom-0 w-full">
        <ColoredLine position={1} />
      </div>
    </div>
  )
}
