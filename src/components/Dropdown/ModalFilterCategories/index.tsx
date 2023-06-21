'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'
import FilterPrice from './FilterPrice'
import FilterWear from './FilterWear'
import FilterCategory from './FilterCategory'

interface IProps {
  activator: React.ReactNode
  child: string
}

export default function ModalFilterCategories({ activator, child }: IProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{activator}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div className="absolute top-4 h-64 w-[497px] rounded-lg bg-mesh-color-neutral-800 p-4">
            {child === 'Preço' && <FilterPrice />}
            {child === 'Desgaste' && <FilterWear />}
            {child === 'Categoria' && <FilterCategory />}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
