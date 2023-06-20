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
        <ContainerFilter onClick={() => setFilterType(0)} title="Preço" />
        <ContainerFilter onClick={() => setFilterType(1)} title="Desgaste" />
        {/* <ContainerFilter filter="price" title="Categoria" /> */}
      </div>
      <Title color="white">
        <IconFilter />
        Padrão
      </Title>
    </div>
  )
}
