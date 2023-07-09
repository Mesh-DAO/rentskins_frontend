'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import Form from '@/components/Forms'

export default function ModalFiltersPrice() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <CommonTitle color="white" size="2xl" bold={600}>
          Preço
        </CommonTitle>
        <div className="flex w-full items-center gap-5">
          <InputValue title="Preço mínimo" />
          <hr className="mt-6 w-9" />
          <InputValue title="Preço máximo" />
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

interface IProps {
  title: string
}

function InputValue({ title }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <CommonTitle color="white" size="sm">
        {title}
      </CommonTitle>
      <div className="items flex items-center">
        <div className="absolute ml-2 text-sm font-semibold text-mesh-color-neutral-0 opacity-60">
          R$
        </div>
        <Form.Input.Currency
          state={null}
          setState={() => {}}
          className="h-10 w-full rounded bg-mesh-color-neutral-900 pl-8 text-white outline-none active:border-mesh-color-primary-700"
        />
      </div>
    </div>
  )
}
