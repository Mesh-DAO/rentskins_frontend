import { Title } from "../Title";
import TransactionsTable from "./TransactionsTable";

export function SettingsTransactions() {
  return (
    <div className="flex w-2/3 flex-col gap-8">
      {/* Top */}
      <div className="flex flex-col gap-10 rounded-2xl bg-mesh-dark-1 py-6">
        <Title bold={700} size={"2xl"} color="white" className="px-4">
          Transações
        </Title>

        <table className="w-full select-none text-center">
          <thead className="px-4">
            <tr>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Item
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Descrição
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Arma
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Status
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Preço
              </th>
              <th className="px-4 py-2 text-center text-lg font-medium tracking-wider text-[#A7B0A0]">
                Tipo
              </th>
            </tr>
          </thead>
          {<TransactionsTable />}
        </table>
      </div>
    </div>
  );
}
