'use client'
import { IconSetaType } from '@/components/Icons'
import ModalFilterCategories from '@/components/Modal/ModalFilterCategories'
import React from 'react'

interface IProps {
  title: string
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export default function ContainerFilter({ title, onClick }: IProps) {
  return (
    <div
      className="group relative z-10 cursor-pointer rounded-lg border-2 border-mesh-color-neutral-600 px-5 py-3"
      onClick={onClick}
    >
      <ModalFilterCategories
        activator={
          <button className="flex items-center gap-2 text-white">
            {title}
            <span className="transition duration-300 ease-in-out  group-hover:rotate-180">
              <IconSetaType />
            </span>
          </button>
        }
      />
    </div>
  )
}
