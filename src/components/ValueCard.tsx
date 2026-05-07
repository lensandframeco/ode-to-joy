import { LucideIcon } from 'lucide-react'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#FC0606]" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}
