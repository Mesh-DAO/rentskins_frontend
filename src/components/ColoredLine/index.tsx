import LitleArrow from '../Icons/LitleArrow'

export default function ColoredLine() {
  return (
    <div className="relative flex items-center rounded-sm">
      <div className="h-[6px] w-6 rounded-l-md bg-mesh-color-rarity-highest" />
      <div className="h-[6px] w-9 bg-mesh-color-rarity-high" />
      <div className="h-[6px] w-10 bg-mesh-color-rarity-medium" />
      <div className="h-[6px] w-20 bg-mesh-color-rarity-low" />
      <div className="h-[6px] w-20 rounded-r-md bg-mesh-color-rarity-lowest" />
      <LitleArrow />
    </div>
  )
}
