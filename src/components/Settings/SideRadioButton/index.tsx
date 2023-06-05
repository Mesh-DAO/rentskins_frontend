import Image from 'next/image'

import IconGear from '../../../components/Icons/icon-gear.svg'
import IconPaper from '../../../components/Icons/icon-paper.svg'
import IconLockedShield from '../../../components/Icons/icon-locked-shield.svg'

export function SideRadioButton() {
  return (
    <>
      <div className="flex">
        <input
          type="radio"
          id="settings_index-1"
          name="settings_index"
          className="peer select-none appearance-none"
          value={1}
          defaultChecked
        />
        <label
          htmlFor="settings_index-1"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-[#A7B0A0] 
        transition-all duration-500 peer-checked:bg-mesh-dark-0 peer-checked:text-[#3EE167]"
        >
          <Image
            src={IconGear}
            width={20}
            height={20}
            alt="Informações Pessoais"
          />
          Informações Pessoais
        </label>
      </div>

      <div className="flex">
        <input
          type="radio"
          id="settings_index-2"
          name="settings_index"
          className="peer select-none appearance-none"
          value={2}
        />
        <label
          htmlFor="settings_index-2"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-[#A7B0A0] 
        transition-all duration-500 peer-checked:bg-mesh-dark-0 peer-checked:text-[#3EE167]"
        >
          <Image src={IconPaper} width={20} height={20} alt="Transações" />
          Transações
        </label>
      </div>

      <div className="flex">
        <input
          type="radio"
          id="settings_index-3"
          name="settings_index"
          className="peer select-none appearance-none"
          value={3}
        />
        <label
          htmlFor="settings_index-3"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-[#A7B0A0] 
        transition-all duration-500 peer-checked:bg-mesh-dark-0 peer-checked:text-[#3EE167]"
        >
          <Image
            src={IconLockedShield}
            width={20}
            height={20}
            alt="Segurança"
          />
          Segurança
        </label>
      </div>
    </>
  )
}
