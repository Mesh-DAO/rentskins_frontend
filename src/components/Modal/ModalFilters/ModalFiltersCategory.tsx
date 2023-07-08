'use client'
import Common from '@/components/Common'

export default function ModalFiltersCategory() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Common.Title color="white" size="2xl" bold={600}>
          Categoria
        </Common.Title>
        <div className="flex w-full items-center gap-5">
          {/* <InputCheckbox inputValues={['Adesivos', 'StatTrak']} /> */}
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Common.Button className="h-11 w-32 font-bold text-white">
          Limpar
        </Common.Button>
        <Common.Button className="h-11 w-32 border-none bg-mesh-color-primary-1200 font-bold text-black">
          Aplicar
        </Common.Button>
      </div>
    </div>
  )
}