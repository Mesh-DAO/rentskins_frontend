import { IconGear, IconPaper, IconLockedShield } from '@/components/Icons'
import useComponentStore from '@/stores/components.store'

export function SideRadioButton() {
  const { settingsIndex, setSettingsIndex } = useComponentStore()

  return (
    <>
      <div className="flex">
        <input
          type="radio"
          id="settings_index-1"
          name="settings_index"
          className="peer appearance-none"
          onClick={() => setSettingsIndex(0)}
          defaultChecked
          value={0}
        />
        <label
          htmlFor="settings_index-1"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-mesh-color-neutral-200 
        transition-all duration-500 hover:cursor-pointer hover:bg-mesh-color-neutral-600/20 peer-checked:bg-mesh-color-neutral-600 peer-checked:text-mesh-color-accent-1000"
        >
          <IconGear
            stroke={`${settingsIndex === 0 ? '#3C403C' : '#151714'}`}
            fill={`${settingsIndex === 0 ? '#3EE167' : '#A7B0A0'}`}
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
          onClick={() => setSettingsIndex(1)}
        />
        <label
          htmlFor="settings_index-2"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-mesh-color-neutral-200 transition-all
        duration-500 hover:cursor-pointer hover:bg-mesh-color-neutral-600/20 peer-checked:bg-mesh-color-neutral-600 peer-checked:text-mesh-color-accent-1000"
        >
          <IconPaper
            stroke={`${settingsIndex === 1 ? '#3C403C' : '#151714'}`}
            fill={`${settingsIndex === 1 ? '#3EE167' : '#A7B0A0'}`}
          />
          Transações
        </label>
      </div>

      <div className="flex">
        <input
          type="radio"
          id="settings_index-3"
          name="settings_index"
          className="peer select-none appearance-none"
          onClick={() => setSettingsIndex(2)}
        />
        <label
          htmlFor="settings_index-3"
          className="flex w-full select-none items-center justify-start gap-4 rounded-md 
        bg-transparent px-4 py-3 text-lg font-semibold text-mesh-color-neutral-200 transition-all duration-500
        hover:cursor-pointer hover:bg-mesh-color-neutral-600/20 peer-checked:bg-mesh-color-neutral-600 peer-checked:text-mesh-color-accent-1000"
        >
          <IconLockedShield
            stroke={`${settingsIndex === 2 ? '#3C403C' : '#151714'}`}
            fill={`${settingsIndex === 2 ? '#3EE167' : '#A7B0A0'}`}
          />
          Segurança
        </label>
      </div>
    </>
  )
}
