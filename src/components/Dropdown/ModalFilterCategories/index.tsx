'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'
import FilterPrice from './FilterPrice'
import FilterWear from './FilterWear'
import FilterCategory from './FilterCategory'
import FilterStandard from './FilterStandard'

interface IProps {
  activator: React.ReactNode
  child: 'Preço' | 'Desgaste' | 'Categoria' | 'Padrão'
}

export default function ModalFilterCategories({ activator, child }: IProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{activator}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div
            className={`absolute top-4 ${
              child === 'Padrão' ? '-right-10 w-[184px] py-4' : 'h-64 w-[497px]'
            } rounded-lg bg-mesh-color-neutral-800 p-4`}
          >
            {child === 'Preço' && <FilterPrice />}
            {child === 'Desgaste' && <FilterWear />}
            {child === 'Categoria' && <FilterCategory />}
            {child === 'Padrão' && <FilterStandard />}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
