'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputValue from './InputValue'
import { useEffect, useState } from 'react'
import useComponentStore from '@/stores/components.store'

export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()

  const {
    setSkinsFiltredByPrice,
    setCleanFilter,
    setAllSkinsFiltred,
    skinsFiltredByPrice,
    setSkinsFiltredByCategory,
    skinsFiltredByCategory,
    setSkinsFiltredByWear,
    skinsFiltredByWear,
  } = useComponentStore()

  const handleClickSetFilterPrice = () => {
    if (minPrice! > 0 && maxPrice! > 0 && maxPrice! > minPrice!) {
      setSkinsFiltredByPrice(minPrice!, maxPrice!)
    }
  }

  useEffect(() => {
    setAllSkinsFiltred()
  }, [
    setSkinsFiltredByPrice,
    skinsFiltredByPrice,
    setSkinsFiltredByCategory,
    skinsFiltredByCategory,
    setSkinsFiltredByWear,
    skinsFiltredByWear,
    setAllSkinsFiltred,
  ])

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <Title color="white" size="2xl" bold={600}>
          Preço
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputValue
            setValue={setMinPrice}
            value={minPrice}
            title="Preço mínimo"
          />
          <hr className="mt-6 w-9" />
          <InputValue
            setValue={setMaxPrice}
            value={maxPrice}
            title="Preço máximo"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => setCleanFilter('skinsFiltredByPrice')}
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
    </div>
  )
}
