'use client'
import Common from '@/components/Common'
import Form from '@/components/Forms'
import { IconGear, IconLockedShield, IconPaper } from '@/components/Icons'
import { PageSettingsInformation } from '@/components/Pages/PageSettings/PageSettingsInformation'
import { PageSettingsSecurity } from '@/components/Pages/PageSettings/PageSettingsSecurity'
import { PageSettingsTransactionsContent } from '@/components/Pages/PageSettings/Transactions/PageSettingsTransactionsContent'
import URLQuery from '@/tools/urlquery.tool'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Settings() {
  const [selectedSetting, setSelectedSetting] = useState('personal')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const titleQuery = searchParams.get('type') as
      | 'personal'
      | 'transactions'
      | 'security'

    if (titleQuery !== 'personal') {
      if (titleQuery !== 'transactions') {
        if (titleQuery !== 'security') {
          router.push(URLQuery.addQuery([{ key: 'type', value: 'personal' }]))
        }
      }
    }
  }, [searchParams, router])

  const handleOnRadio = (value: any) => {
    router.push(URLQuery.addQuery([{ key: 'type', value }]))
  }

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
              setState={setSelectedSetting}
              onChange={({ target }) => handleOnRadio(target.value)}
              labelClassname="bg-transparent border-none peer-checked:text-mesh-color-primary-1200 peer-checked:bg-mesh-color-neutral-600"
              wrapperClassname="flex flex-col justify-start gap-2"
              containerClassname="w-full"
              options={[
                {
                  label: (
                    <div className="flex w-full items-center justify-start gap-2">
                      <IconGear width={20} height={18} />
                      Informações Pessoais
                    </div>
                  ),
                  labelType: 'node',
                  value: 'personal',
                },
                {
                  label: (
                    <div className="flex w-full items-center justify-start gap-2">
                      <IconPaper width={18} height={18} />
                      Transações
                    </div>
                  ),
                  labelType: 'node',
                  value: 'transactions',
                },
                {
                  label: (
                    <div className="flex w-full items-center justify-start gap-2">
                      <IconLockedShield width={20} height={20} />
                      Segurança
                    </div>
                  ),
                  labelType: 'node',
                  value: 'security',
                },
              ]}
            />
          </div>
        </div>
      </div>

      {searchParams.get('type') === 'personal' && <PageSettingsInformation />}
      {searchParams.get('type') === 'transactions' && (
        <PageSettingsTransactionsContent />
      )}
      {searchParams.get('type') === 'security' && <PageSettingsSecurity />}
    </div>
  )
}
