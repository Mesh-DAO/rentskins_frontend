import Image from 'next/image'
import degle from '../../assets/deagle.png'
import { Title } from '../Title'

interface Props {
  nameColor: string
}

export function CardSkinInventory({ nameColor }: Props) {
  return (
    <div className="flex w-60 flex-col gap-3 rounded-lg border-2 border-mesh-color-primary-1400 border-opacity-60 px-3 pb-4 pt-3 text-white">
      <div className="bg-mesh-skin-gradient relative flex flex-col items-center justify-center rounded-lg border-2 border-mesh-color-primary-1400">
        <div className="bg-dark-lime-green absolute top-[-2px] h-[5px] w-2/3 rounded-b-lg" />
        <div className="bg-dark-lime-green absolute left-[-10px] top-[-10px] h-7 w-7 rounded-full border" />
        <div className={`h-2 w-52 bg-[#${nameColor}] rounded-b-full`} />
        <Image src={degle} alt="placeholder" width={206} height={154} />
      </div>
      <div>
        <Title className='className="font-semibold"'>Kumicho Dragon</Title>
        <Title className="mt-[2px] text-sm font-medium opacity-60">
          Desert Eagle
        </Title>
      </div>

      <Title>
        <strong>FT / </strong>
        <span className="opacity-60">0.0003</span>
      </Title>
      <div className="rounded border-4 border-red-800" />
    </div>
  )
}
