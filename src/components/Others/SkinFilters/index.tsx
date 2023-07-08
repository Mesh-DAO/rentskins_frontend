'use client'
import IconFilter from '@/components/Icons/IconFilter'
import ModalFiltersMain from '@/components/Modal/ModalFilters/ModalFiltersMain'
import ContainerFilter from './ContainerFilter'

export default function SkinFilters() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <ContainerFilter title="Preço" />
        <ContainerFilter title="Desgaste" />
        <ContainerFilter title="Categoria" />
      </div>
      <div className="relative z-10 flex cursor-pointer items-center">
        <ModalFiltersMain
          activator={
            <button className="flex cursor-pointer items-center gap-2 border-none text-white">
              <IconFilter />
              Padrão
            </button>
          }
          child="Padrão"
        />
      </div>
    </div>
  )
}
