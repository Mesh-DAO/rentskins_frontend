import SkeletonCardSkin from '@/components/SkeletonCardSkin'

export default function AllSkeletonSkins() {
  const skeletonSkins = Array(15).fill(1)
  return (
    <div className="flex flex-wrap gap-4">
      {skeletonSkins.map((_, idx) => (
        <div key={idx}>
          <SkeletonCardSkin />
        </div>
      ))}
    </div>
  )
}
