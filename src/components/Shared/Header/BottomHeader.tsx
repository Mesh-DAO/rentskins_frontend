import { SetaType } from "@/components/Icons/SetaType";
import { Title } from "@/components/Title";

export function BottomHeader() {
  return (
    <div className="w-10/12 mx-auto mt-2 flex flex-col items-center justify- p-2">

      <div className="flex gap-10">
        <Title className="w-10/12 text-white font-bold">Faca<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Rifles<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Luvas<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Pistolas<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Submetralhadoras<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Escopetas<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Metralhadoras<span><SetaType /></span></Title>
        <Title className="w-10/12 text-white font-bold">Figurinhas</Title>
        <Title className="w-10/12 text-white font-bold">Agentes</Title>
      </div>

    </div>
  )
}