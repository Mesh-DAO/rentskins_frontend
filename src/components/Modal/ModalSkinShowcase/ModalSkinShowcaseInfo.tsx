'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import Form from '@/components/Forms'

type Props = {
  name: string
  weapon: string
  statusFloatText: string
  preco: string
}

export function ModalSkinShowcaseInfo({
  name,
  preco,
  statusFloatText,
  weapon,
}: Props) {
  return (
    <div className="flex h-full w-[40%] flex-col">
      <div>
        <CommonTitle color="white" className="text-[24px]">
          {name}
        </CommonTitle>
        <p className="-mt-1 font-medium text-mesh-color-neutral-200">
          {weapon} • {statusFloatText}
        </p>
      </div>

      <div className="mt-4 h-full w-full rounded-lg bg-mesh-color-others-black p-4">
        <div>
          <div className="mt-2 flex justify-between">
            <CommonTitle size="md" bold={500} color="white">
              Preço recomendado
            </CommonTitle>
            <span className="text-mesh-color-accent-1000">R$: {preco}</span>
          </div>
          <p className="w-[70%] text-mesh-color-neutral-200">
            Preço que recomendamos com base no mercado do momento
          </p>
          <div className="mt-6 rounded border-b border-mesh-color-neutral-200" />
        </div>

        {/* ---------INPUT -------------  */}
        <div className="mt-5 flex w-full gap-4">
          <div className="w-full space-y-2">
            <CommonTitle bold={500} color="white">
              Preço de venda
            </CommonTitle>
            <Form.Input.Text
              state={''}
              setState={() => {}}
              placeholder="R$ 2.000,00"
              className="h-8 w-full rounded-md bg-mesh-color-neutral-600 text-mesh-color-neutral-200"
            />
          </div>

          <div className="w-full space-y-2">
            <CommonTitle bold={500} color="white">
              Você irá receber
            </CommonTitle>
            <Form.Input.Text
              state={''}
              setState={() => {}}
              placeholder="R$ 32,21"
              className="h-8 w-full rounded-md bg-mesh-color-neutral-600 text-mesh-color-neutral-200"
            />
          </div>
        </div>
        {/* ---------INPUT FIM -------------  */}

        <div className="space-y-6">
          <CommonButton className="mt-4 h-11 w-full border-transparent bg-mesh-color-primary-1400">
            <CommonTitle bold={600} className="rounded-xl">
              Anunciar
            </CommonTitle>
          </CommonButton>
          <Form.Input.Checkbox
            state={''}
            setState={() => {}}
            label="Estou ciente que esta plataforma possui a modalidade de locação, e
            meu item poderá ser disponibilizado em caráter temporário, fazendo
            com que o recebimento pela venda ou locação deste item só seja
            realizado no prazo final da transação."
          />
        </div>
      </div>
    </div>
  )
}
