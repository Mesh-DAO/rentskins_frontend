import { IconGear, IconPaper, IconLockedShield } from '@/components/Icons'

export function SideRadioButton() {
  return (
    <>
      <div className="flex">
        <input
          type="radio"
          id="settings_index-1"
          name="settings_index"
          className="peer appearance-none"
          value={1}
          defaultChecked
        />
        <label
          htmlFor="settings_index-1"
          className="peer-checked:bg-mesh-dark-0 flex w-full select-none items-center justify-start gap-4 
        rounded-md bg-transparent px-4 py-3 text-lg font-semibold 
        text-mesh-color-neutral-200 transition-all duration-500 peer-checked:text-[#3EE167]"
        >
          <IconGear />
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
          className="peer-checked:bg-mesh-dark-0 flex w-full select-none items-center justify-start gap-4 
        rounded-md bg-transparent px-4 py-3 text-lg font-semibold 
        text-mesh-color-neutral-200 transition-all duration-500 peer-checked:text-[#3EE167]"
        >
          <IconPaper />
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
          className="peer-checked:bg-mesh-dark-0 flex w-full select-none items-center justify-start gap-4 
        rounded-md bg-transparent px-4 py-3 text-lg font-semibold 
        text-mesh-color-neutral-200 transition-all duration-500 peer-checked:text-[#3EE167]"
        >
          <IconLockedShield />
          Segurança
        </label>
      </div>
    </>
  )
}
