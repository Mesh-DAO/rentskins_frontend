import React from 'react'
import { Button } from '@/components/Button'
import { IconClose } from '@/components/Icons'
import { RegisterConfigResolve } from '@/validation/RegisterConfig'
import { Title } from '@/components/Title'
import { useForm } from 'react-hook-form'
import { createConfig } from '@/services/Configuracao.service'
import toast from 'react-hot-toast'
import useUserStore from '@/stores/user.store'

export function FormModalConnectInventory() {
  const {
    user: { steamid, username },
  } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: RegisterConfigResolve,
  })

  async function create(
    email: string,
    linkTrade: string,
    agreedEmails: boolean,
    agreedTerms: boolean,
  ) {
    try {
      const urlSell = `https://rentskins/?sellerid=${steamid}`
      const created = await createConfig({
        owner_id: steamid as string,
        owner_name: username,
        owner_email: email,
        steam_guard: false,
        url_sell: urlSell,
        url_trade: linkTrade,
        agreed_with_emails: agreedEmails,
        agreed_with_terms: agreedTerms,
      })
      return created
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado !')
    }
  }

  async function onSubmit(data: any) {
    const { email, linkTrade, promo, termos } = data

    if (steamid) {
      await create(email, linkTrade, promo, termos)
      toast.success('Configuração criada')
      window.location.reload()
    } else {
      toast.error('Você precisa está logado !')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-11/12 items-start justify-between"
    >
      <div className="flex h-full w-11/12 flex-col gap-7 ">
        <div className="space-y-2">
          {/* CHANGE COLOR */}
          <Title
            bold={500}
            size="lg"
            className="mt-6 text-mesh-color-neutral-200"
          >
            Insira URL Trade Link do seu Perfil
          </Title>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-10/12 rounded-[4px] bg-[#3C403C]">
              <input
                className="h-[42px] w-10/12 rounded-[4px] bg-[#3C403C] px-4 text-base text-mesh-color-neutral-100 outline-none placeholder:text-mesh-color-neutral-100 placeholder:opacity-40"
                autoComplete="off"
                placeholder="https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n"
                {...register('linkTrade')}
              />

              <Button className="absolute right-0 top-1/2 mr-4 h-5 w-5 -translate-y-1/2 border-none">
                <IconClose />
              </Button>
            </div>

            <Button className="border-none text-mesh-color-primary-1400">
              Obter URL
            </Button>
          </div>
          <p className="text-xs text-red-700">
            {errors.linkTrade && errors.linkTrade.message}
          </p>
        </div>
        <div className="mt-[-12px] space-y-2">
          {/* CHANGE COLOR */}
          <Title bold={500} size="lg" className="text-mesh-color-neutral-200">
            Seu email de contato
          </Title>

          <input
            type="email"
            autoComplete="off"
            placeholder="SeuEmail@gmail.com"
            className="h-[42px] w-[40%] rounded-[4px] bg-mesh-color-neutral-500 px-4 text-base text-mesh-color-neutral-100 outline-none placeholder:text-mesh-color-neutral-100 placeholder:opacity-40"
            {...register('email')}
          />
          <p className="text-xs text-red-700">
            {errors.email && errors.email.message}
          </p>
        </div>

        <div className="flex flex-col space-y-2 text-white">
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register('promo')}
              className="h-5 w-5 rounded-[4px] border border-mesh-color-neutral-200 px-0  checked:bg-[#B7E03E]"
            />
            <label htmlFor="" className="ml-2 text-[#A7B0A0]">
              Deseja receber promoções em seu email?
            </label>
          </div>

          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 rounded-[4px] border border-mesh-color-neutral-200 px-0 checked:bg-[#B7E03E]"
                {...register('termos')}
              />
              <label htmlFor="" className="ml-2 text-[#A7B0A0]">
                Eu concordo com os{' '}
                <span className="text-[#B7E03E]">
                  Termos de Serviço, Política de Privacidade e Política de
                  Reembolso da RentSkins.
                </span>
              </label>
            </div>

            <p className="mt-2 text-xs text-red-700">
              {errors.termos && errors.termos.message}
            </p>
          </div>
        </div>
        <Button
          color="gray"
          type="submit"
          className="h-11 w-[40%] border-none bg-[#3C403C] font-bold text-[#979797]"
        >
          Concluir
        </Button>
      </div>
    </form>
  )
}
