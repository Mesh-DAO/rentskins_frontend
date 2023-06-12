import Image from 'next/image'
import arma from '../../../assets/deagle.png'
import ColoredLine from '@/components/ColoredLine'

export function CardSkinModal() {
  return (
    <div className="relative mr-6 mt-2 flex h-full w-[60%] items-center justify-center rounded-lg bg-details-fundo bg-cover bg-no-repeat">
      <Image src={arma} alt="" className="w-[80%] object-cover" />
      <div className="absolute bottom-0 w-full">
        <ColoredLine />
      </div>
    <div className="mr-6 mt-2 flex h-full w-[60%] items-center justify-center rounded-lg border-b-8 border-red-700 bg-mesh-image-details bg-cover bg-no-repeat">
      <Image
        src={arma}
        alt=""
        className="w-[80%] object-cover"
        draggable={false}
      />
    </div>
  )
}
