'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputValue from './InputValue'

export default function FilterPrice() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Title color="white" size="2xl" bold={600}>
          Preço
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputValue title="Preço mínimo" />
          <hr className="mt-6 w-9" />
          <InputValue title="Preço máximo" />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button className="h-11 w-32 font-bold text-white">Limpar</Button>
        <Button className="h-11 w-32 border-none bg-mesh-color-primary-1200 font-bold text-black">
          Aplicar
        </Button>
      </div>
    </div>
  )
}
