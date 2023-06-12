'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InputRadio } from '@/components/InputRadio'
import { Title } from '@/components/Title'

export function InfoSkinModal() {
  return (
    <div className="flex h-full w-[40%] flex-col">
      <div>
        <Title color="white" className=" text-[28px]">
          Kumicho Dragon
        </Title>
        <p className="-mt-2 font-medium text-mesh-color-neutral-200">
          Desert • Nova de fábrica
        </p>
      </div>

      <div className="mt-4 h-full w-full rounded-lg bg-mesh-color-others-black p-4">
        <div>
          <div className="mt-2 flex justify-between">
            <Title size="md" bold={500} color="white">
              Preço recomendado
            </Title>
            <span className="text-mesh-color-accent-1000">R$21,32</span>
          </div>
          <p className="w-[70%] text-mesh-color-neutral-200">
            Preço que recomendamos com base no mercado do momento
          </p>
          <div className="mt-6 rounded border-b border-mesh-color-neutral-200" />
        </div>

        {/* ---------INPUT -------------  */}
        <div className="mt-5 flex w-full gap-4">
          <div className="w-full space-y-2">
            <Title bold={500} color="white">
              Preço de venda
            </Title>
            <Input
              placeHolder="R$2.000"
              className="bg-mesh-dark-0 h-8 w-full rounded-md text-mesh-color-neutral-200"
            />
          </div>

          <div className="w-full space-y-2">
            <Title bold={500} color="white">
              Você irá receber
            </Title>
            <Input
              className="bg-mesh-dark-0 h-8 w-full rounded-md text-mesh-color-neutral-200"
              placeHolder="R$32,21"
            />
          </div>
        </div>
        {/* ---------INPUT FIM -------------  */}

        <div className=" space-y-6">
          <Button className="mt-4 h-11 w-full bg-mesh-color-primary-1400">
            <Title bold={600} className="rounded-xl">
              Anunciar
            </Title>
          </Button>
          <InputRadio
            name="ciente"
            radio="filter"
            className="ml-4 w-[90%] text-mesh-color-neutral-200"
          >
            Estou ciente que esta plataforma possui a modalidade de locação, e
            meu item poderá ser disponibilizado em caráter temporário, fazendo
            com que o recebimento pela venda ou locação deste item só seja
            realizado no prazo final da transação.
          </InputRadio>
        </div>
      </div>
    </div>
  )
}
