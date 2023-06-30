'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputCheckbox from '@/components/InputCheckboxFilter'
import useComponentStore from '@/stores/components.store'
import { useEffect, useState } from 'react'

export default function FilterWear() {
  const [wears, setWears] = useState<string[]>([])

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
    if (wears!.length > 0) {
      setSkinsFiltredByWear(...wears)
      console.log(skinsFiltredByWear)
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
          Desgaste
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputCheckbox
            setValues={setWears}
            values={wears}
            inputValues={[
              'Nova de fábrica',
              'Bem usada',
              'Desgastada',
              'Pouca usada',
              'Muito usada',
            ]}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => setCleanFilter('skinsFiltredByWear')}
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
