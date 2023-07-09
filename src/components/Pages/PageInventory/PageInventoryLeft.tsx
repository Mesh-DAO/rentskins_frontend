import Common from '@/components/Common'
// import { CheckBox } from '../CheckBox'

export function PageInventoryLeft() {
  return (
    <div>
      <div className="border-b border-mesh-color-neutral-200 pb-4">
        <Common.Title color="white" className="text-3xl font-extrabold">
          Inventário
        </Common.Title>
        <p className="mt-8 font-inter text-lg font-semibold text-white">
          Filtros
        </p>
      </div>

      <div className="flex flex-col gap-4 py-6">
        {/* <CheckBox value="Knife">Faca</CheckBox>
        <CheckBox value="Rifle">Rifles</CheckBox>
        <CheckBox value="Sniper Rifle">Rifles de precisão</CheckBox>
        <CheckBox value="Pistol">Pistolas</CheckBox>
        <CheckBox value="SMG">Submetralhadoras</CheckBox>
        <CheckBox value="Machinegun">Metralhadoras</CheckBox>
        <CheckBox value="Shotgun">Escopetas</CheckBox>
        <CheckBox value="Gloves">Luvas</CheckBox>
        <CheckBox value="Sticker">Figurinhas</CheckBox>
        <CheckBox value="Agent">Agentes</CheckBox> */}
      </div>
    </div>
  )
}
