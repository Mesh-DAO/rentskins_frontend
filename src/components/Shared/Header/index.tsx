import { BottomHeader } from './BottomHeader'
import { TopHeader } from './TopHeader'

export default function Header() {
  return (
    <nav className="w-full bg-mesh-color-others-black">
      <TopHeader />
      <div className="border-b border-t border-mesh-color-neutral-500">
        <BottomHeader />
      </div>
    </nav>
  )
}
