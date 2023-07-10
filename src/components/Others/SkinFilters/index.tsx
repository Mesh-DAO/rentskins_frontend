'use client'
import useFilterStore from '@/stores/filters.store'
import IconFilter from '@/components/Icons/IconFilter'
import Common from '@/components/Common'
import ContainerFilter from './ContainerFilter'
import { useEffect, useState } from 'react'
import ModalFiltersMain from '@/components/Modal/ModalFilters/ModalFiltersMain'

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
          <Common.Button
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
          </Common.Button>
        )}
      </div>
      <div className="relative z-10 flex cursor-pointer items-center">
        <ModalFiltersMain
          activator={
            <Common.Button className="flex cursor-pointer items-center gap-2 border-none text-white">
              <IconFilter />
              Padrão
            </Common.Button>
          }
          child="Padrão"
        />
      </div>
    </div>
  )
}
