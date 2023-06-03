import Image from 'next/image'
import fallen from '../../assets/fallen.svg'
import { Title } from '../Title'

export function InfoPerfil() {
  return (
    <div className="mt-10 h-[300px] rounded-lg border-2 border-[#3E423A]">
      <div className="p-4">
        <div className="flex items-center">
          <Image src={fallen} alt="" className="rounded-full" />
          <div className="ml-4">
            <Title className="text-2xl font-semibold text-white">
              Fallenzão
            </Title>
            <span className="mt-1 flex h-[26px] max-w-[79px] items-center justify-center rounded-[15px] border border-none bg-[#243D30] text-sm text-[#49E671]">
              Confiável
            </span>
          </div>
        </div>
        <div className="mt-7 space-y-3">
          <div className="flex justify-between">
            <Title className="text-mesh-dark-3">Taxa de entrega</Title>
            <span className="font-medium text-dark-lime-green">92%</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-dark-3">Tempo de entrega</Title>
            <span className="font-medium text-white">20 minutos</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-dark-3">Total de trocas</Title>
            <span className="font-medium text-white">242</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-dark-3">Steam level</Title>
            <span className="font-medium text-white">175</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-dark-3">Membro da Steam desde</Title>
            <span className="font-medium text-white">Dez 30, 2020</span>
          </div>
        </div>
      </div>
    </div>
  )
}
