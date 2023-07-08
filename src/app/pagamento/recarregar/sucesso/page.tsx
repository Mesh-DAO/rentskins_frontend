'use client'
import { CommonButton } from '@/components/Common/CommonButton'
import { CommonTitle } from '@/components/Common/CommonTitle'
import { useRouter } from 'next/navigation'

export default function PaymentAddSuccessPage() {
  const router = useRouter()

  const handleOnContinue = () => {
    router.push('/')
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start bg-mesh-color-others-black text-white">
      <div className="gap- flex h-1/3 flex-col items-center justify-center gap-10">
        <CommonTitle className="w-2/3 text-center" size="2xl" bold={600}>
          Pagamento concluído! Seu saldo foi recarregado com sucesso!
        </CommonTitle>

        <CommonButton
          className="w-2/3 border-transparent bg-mesh-color-primary-1200 py-3 text-xl font-bold text-black"
          onClick={() => handleOnContinue()}
        >
          Continuar
        </CommonButton>
      </div>
    </main>
  )
}
