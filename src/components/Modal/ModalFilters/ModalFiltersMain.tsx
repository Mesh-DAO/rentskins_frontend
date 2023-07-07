'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'
import Modal from '..'

interface IProps {
  activator: React.ReactNode
  child: 'Preço' | 'Desgaste' | 'Categoria' | 'Padrão'
}

export default function ModalFiltersMain({ activator, child }: IProps) {
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
            {child === 'Preço' && <Modal.Filters.Price />}
            {child === 'Desgaste' && <Modal.Filters.Wear />}
            {child === 'Categoria' && <Modal.Filters.Category />}
            {child === 'Padrão' && <Modal.Filters.Standard />}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
