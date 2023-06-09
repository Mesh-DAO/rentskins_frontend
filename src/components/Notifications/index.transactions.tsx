import Image, { StaticImageData } from 'next/image'
import { Button } from '../Button'
import TransactionsTable from '../Settings/Transactions/table'
import { transactionsMock } from '@/Mock/notification.transaction.mock'
import { ModalNotificationPopup } from '../Modal/ModalNotification/index.popup'

interface IData {
  image: string | StaticImageData
  name: string
  weapon: string
  condition: string
  float: number
  value: number
}

interface IProps {
  data: IData[]
  loading: boolean
}

export default function NotificationsTransactions({ data, loading }: IProps) {
  const renderPending = data.map((item, index) => (
    <div
      key={'pending-' + index}
      className="flex items-center justify-between rounded-lg bg-mesh-color-neutral-800 px-4 py-3 text-white"
    >
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          className="w-28 rounded-lg bg-mesh-color-others-black p-4"
        />
        <div className="group flex h-16 w-64 flex-col justify-center">
          <span
            className="relative top-10 -mb-10 w-fit select-none flex-wrap whitespace-nowrap rounded-lg
          bg-mesh-color-neutral-300 px-2 text-black opacity-0 transition-all group-hover:opacity-100"
          >
            {item.name}
          </span>
          <span
            className={`group w-64 overflow-hidden text-ellipsis text-lg font-medium ${
              item.name.includes('StatTrak') && 'text-mesh-color-secondary-800'
            }`}
          >
            {item.name}
          </span>
          <span className="text-white/40"> {item.weapon} </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span> {item.condition} </span>
          <span className="text-white/40"> {item.float} </span>
        </div>
      </div>
      <span>R${item.value.toFixed(2).replace('.', ',')}</span>
      <div className="flex gap-4">
        <ModalNotificationPopup
          id={index}
          type="accept"
          activator={
            <Button
              className="border-none bg-mesh-color-primary-1200 px-4
              font-semibold text-black"
            >
              Aceitar troca
            </Button>
          }
        />
        <ModalNotificationPopup
          id={index}
          type="cancel"
          activator={
            <Button
              className="border border-mesh-color-neutral-400 px-2 font-semibold
            text-mesh-color-neutral-400"
            >
              Cancelar
            </Button>
          }
        />
      </div>
    </div>
  ))

  return (
    <div>
      <div className="mb-12 mt-4 pr-4">
        <span className="text-lg font-medium text-mesh-color-neutral-200">
          Pendentes
        </span>
        <div
          className="mt-4 flex h-[24rem] w-full scroll-p-24 flex-col gap-4 overflow-y-scroll pr-2"
          data-aos="fade-up"
        >
          {renderPending}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="my-14 h-1 w-full rounded-full bg-mesh-color-others-black-olive"
      />
      <div data-aos="fade-up">
        <div className="grid grid-cols-6 rounded-lg bg-mesh-color-neutral-800 py-2 text-lg font-medium text-mesh-color-neutral-100">
          <span className="text-center">Item</span>
          <span className="text-left">Descrição</span>
          <span className="text-left">Características</span>
          <span className="text-center">Status</span>
          <span className="text-center">Preço</span>
          <span className="text-center">Tipo</span>
        </div>
        <div className="mb-16 mt-4 w-full text-center">
          {<TransactionsTable data={transactionsMock.finished} />}
        </div>
      </div>
    </div>
  )
}
