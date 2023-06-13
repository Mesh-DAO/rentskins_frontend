import IconFilter from '../Icons/IconFilter'
import { ContainerItem } from '../Shared/Header/BottomHeader'
import { Title } from '../Title'

export default function SkinFilters() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <ContainerItem
          className="rounded-lg border-2 border-mesh-color-neutral-600 px-5 py-3"
          isList={true}
          title="Preço"
          top="14"
        />
        <ContainerItem
          isList={true}
          title="Desgaste"
          className="rounded-lg border-2 border-mesh-color-neutral-600 px-5 py-3"
          top="14"
        />
        <ContainerItem
          isList={true}
          title="Categoria"
          className="rounded-lg border-2 border-mesh-color-neutral-600 px-5 py-3"
          top="14"
        />
      </div>
      <Title color="white">
        <IconFilter />
        Padrão
      </Title>
    </div>
  )
}
