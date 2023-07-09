'use client'
import { IconSetaType } from '@/components/Icons'
import ModalFiltersMain from '@/components/Modal/ModalFilters/ModalFiltersMain'

interface IProps {
  title: 'Preço' | 'Desgaste' | 'Categoria' | 'Padrão'
}

export default function ContainerFilter({ title }: IProps) {
  const activator = (
    <div className="group relative z-10 cursor-pointer rounded-lg border-2 border-mesh-color-neutral-600 px-5 py-3">
      <button className="flex items-center gap-2 text-white">
        {title}
        <span className="transition duration-300 ease-in-out  group-hover:rotate-180">
          <IconSetaType />
        </span>
      </button>
    </div>
  )
  return <ModalFiltersMain activator={activator} child={title} />
}
