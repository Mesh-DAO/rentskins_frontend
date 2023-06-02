import { Title } from "../Title";
import Image from "next/image";
import TransactionsTable from "./TransactionsTable";

export function SettingsTransactions() {
  return(
        <div className="w-2/3 flex flex-col gap-8">
        {/* Top */}
          <div className="bg-mesh-dark-1 py-6 rounded-2xl flex flex-col gap-10">
            <Title bold={700} size={"2xl"} color="white" className="px-4">Transações</Title>

            <table className="w-full text-center select-none">
              <thead className="px-4">
                <tr>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Item
                  </th>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Descrição
                  </th>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Arma
                  </th>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Preço
                  </th>
                  <th className="px-4 py-2 text-center text-lg font-medium text-[#A7B0A0] tracking-wider">
                    Tipo
                  </th>
                </tr>
              </thead>
              {<TransactionsTable />}
            </table>
          </div>
        </div>
  )
}