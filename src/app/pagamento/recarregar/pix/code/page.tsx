'use client'
import { useState } from 'react'
import { LayoutPage } from '@/components/Shared'
import { Button } from '@/components/Button'
import { IconLeftArrow } from '@/components/Icons/iconLeftArrow'
import { Title } from '@/components/Title'
import { useRouter } from 'next/navigation'
import CircleLoading from '@/components/CircleLoading'
import QRCodeExample from '../../../../../../public/qrcode-example.png'
import Image from 'next/image'
import usePaymentStore from '@/stores/payment.store'

export default function PaymentAddPixCodePage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { paymentAdd } = usePaymentStore()

  const handleOnSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    router.push('/pagamento/recarregar/sucesso')
  }

  const handleOnCancel = () => {
    router.push('/')
  }

  const textAreaValue =
    '00020101021226860014br.gov.bcb.pix2564qrpix.bradesco.com.br/qr/v2/46477fb7-d638-46d4-9f4d-f154c3ab5d7b5204000053039865406700.735802BR5925PAGBRASIL PAGAMENTOS LTDA6012PORTO ALEGRE62090505131196304CA18'

  return (
    <LayoutPage>
      {/* CHANGE COLOR */}
      <main className="flex h-screen flex-col items-center justify-start bg-[#151714] text-white">
        <CircleLoading
          label="Processando..."
          enabled={isLoading}
          className="flex h-2/3 items-center justify-center"
        >
          <div className="mx-auto mt-8 flex w-fit flex-col">
            <div className="mb-8 flex w-full items-center justify-start">
              <Button className="border-none" onClick={() => handleOnCancel()}>
                <IconLeftArrow />
              </Button>
              {/* CHANGE COLOR */}
              <span className="ml-2 text-[#A7B0A0]">
                <text>Saldo </text>
                <text>• </text>
                {/* CHANGE COLOR */}
                <text className="text-[#49E671]">Pagamento - PIX</text>
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center">
              <Title size="2xl">
                Digitalize o código QR usando o aplicativo da <br />
                carteira/banco
              </Title>
              <div className="mt-4">
                <Image src={QRCodeExample} alt="QRCode" width={150} />
                <div className="mt-8 h-1/3">
                  <Title bold={600} size="lg">
                    Ou cole o código alternativo no aplicativo para concluir o
                    pagamento
                  </Title>
                  {/* CHANGE COLOR */}
                  <textarea
                    readOnly={true}
                    className="focus:outline-pink-500n h-36 max-h-36 w-full resize-none overflow-hidden rounded-md
                    border-2 border-[#778258] bg-[#222723] px-3 py-3 text-black text-white/70"
                  >
                    {textAreaValue}
                  </textarea>
                </div>
                <div className="mt-8 flex justify-between text-xl font-semibold">
                  <text>Total:</text>
                  {/* CHANGE COLOR */}
                  <span className="text-mesh-color-primary-800">
                    R${paymentAdd.value?.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* CHANGE COLOR */}
                <div className="flex flex-col gap-4 text-xl font-semibold">
                  <Button
                    type="submit"
                    onClick={(event) => handleOnSubmit(event)}
                    className="w-full border-[#A6CF2B] bg-[#A6CF2B] py-2 text-black disabled:border-mesh-color-neutral-500 disabled:bg-mesh-color-neutral-500 disabled:text-[#979797]"
                  >
                    Pagar
                  </Button>
                  <Button
                    className="w-full border-2 py-2"
                    onClick={() => handleOnCancel()}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CircleLoading>
      </main>
    </LayoutPage>
  )
}
