import Modal from '@/components/Modal'
import { ButtonHTMLAttributes, ElementType } from 'react'

type ModalType = {
  action: 'accept' | 'decline'
  id: string | number
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: 'opaque' | 'full'
  icon?: ElementType
  text?: string | number
  modal: boolean
  modalOptions?: ModalType
  onClick?: () => void
}

export function TransactionButton({
  icon: Icon,
  buttonStyle,
  modal = false,
  text,
  onClick,
  modalOptions,
  ...rest
}: IProps) {
  const withModal = (
    <Modal.Notification.Popup
      id={modalOptions?.id}
      type={modalOptions?.action}
      activator={
        <button
          onClick={onClick}
          {...rest}
          className={`w-full rounded-md px-4 py-2 opacity-60 transition-all hover:opacity-100 ${
            buttonStyle === 'full' &&
            'border border-mesh-color-primary-1200 bg-mesh-color-primary-1200 font-semibold text-mesh-color-others-black'
          } ${
            buttonStyle === 'opaque' &&
            'border border-mesh-color-neutral-500 bg-transparent text-mesh-color-neutral-300'
          }`}
        >
          {text}
          {Icon && <Icon />}
        </button>
      }
    />
  )

  const withoutModal = (
    <button onClick={onClick} {...rest}>
      {text}
      {Icon && <Icon />}
    </button>
  )

  return <>{modal ? withModal : withoutModal}</>
}
