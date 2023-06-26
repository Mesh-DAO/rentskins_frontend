'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputCheckbox from '@/components/InputCheckboxFilter'

export default function FilterCategory() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Title color="white" size="2xl" bold={600}>
          Categoria
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputCheckbox inputValues={['Adesivos', 'StatTrak']} />
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
