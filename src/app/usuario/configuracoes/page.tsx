'use client'
import Common from '@/components/Common'
import Pages from '@/components/Pages'
import useComponentStore from '@/stores/components.store'

export default function Settings() {
  const { settingsIndex } = useComponentStore()
  return (
    <div className="flex h-screen justify-center gap-10 bg-mesh-color-others-black px-[7.5rem] pt-8">
      {/* Left Side */}
      <div className="flex h-min w-max flex-col items-end gap-2">
        <div className="flex flex-col items-start gap-6">
          <Common.Title bold={900} size="2xl" color="white">
            Configurações
          </Common.Title>

          <div className="flex flex-col gap-2">{/* <SideRadioButton /> */}</div>
        </div>
      </div>

      {/* Right Side */}
      {settingsIndex === 0 && <Pages.Settings.Information />}
      {settingsIndex === 1 && <Pages.Settings.Transactions.Content />}
      {settingsIndex === 2 && <Pages.Settings.Security />}
    </div>
  )
}
