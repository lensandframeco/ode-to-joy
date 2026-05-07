interface TimelineItemProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function TimelineItem({ number, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#FC0606] text-white flex items-center justify-center flex-shrink-0">
          <span>{number}</span>
        </div>
        {!isLast && <div className="w-0.5 h-full bg-red-200 mt-2"></div>}
      </div>
      <div className={`${!isLast ? 'pb-12' : ''}`}>
        <h3 className="mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  )
}
