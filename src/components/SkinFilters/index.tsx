'use client'
import IconFilter from '../Icons/IconFilter'
import { Title } from '../Title'
import ContainerFilter from './ContainerFilter'

export default function SkinFilters() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <ContainerFilter title="Preço" />
        <ContainerFilter title="Desgaste" />
        <ContainerFilter title="Categoria" />
      </div>
      <Title color="white">
        <IconFilter />
        Padrão
      </Title>
    </div>
  )
}
