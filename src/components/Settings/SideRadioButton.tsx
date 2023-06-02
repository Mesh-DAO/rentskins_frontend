import Image from "next/image";

import IconGear from '../../components/Icons/icon-gear.svg';
import IconPaper from '../../components/Icons/icon-paper.svg';
import IconLockedShield from '../../components/Icons/icon-locked-shield.svg';

export function SideRadioButton() {
  return(
    <>
      <div className="flex">
        <input type="radio" id="settings_index-1" name="settings_index" className="appearance-none peer select-none" value={1} defaultChecked />
        <label htmlFor="settings_index-1" className="flex items-center justify-start gap-4 w-full px-4 py-3 
        bg-transparent text-[#A7B0A0] font-semibold text-lg rounded-md peer-checked:bg-mesh-dark-0 
        peer-checked:text-[#3EE167] transition-all duration-500 select-none">
          <Image src={IconGear} width={20} height={20} alt="Informações Pessoais" />
          Informações Pessoais
        </label>
      </div>

      <div className="flex">
        <input type="radio" id="settings_index-2" name="settings_index" className="appearance-none peer select-none" value={2} />
        <label htmlFor="settings_index-2" className="flex items-center justify-start gap-4 w-full px-4 py-3 
        bg-transparent text-[#A7B0A0] font-semibold text-lg rounded-md peer-checked:bg-mesh-dark-0 
        peer-checked:text-[#3EE167] transition-all duration-500 select-none">
          <Image src={IconPaper} width={20} height={20} alt="Transações" />
          Transações
        </label>
      </div>

      <div className="flex">
        <input type="radio" id="settings_index-3" name="settings_index" className="appearance-none peer select-none" value={3} />
        <label htmlFor="settings_index-3" className="flex items-center justify-start gap-4 w-full px-4 py-3 
        bg-transparent text-[#A7B0A0] font-semibold text-lg rounded-md peer-checked:bg-mesh-dark-0 
        peer-checked:text-[#3EE167] transition-all duration-500 select-none">
          <Image src={IconLockedShield} width={20} height={20} alt="Segurança" />
          Segurança
        </label>
      </div>
    </>
  )
}