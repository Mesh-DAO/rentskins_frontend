import { weaponsMock } from './transactions.mock'
import weaponMockImage from '../../../assets/deagle.png'
import Image from 'next/image'

export default function TransactionsTable() {
  const treatIndex = (index: number) => {
    if (index % 2 === 0) {
      return 'bg-transparent'
    } else {
      return 'bg-mesh-color-others-black'
    }
  }

  const treatStatus = (status: string) => {
    const generateElement = (className: string) => {
      return (
        <td className="">
          <span className={'rounded-full px-4 py-2 ' + className}>
            {status}
          </span>
        </td>
      )
    }

    switch (status) {
      // CHANGE COLOR!
      case 'Concluído':
        return generateElement(
          'bg-mesh-color-rarity-high/10 text-mesh-color-rarity-high',
        )
      // CHANGE COLOR!
      case 'Em andamento':
        return generateElement(
          'bg-mesh-color-rarity-medium/10 text-mesh-color-rarity-medium',
        )
      // CHANGE COLOR!
      case 'Falhou':
        return generateElement(
          'bg-mesh-color-rarity-low/10 text-mesh-color-rarity-low',
        )
    }
  }

  return (
    <tbody>
      {weaponsMock.map((weapon, index) => (
        <tr key={index} className={treatIndex(index)}>
          <td className="flex justify-center">
            {' '}
            <Image
              src={weaponMockImage}
              alt="Image"
              width={128}
              draggable={false}
            />{' '}
          </td>
          <td className="text-white"> {weapon.descricao} </td>
          <td className="text-white"> {weapon.arma} </td>
          {treatStatus(weapon.status)}
          <td className="text-white">
            {' '}
            R${weapon.preco.toFixed(2).replace('.', ',')}{' '}
          </td>
          <td className="text-white"> {weapon.tipo} </td>
        </tr>
      ))}
    </tbody>
  )
}
