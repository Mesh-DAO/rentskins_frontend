import { TypeList } from "./TypeList";
import { SetaType } from "@/components/Icons/SetaType";

export function BottomHeader() {
  return (
    <div className="w-10/12 mx-auto mt-2 flex p-2 items-center pt-2 pb-4">
      <div className="w-full flex justify-center gap-6">
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