import Image from 'next/image'
import fallen from '../../assets/fallen.svg'
import { Title } from '../Title'

export function InfoPerfil() {
  return (
    <div className="mt-10 min-h-[300px] rounded-lg border-2 border-mesh-color-neutral-600">
      <div className="p-4">
        <div className="flex items-center">
          <Image
            src={fallen}
            alt=""
            className="rounded-full"
            draggable={false}
          />
          <div className="ml-4">
            <Title color="white" className="text-2xl font-semibold">
              Fallenzão
            </Title>
            <span className="mt-1 flex h-[26px] max-w-[79px] items-center justify-center rounded-[15px] border border-none bg-mesh-color-others-green text-sm text-mesh-color-accent-600">
              Confiável
            </span>
          </div>
        </div>
        <div className="mt-7 space-y-3">
          <div className="flex justify-between">
            <Title className="text-mesh-color-neutral-200">
              Taxa de entrega
            </Title>
            <span className="font-medium text-mesh-color-primary-1400">
              92%
            </span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-color-neutral-200">
              Tempo de entrega
            </Title>
            <span className="font-medium text-white">20 minutos</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-color-neutral-200">
              Total de trocas
            </Title>
            <span className="font-medium text-white">242</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-color-neutral-200">Steam level</Title>
            <span className="font-medium text-white">175</span>
          </div>

          <div className="flex justify-between">
            <Title className="text-mesh-color-neutral-200">
              Membro da Steam desde
            </Title>
            <span className="font-medium text-white">Dez 30, 2020</span>
          </div>
        </div>
      </div>
    </div>
  )
}
