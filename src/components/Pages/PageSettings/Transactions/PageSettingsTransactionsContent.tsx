import Common from '@/components/Common'
import { weaponsMock } from '@/mock/transactions.mock'
import Pages from '../..'

export function PageSettingsTransactionsContent() {
  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="flex flex-col gap-10 rounded-2xl bg-mesh-color-neutral-800 py-6">
        <Common.Title bold={700} size={'2xl'} color="white" className="px-4">
          Transações
        </Common.Title>

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
          {<Pages.Settings.Transactions.Table data={weaponsMock} />}
        </table>
      </div>
    </div>
  )
}
