import React from 'react'
import { createConfig } from '@/services/Configuracao.service'
// ----------------- LIBS ----------------
import * as Dialog from '@radix-ui/react-dialog'
import { toast } from 'react-hot-toast'
// ----------------- COMPONENTS ----------------
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import LocalStorage from '@/tools/localstorage.tool'
import { useForm } from 'react-hook-form'
import { RegisterConfigResolve } from '@/validation/RegisterConfig'
import JsonWebToken from '@/tools/jsonwebtoken.tool'

interface IProps {
  activator: React.ReactNode
}

export function ModalConnectInventario({ activator }: IProps) {
  const token = LocalStorage.get('token')
  const tokenWeb = JsonWebToken.verify(token)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: RegisterConfigResolve,
  })

  async function create(
    steamid: string,
    username: string,
    email: string,
    linkTrade: string,
    agreedEmails: boolean,
    agreedTerms: boolean,
  ) {
    try {
      const urlSell = `https://rentskins/?sellerid=${steamid}`
      const created = await createConfig({
        owner_id: steamid,
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

    if (tokenWeb) {
      const { steamid, username }: any = tokenWeb
      await create(steamid, username, email, linkTrade, promo, termos)
      toast.success('Configuração criada')
      window.location.reload()
    } else {
      toast.error('Você precisa está logado !')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{activator}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex bg-black/70" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2
        rounded-2xl bg-mesh-color-neutral-700"
        >
          <div className="flex h-full w-full flex-col items-center justify-between py-8">
            {/* TOP */}
            <div className="flex w-11/12 items-center justify-between">
              <Dialog.Title>
                <Title bold={800} size="2xl" color="white">
                  Conectar Inventário à Steam
                </Title>
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button className="border-none">
                  <IconClose />
                </Button>
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
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
                    <div className="relative w-10/12 rounded-lg bg-mesh-color-neutral-500">
                      <input
                        className="h-[42px] w-10/12 rounded-[12px] bg-mesh-color-neutral-500 px-4 text-base text-mesh-color-neutral-100 outline-none placeholder:text-mesh-color-neutral-100"
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
                  <Title
                    bold={500}
                    size="lg"
                    className="text-mesh-color-neutral-200"
                  >
                    Seu email de contato
                  </Title>

                  <input
                    type="email"
                    placeholder="SeuEmail@gmail.com"
                    className="h-[42px] w-1/3 rounded-[12px] bg-mesh-color-neutral-500 px-4 text-base text-mesh-color-neutral-100 outline-none placeholder:text-mesh-color-neutral-100"
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
                      className="h-5 w-5 rounded-[4px] border border-mesh-color-neutral-200 px-0 checked:bg-[#B7E03E]"
                    />
                    <label htmlFor="" className="ml-2">
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
                      <label htmlFor="" className="ml-2">
                        Eu concordo com os Termos de Serviço, Política de
                        Privacidade e Política de Reembolso da RentSkins.
                      </label>
                    </div>

                    <p className="mt-2 text-xs text-red-700">
                      {errors.termos && errors.termos.message}
                    </p>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="h-11 w-1/4 bg-mesh-color-primary-1400 font-bold text-mesh-color-neutral-300"
                >
                  Concluir
                </Button>
              </div>
            </form>
            {/* DIVISOR */}
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
