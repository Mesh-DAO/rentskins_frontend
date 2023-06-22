import Image, { StaticImageData } from 'next/image'

interface IData {
  image: StaticImageData
  name: string
  weapon: string
  condition: string
  float: number
  value: number
  status: string
  type: string
}

interface IProps {
  data: IData[]
}

export default function TransactionsTable({ data }: IProps) {
  const treatStatus = (status: string) => {
    const generateElement = (className: string) => {
      return (
        <div>
          <span className={'rounded-full px-4 py-2 ' + className}>
            {status}
          </span>
        </div>
      )
    }

    switch (status) {
      case 'Concluído':
        return generateElement(
          'bg-mesh-color-rarity-high/10 text-mesh-color-rarity-high',
        )
      case 'Em andamento':
        return generateElement(
          'bg-mesh-color-rarity-medium/10 text-mesh-color-rarity-medium',
        )
      case 'Falhou':
        return generateElement(
          'bg-mesh-color-rarity-low/10 text-mesh-color-rarity-low',
        )
    }
  }

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={
            'mb-4 grid grid-cols-6 items-center rounded-lg py-4 odd:bg-mesh-color-neutral-800 even:bg-mesh-color-neutral-900'
          }
        >
          <div className="flex items-center justify-center">
            <Image
              src={item.image}
              alt="Image"
              draggable={false}
              className="w-28"
            />
          </div>
          <div className="group text-start">
            <p
              className="relative -top-12 -mb-10 w-fit select-none flex-wrap
            whitespace-nowrap rounded-lg bg-mesh-color-neutral-300 px-2 opacity-0
            transition-all group-hover:opacity-100"
            >
              {item.name}
            </p>
            <p
              className={`group w-52 overflow-hidden text-ellipsis text-lg 
            font-medium ${
              item.name.includes('StatTrak')
                ? 'text-mesh-color-secondary-800'
                : 'text-white'
            } `}
            >
              {item.name}
            </p>
            <p className="text-mesh-color-neutral-300 "> {item.weapon} </p>
          </div>
          <div className="w-48 text-start">
            <p className="text-lg font-medium text-white">{item.condition}</p>
            <p className="text-mesh-color-neutral-300">{item.float}</p>
          </div>
          {treatStatus(item.status)}
          <div className="text-white">
            R${item.value.toFixed(2).replace('.', ',')}
          </div>
          <div className="text-white"> {item.type} </div>
        </div>
      ))}
    </div>
  )
}
