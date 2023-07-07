import Form from '@/components/Forms'
import { Title } from '@/components/Title'
import { MouseEventHandler } from 'react'

interface IProps {
  handleFormSubmit: MouseEventHandler
  handleFormCancel: MouseEventHandler
}
export function PaymentWithdrawStepDocument({
  handleFormSubmit,
  handleFormCancel,
}: IProps) {
  // const [fileFront, setFileFront] = useState(null)
  // const [fileBack, setFileBack] = useState(null)

  // console.log(fileFront)

  // const validateForm = () => {
  //   return !(fileFront !== null && fileBack !== null)
  // }

  return (
    <div className="">
      <text className="text-sm text-mesh-color-neutral-200">Quarta etapa</text>
      <Title size={'lg'} bold={600}>
        Documentos
      </Title>
      <text className="text-sm">
        Por favor, envie a foto frente e verso da sua identidade, CNH ou PDF
        para que possamos verificar suas informações pessoais. Essa etapa é
        importante para garantir a segurança da plataforma e dos usuários.
      </text>

      <Form.Root className="mt-6 flex flex-col gap-4">
        <Form.Dropzone
          label="Você pode subir arquivos PNG, JPEG ou PDF"
          subLabel="Adicione sua identidade (Frente)"
        />
        <Form.Dropzone
          label="Você pode subir arquivos PNG, JPEG ou PDF"
          subLabel="Adicione sua identidade (Verso)"
        />

        <div className="mt-4">
          <div className="flex justify-between text-xl font-semibold">
            <text>Levantamento:</text>

            <span className="text-mesh-color-primary-800">
              {Number(0).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex flex-col gap-4 text-xl font-semibold">
            <Form.Button
              buttonStyle="full"
              type="submit"
              className="h-12 w-full border-transparent"
              onClick={handleFormSubmit}
              // disabled={validateForm()}
            >
              Continuar
            </Form.Button>
            <Form.Button
              buttonStyle="opaque"
              className="h-12 w-full border-neutral-600"
              onClick={handleFormCancel}
            >
              Cancelar
            </Form.Button>
          </div>
        </div>
      </Form.Root>
    </div>
  )
}
