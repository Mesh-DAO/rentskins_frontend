'use client'
import ModalFilterCategories from '../Dropdown/ModalFilterCategories'
import IconFilter from '../Icons/IconFilter'
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
        <ModalFilterCategories
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
