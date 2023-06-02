import { Card } from '@/components/Details'
import { InfoSkin } from '@/components/Details/InfoSkin'

export default function Details() {
  return (
    <main className="w-full bg-jet-black">
      <div className="mx-auto flex w-10/12 ">
        <Card />
        <InfoSkin />
      </div>
    </main>
  )
}
