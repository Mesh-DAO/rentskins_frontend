'use client'
import useFilterStore from '@/stores/filters.store'
import ModalFilterCategories from '../Dropdown/ModalFilterCategories'
import IconFilter from '../Icons/IconFilter'
import ContainerFilter from './ContainerFilter'
import { useEffect, useState } from 'react'

export default function SkinFilters() {
  const {
    selectedFilters: { categories, wears, prices },
    setSelectedFilters,
  } = useFilterStore()
  const [thereIsFilters, setThereIsFilters] = useState(false)

  useEffect(() => {
    const thereIsFilters =
      categories?.length! > 0 ||
      wears?.length! > 0 ||
      prices.max !== null ||
      prices.min !== null

    setThereIsFilters(thereIsFilters)
  }, [categories, wears, prices])

  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <ContainerFilter title="Preço" />
        <ContainerFilter title="Desgaste" />
        <ContainerFilter title="Categoria" />
        {thereIsFilters && (
          <button
            onClick={() =>
              setSelectedFilters({
                wears: [],
                categories: [],
                prices: { min: null, max: null },
              })
            }
            className="ml-2 text-mesh-color-neutral-200 hover:text-mesh-color-neutral-100"
          >
            Limpar filtros
          </button>
        )}
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
