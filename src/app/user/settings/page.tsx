'use client'
import {
  SettingsInformation,
  SettingsSecurity,
  SettingsTransactions,
} from '@/components/Settings'
import { SideRadioButton } from '@/components/Settings/SideRadioButton'
import { Title } from '@/components/Title'

// CHANGE!
const settingsIndex: 0 | 1 | 2 = 1

export default function Settings() {
  return (
    <div className="flex h-screen justify-center gap-10 bg-mesh-dark-2 px-[7.5rem]">
      {/* Left Side */}
      <div className="flex h-min w-max flex-col items-end gap-2">
        <div className="flex flex-col items-start gap-6">
          <Title bold={900} size="2xl" color="white">
            Configurações
          </Title>

          <div>
            <SideRadioButton />
          </div>
        </div>
      </div>

      {/* Right Side */}
      {settingsIndex === 0 && <SettingsInformation />}
      {settingsIndex === 1 && <SettingsTransactions />}
      {settingsIndex === 2 && <SettingsSecurity />}
    </div>
  )
}
