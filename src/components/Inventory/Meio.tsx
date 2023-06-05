import { Button } from '../Button'
import { Title } from '../Title'

export function Meio() {
  return (
    <div className="min-h-[1000px]">
      <div className="mx-auto w-[60%] rounded-xl bg-[#222723] px-5 py-5">
        <Title color="white" className="text-center font-bold">
          Para ter acesso às suas skins e realizar transações, é necessário
          vincular seu inventário à Steam
        </Title>
        <Button className="mt-4 h-10 w-full rounded-xl bg-[#95BC1E] font-semibold text-black opacity-100">
          Conectar-se
        </Button>
      </div>
    </div>
  )
}
