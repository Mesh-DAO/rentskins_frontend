'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputValue from './InputValue'
import { useState } from 'react'
import useFilterStore from '@/stores/filters.store'

export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()

  const { selectedFilters, setSelectedFilters, cleanSelectedFilters } =
    useFilterStore()

  const handleClickSetFilterPrice = () => {
    if (
      typeof minPrice === 'number' &&
      typeof maxPrice === 'number' &&
      minPrice! > 0 &&
      maxPrice! > minPrice!
    ) {
      setSelectedFilters({
        ...selectedFilters,
        prices: { max: maxPrice!, min: minPrice! },
      })
    }
  }

  return (
    <form className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Title color="white" size="2xl" bold={600}>
          Preço
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputValue
            setValue={setMinPrice}
            value={minPrice}
            defaultValue={
              selectedFilters.prices.min !== null
                ? selectedFilters.prices.min
                : minPrice
            }
            title="Preço mínimo"
          />
          <hr className="mt-6 w-9" />
          <InputValue
            setValue={setMaxPrice}
            value={maxPrice}
            defaultValue={
              selectedFilters.prices.max !== null
                ? selectedFilters.prices.max
                : maxPrice
            }
            title="Preço máximo"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            cleanSelectedFilters({
              ...selectedFilters,
              prices: { max: null, min: null },
            })
            setMaxPrice(undefined)
            setMinPrice(undefined)
          }}
          className="h-11 w-32 font-bold text-white"
        >
          Limpar
        </Button>
        <Button
          onClick={() => handleClickSetFilterPrice()}
          className="h-11 w-32 border-none bg-mesh-color-primary-1200 font-bold text-black"
        >
          Aplicar
        </Button>
      </div>
    </form>
  )
}
