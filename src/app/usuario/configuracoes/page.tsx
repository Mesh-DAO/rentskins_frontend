'use client'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { PageSettingsInformation } from '@/components/Pages/PageSettings/PageSettingsInformation'
import { PageSettingsSecurity } from '@/components/Pages/PageSettings/PageSettingsSecurity'
import { PageSettingsTransactionsContent } from '@/components/Pages/PageSettings/Transactions/PageSettingsTransactionsContent'
import useComponentStore from '@/stores/components.store'

export default function Settings() {
  const { settingsIndex } = useComponentStore()
  return (
    <div className="flex h-screen justify-center gap-10 bg-mesh-color-others-black px-[7.5rem] pt-8">
      {/* Left Side */}
      <div className="flex h-min w-max flex-col items-end gap-2">
        <div className="flex flex-col items-start gap-6">
          <CommonTitle bold={900} size="2xl" color="white">
            Configurações
          </CommonTitle>

          <div className="flex flex-col gap-2">{/* <SideRadioButton /> */}</div>
        </div>
      </div>

      {/* Right Side */}
      {settingsIndex === 0 && <PageSettingsInformation />}
      {settingsIndex === 1 && <PageSettingsTransactionsContent />}
      {settingsIndex === 2 && <PageSettingsSecurity />}
    </div>
  )
}
