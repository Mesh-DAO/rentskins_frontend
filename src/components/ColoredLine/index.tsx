import LitleArrow from '../Icons/LitleArrow'

export default function ColoredLine() {
  return (
    <div className="relative flex items-center rounded-sm">
      <div className="h-[6px] w-6 rounded-l-md bg-[#1E9A04]" />
      <div className="h-[6px] w-9 bg-[#59C675]" />
      <div className="h-[6px] w-10 bg-[#FADE5E]" />
      <div className="h-[6px] w-20 bg-[#E84E6A]" />
      <div className="h-[6px] w-20 rounded-r-md bg-[#CA1733]" />
      <LitleArrow />
    </div>
  )
}