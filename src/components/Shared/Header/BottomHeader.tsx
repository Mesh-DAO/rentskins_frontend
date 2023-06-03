import { TypeList } from './TypeList'

export function BottomHeader() {
  return (
    <div className="mx-auto mt-2 flex items-center  justify-center p-2 pb-4 pt-2">
      <div className="flex w-10/12 gap-6">
        <TypeList>Faca</TypeList>
        <TypeList>Rifles</TypeList>
        <TypeList>Luvas</TypeList>
        <TypeList>Pistolas</TypeList>
        <TypeList>Submetralhadoras</TypeList>
        <TypeList>Escopetas</TypeList>
        <TypeList>Metralhadoras</TypeList>
        <TypeList>Figurinhas</TypeList>
        <TypeList>Agentes</TypeList>
      </div>
    </div>
  )
}
