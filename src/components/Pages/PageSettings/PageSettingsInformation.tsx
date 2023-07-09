'use client'
import Common from '@/components/Common'
import { IconClose } from '@/components/Icons/IconClose'
import { useState } from 'react'

export function PageSettingsInformation() {
  const [exchangeUrl, setExchangeUrl] = useState('')

  return (
    <div className="flex w-2/3 flex-col gap-8">
      <div className="rounded-2xl bg-mesh-color-neutral-800 px-4 py-6">
        <div>
          <Common.Title bold={700} size={'2xl'} color="white">
            Informações Pessoais
          </Common.Title>
          <span className="text-mesh-color-neutral-200">
            Aqui você encontra informações sobre a sua conta RentsSkins.
            Recomendamos que você mantenha a sua URL de Troca e outras
            informações importantes atualizadas para não ter problema na hora da
            negociação.
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <Common.Title size={'lg'} color="white">
            URL de Troca
          </Common.Title>
          <div className="flex gap-4">
            <div className="flex w-full items-center">
              <input
                className="w-full rounded-md bg-mesh-color-neutral-600 py-3 pl-3 pr-14 text-white placeholder:text-mesh-color-neutral-100"
                placeholder="https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n"
                onChange={(event) => setExchangeUrl(event.target.value)}
                value={exchangeUrl}
              />
              <Common.Button
                className="relative -ml-10 border-none"
                onClick={() => setExchangeUrl('')}
              >
                <IconClose />
              </Common.Button>
            </div>
            <div className="flex w-1/6 items-center justify-center gap-2">
              <Common.Button className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
                Obter URL
              </Common.Button>
              <Common.Button className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
                Aplicar
              </Common.Button>
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="my-6 h-[1px] w-full bg-mesh-color-neutral-200" />

        <div className="flex flex-col">
          <Common.Title size={'lg'} color="white">
            Link de Venda
          </Common.Title>
          <div className="flex items-center justify-between ">
            <span className="text-mesh-color-neutral-200">
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL)
            </span>
            <Common.Button className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
              Copiar Link
            </Common.Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="rounded-2xl bg-mesh-color-neutral-800 px-4 py-6">
        <Common.Title bold={700} size={'2xl'} color="white">
          Informações de Contato
        </Common.Title>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex flex-col">
            <Common.Title size={'lg'} color="white">
              Email
            </Common.Title>
            <span className="text-mesh-color-neutral-200">
              {' '}
              https://rentskins/?sellerid=10902554 (MAKE IT FUNCTIONAL){' '}
            </span>
          </div>
          <Common.Button className="text-mesh-color-primary-1200 hover:text-mesh-color-primary-1200/50">
            {' '}
            Copiar Link{' '}
          </Common.Button>
        </div>
      </div>
    </div>
  )
}
