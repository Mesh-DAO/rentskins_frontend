import LitleArrow from "../Icons/LitleArrow"

export default function ColoredLine() {
  return (
    <div className="flex items-center rounded-sm relative">
      <div className="h-[6px] w-6 bg-[#1E9A04] rounded-l-md" />
      <div className="h-[6px] w-9 bg-[#59C675]" />
      <div className="h-[6px] w-10 bg-[#FADE5E]" />
      <div className="h-[6px] w-20 bg-[#E84E6A]" />
      <div className="h-[6px] w-20 bg-[#CA1733] rounded-r-md" />
      <LitleArrow />
    </div>
  )
}