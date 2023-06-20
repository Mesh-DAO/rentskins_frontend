'use client'
import useComponentStore from '@/stores/components.store'
import IconFilter from '../Icons/IconFilter'
import { Title } from '../Title'
import ContainerFilter from './ContainerFilter'

export default function SkinFilters() {
  const { setFilterType } = useComponentStore()

  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <ContainerFilter title="Preço" />
        <ContainerFilter title="Desgaste" />
        {/* <ContainerFilter filter="price" title="Categoria" /> */}
      </div>
      <Title color="white">
        <IconFilter />
        Padrão
      </Title>
    </div>
  )
}
