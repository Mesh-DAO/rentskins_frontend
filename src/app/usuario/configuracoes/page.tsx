'use client'
import Common from '@/components/Common'
import Form from '@/components/Forms'
import { PageSettingsInformation } from '@/components/Pages/PageSettings/PageSettingsInformation'
import { PageSettingsSecurity } from '@/components/Pages/PageSettings/PageSettingsSecurity'
import { PageSettingsTransactionsContent } from '@/components/Pages/PageSettings/Transactions/PageSettingsTransactionsContent'
import useComponentStore from '@/stores/components.store'
import { useState } from 'react'

export default function Settings() {
  const [selectedSetting, setSelectedSetting] = useState('personal')
  const { settingsIndex } = useComponentStore()
  return (
    <div className="flex h-screen justify-center gap-10 bg-mesh-color-others-black px-[7.5rem] pt-8">
      <div className="flex h-min w-max flex-col items-end gap-2">
        <div className="flex flex-col items-start gap-6">
          <Common.Title bold={900} size="2xl" color="white">
            Configurações
          </Common.Title>

          <div className="">
            <Form.Input.Radio.Block
              name="settings"
              state={selectedSetting}
              wrapperClassname="flex flex-col justify-start gap-2"
              containerClassname="w-full"
              setState={setSelectedSetting}
              options={[
                {
                  label: <div>Informações Pessoais</div>,
                  labelType: 'node',
                  value: 'personal',
                },
                {
                  label: <div>Transações</div>,
                  labelType: 'node',
                  value: 'transactions',
                },
                {
                  label: <div>Segurança</div>,
                  labelType: 'node',
                  value: 'security',
                },
              ]}
            />
          </div>
        </div>
      </div>

      {settingsIndex === 0 && <PageSettingsInformation />}
      {settingsIndex === 1 && <PageSettingsTransactionsContent />}
      {settingsIndex === 2 && <PageSettingsSecurity />}
    </div>
  )
}
