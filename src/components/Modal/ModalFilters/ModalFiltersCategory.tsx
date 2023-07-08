'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'

export default function ModalFiltersCategory() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <CommonTitle color="white" size="2xl" bold={600}>
          Categoria
        </CommonTitle>
        <div className="flex w-full items-center gap-5">
          {/* <InputCheckbox inputValues={['Adesivos', 'StatTrak']} /> */}
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <CommonButton className="h-11 w-32 font-bold text-white">
          Limpar
        </CommonButton>
        <CommonButton className="h-11 w-32 border-none bg-mesh-color-primary-1200 font-bold text-black">
          Aplicar
        </CommonButton>
      </div>
    </div>
  )
}
