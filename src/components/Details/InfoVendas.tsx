import { Button } from "../Button";
import { Arrow2 } from "../Icons/Arrow2";
import { Title } from "../Title";

export function InfoVendas() {
  return (
    <div className="mt-8 min-h-[484px] w-[700px] min-w-[742px] rounded-lg border-2 border-[#3E423A]">
      <div className="p-4">
        <Title color="white" className="text-[28px] font-bold">
          Últimas vendas
        </Title>
        <div className="mt-4 space-y-6">
          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">30 Jun 2021 • 4:30H</Title>
            <span className="text-dark-lime-green">R$840</span>
          </div>

          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">29 Jun 2021 • 23:21H</Title>
            <span className="text-dark-lime-green">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">29 Jun 2021 • 23:21H</Title>
            <span className="text-dark-lime-green">R$832,21</span>
          </div>

          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-dark-lime-green">R$792</span>
          </div>

          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-dark-lime-green">R$792</span>
          </div>

          <div className="flex justify-between border-b border-[#3E423A] pb-2">
            <Title color="cinza">27 Jun 2021 • 9:59H</Title>
            <span className="text-dark-lime-green">R$792</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end space-x-4">
          <Button
            className="flex border-none text-end
          "
          >
            <Arrow2 />
          </Button>
          <Button className="flex rotate-180 items-end border-none text-end">
            <Arrow2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
