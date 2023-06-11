import FormDropzone from '@/components/Forms/Dropzone'

export function PaymentWithdrawStepDocument() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <FormDropzone label="Adicione a sua identidade (Frente) - CNH ou RG" />
      <FormDropzone label="Adicione a sua identidade (Verso) - CNH ou RG" />
    </div>
  )
}
