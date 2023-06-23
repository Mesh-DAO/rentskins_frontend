import LitleArrow from '../Icons/LitleArrow'

interface IProps {
  isSkeleton?: boolean
}

export default function ColoredLine({ isSkeleton = true }: IProps) {
  return (
    <div className="relative flex w-full items-center rounded-sm">
      <div className="h-[6px] w-[10%] rounded-l-md bg-[#1E9A04]" />
      <div className="h-[6px] w-[13%] bg-[#59C675]" />
      <div className="h-[6px] w-[17%] bg-[#FADE5E]" />
      <div className="h-[6px] w-[30%] bg-[#E84E6A]" />
      <div className="h-[6px] w-[30%] rounded-r-md bg-[#CA1733]" />
      {isSkeleton && <LitleArrow />}
    </div>
  )
}
