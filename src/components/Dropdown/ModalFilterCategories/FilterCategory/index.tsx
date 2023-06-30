'use client'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import InputCheckbox from '@/components/InputCheckboxFilter'
import useComponentStore from '@/stores/components.store'
import { useEffect, useState } from 'react'

export default function FilterCategory() {
  const [categories, setCategories] = useState<string[]>([])

  const {
    setSkinsFiltredByCategory,
    setCleanFilter,
    setAllSkinsFiltred,
    setSkinsFiltredByPrice,
    skinsFiltredByPrice,
    skinsFiltredByCategory,
    setSkinsFiltredByWear,
    skinsFiltredByWear,
  } = useComponentStore()

  const handleClickSetFilterCategory = () => {
    if (categories!.length > 0) {
      setSkinsFiltredByCategory(...categories)
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
          Categoria
        </Title>
        <div className="flex w-full items-center gap-5">
          <InputCheckbox
            setValues={setCategories}
            values={categories}
            inputValues={['Adesivos', 'StatTrak™']}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => setCleanFilter('skinsFiltredByCategory')}
          className="h-11 w-32 font-bold text-white"
        >
          Limpar
        </Button>
        <Button
          onClick={() => handleClickSetFilterCategory()}
          className="h-11 w-32 border-none bg-mesh-color-primary-1200 font-bold text-black"
        >
          Aplicar
        </Button>
      </div>
    </div>
  )
}
