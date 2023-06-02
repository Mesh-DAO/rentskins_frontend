'use client'

import { SettingsInformation, SettingsSecurity, SideRadioButton } from "@/components/Settings";
import { SettingsTransactions } from "@/components/Settings/Transactions";
import { Title } from "@/components/Title";

// CHANGE!
let settingsIndex: 0 | 1 | 2 = 2;

export default function Settings() {
  return(
    <div className="flex justify-center bg-mesh-dark-2 px-[7.5rem] h-screen gap-10">
      {/* Left Side */}
      <div className="flex flex-col gap-2 items-end h-min w-max">
        <div className="flex flex-col items-start gap-6">
          <Title bold={900} size="2xl" color="white">Configurações</Title>
          
          <div>
            <SideRadioButton />
          </div>
        </div>
      </div>

      {/* Right Side */}
      {settingsIndex == 0 && <SettingsInformation />}
      {settingsIndex == 1 && <SettingsTransactions />}
      {settingsIndex == 2 && <SettingsSecurity />}
    </div>
  )
}