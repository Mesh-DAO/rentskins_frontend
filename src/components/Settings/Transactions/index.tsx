import { Title } from '../../Title'
import TransactionsTable from './table'
import { weaponsMock } from './transactions.mock'

export function SettingsTransactions() {
  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="flex flex-col gap-10 rounded-2xl bg-mesh-color-neutral-800 py-6">
        <Title bold={700} size={'2xl'} color="white" className="px-4">
          Transações
        </Title>

        <table className="w-full select-none text-center">
          <thead className="px-4">
            <tr>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Item
              </th>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Descrição
              </th>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Arma
              </th>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Status
              </th>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Preço
              </th>
              <th className="text-center text-lg font-medium tracking-wider text-mesh-color-neutral-200">
                Tipo
              </th>
            </tr>
          </thead>
          {<TransactionsTable data={weaponsMock} />}
        </table>
      </div>
    </div>
  )
}
