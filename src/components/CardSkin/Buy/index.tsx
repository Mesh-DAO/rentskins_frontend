import { Button } from '@/components/Button'
import IconCart from '@/assets/Cart'

export default function Buy() {
  return (
    <div className="flex gap-2">
      <Button color="invisible" className="h-10 w-10 border-2">
        <IconCart />
      </Button>
      <Button className="border-transparent bg-mesh-color-neutral-500 px-4">
        Comprar
      </Button>
    </div>
  )
}
