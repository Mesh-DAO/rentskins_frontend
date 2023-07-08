'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { IconClose } from '@/components/Icons/IconClose'
import { useState } from 'react'

export function PageSettingsInformation() {
  const [exchangeUrl, setExchangeUrl] = useState('')

  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="rounded-2xl bg-mesh-color-neutral-800 px-4 py-6">
        <div>
          <CommonTitle bold={700} size={'2xl'} color="white">
            Informações Pessoais
          </CommonTitle>
          {/* CHANGE COLOR! */}
          <span className="text-mesh-color-neutral-200">
            Aqui você encontra informações sobre a sua conta RentsSkins.
            Recomendamos que você mantenha a sua URL de Troca e outras
            informações importantes atualizadas para não ter problema na hora da
            negociação.
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <CommonTitle size={'lg'} color="white">
            URL de Troca
          </CommonTitle>
          <div className="flex gap-4">
            <div className="flex w-full items-center">
              <input
                className="w-full rounded-md bg-mesh-color-neutral-600 py-3 pl-3 pr-14 text-white placeholder:text-mesh-color-neutral-100"
                placeholder="https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n"
                onChange={(event) => setExchangeUrl(event.target.value)}
                value={exchangeUrl}
              />
              <CommonButton
                className="relative -ml-10 border-none"
                onClick={() => setExchangeUrl('')}
              >
                <IconClose />
              </CommonButton>
            </div>
            <div className="flex w-1/6 items-center justify-center gap-2">
              <CommonButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
                {' '}
                Obter URL{' '}
              </CommonButton>
              <CommonButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
                {' '}
                Aplicar{' '}
              </CommonButton>
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="my-6 h-[1px] w-full bg-mesh-color-neutral-200" />

        <div className="flex flex-col">
          <CommonTitle size={'lg'} color="white">
            Link de Venda
          </CommonTitle>
          <div className="flex items-center justify-between ">
            <span className="text-mesh-color-neutral-200">
              {' '}
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL){' '}
            </span>
            <CommonButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
              {' '}
              Copiar Link{' '}
            </CommonButton>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="rounded-2xl bg-mesh-color-neutral-800 px-4 py-6">
        <CommonTitle bold={700} size={'2xl'} color="white">
          Informações de Contato
        </CommonTitle>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex flex-col">
            <CommonTitle size={'lg'} color="white">
              Email
            </CommonTitle>
            <span className="text-mesh-color-neutral-200">
              {' '}
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL){' '}
            </span>
          </div>
          <CommonButton className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
            {' '}
            Copiar Link{' '}
          </CommonButton>
        </div>
      </div>
    </div>
  )
}
