import Image from 'next/image'
import deagle from '../../assets/deagle.png'
import Link from 'next/link'
import { Steam } from '../Icons/Steam'

export function Card() {
  return (
    <div className="flex h-[560px] w-[60%] flex-col rounded-b-lg border-b-8 border-[#CA1733] bg-details-fundo">
      <div className="flex space-x-4 p-2">
        <div className="flex h-8 w-[300px] items-center gap-2 rounded-lg border border-[#3E423A] p-2 text-white opacity-80 first-line:border-[#3E423A]">
          <Steam />
          <Link href="">Visualizar no mercado da Steam</Link>
        </div>

        <div className="flex h-8 w-[200px] items-center gap-2 rounded-lg border border-[#3E423A] p-2 text-white opacity-80">
          <Steam />
          <Link href="">Inspecionar no jogo</Link>
        </div>
      </div>

      <Image
        src={deagle}
        alt=""
        width={510}
        height={380}
        className="mx-auto my-auto"
      />
    </div>
  )
}
