import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconClose } from '@/components/Icons/IconClose'
import { Title } from '@/components/Title'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { createConfig } from '@/services/Configuracao.service'
import { shortenUrl } from '@/utils/bitli'
import InputCheckBox from '@/components/InputCheckBox'

interface IProps {
  activator: React.ReactNode
}

export function ModalConnectInventario({ activator }: IProps) {
  const [linkTrade, setLinkTrade] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false)
  const [agreedEmails, setAgreedEmails] = useState<boolean>(false)

  async function onSubmit() {
    try {
      const user = localStorage.getItem('user')
      if (user) {
        const findUser = JSON.parse(user)
        const urlTrade = await shortenUrl(
          'https://steamcommunity.com/tradeoffer/new/?partner=1245320150&token=d8vVto9K',
        )
        const urlSell = `https://rentskins-frontend.vercel.app/${findUser.steamid}`
        const urlSellAwait = await shortenUrl(urlSell)

        if (urlTrade && urlSellAwait) {
          const create = await createConfig({
            owner_id: findUser.steamid,
            owner_name: findUser.username,
            owner_email: email,
            steam_guard: false,
            url_sell: urlSellAwait,
            url_trade: urlTrade,
            agreed_with_emails: agreedEmails,
            agreed_with_terms: agreedTerms,
          })
          return create
        }
      }
    } catch (error) {
      console.log(error)
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
                <Button className="border-transparent outline-none">
                  <IconClose />
                </Button>
              </Dialog.Close>
            </div>
            {/* MIDDLE */}
            <div className="flex h-full w-11/12 items-start justify-between">
              <div className="flex h-full w-11/12 flex-col gap-7 ">
                <div className=" space-y-2">
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
                      <Input
                        className="w-10/12  bg-mesh-color-neutral-500 text-base text-mesh-color-neutral-100 placeholder:text-mesh-color-neutral-100"
                        placeHolder="https://steamcommunity.com/tradeoffer/new/?partner=240416830&token=vzAomQ5n"
                        value={linkTrade}
                        onChange={(event) => setLinkTrade(event.target.value)}
                      />
                      <Button
                        className="absolute right-0 top-1/2 mr-4 h-5 w-5 -translate-y-1/2"
                        onClick={() => setLinkTrade('')}
                      >
                        <IconClose />
                      </Button>
                    </div>

                    <Button className="border-none text-mesh-color-primary-1400">
                      Obter URL
                    </Button>
                  </div>
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

                  <Input
                    className="w-1/3 rounded-lg bg-mesh-color-neutral-500 text-base text-mesh-color-neutral-100 placeholder:text-mesh-color-neutral-100"
                    placeHolder="SeuEmail@gmail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-2 text-white">
                  <InputCheckBox
                    label="Deseja receber promoções em seu email?"
                    checked={agreedEmails}
                    onChange={(event: any) =>
                      setAgreedEmails(event.target.checked)
                    }
                  />

                  <InputCheckBox
                    label="Eu concordo com os"
                    label2="Termos de Serviço, Política de Privacidade e Política de Reembolso da RentSkins."
                    checked={agreedTerms}
                    onChange={(event: any) =>
                      setAgreedTerms(event.target.checked)
                    }
                  />
                </div>
                <Button
                  onClick={onSubmit}
                  className="h-11 w-1/4 bg-mesh-color-primary-1400 font-bold text-mesh-color-neutral-300"
                >
                  Concluir
                </Button>
              </div>
            </div>
            {/* DIVISOR */}
            <div />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
