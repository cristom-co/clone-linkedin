import { Badge } from '@/app/components/ui/badge'

export default function SoftwareTools() {
  const softwareCategories = [
    'E-Commerce Platforms', 'CRM Software', 'Human Resources Management Systems',
    'Recruiting Software', 'Sales Intelligence Software', 'Project Management Software',
    'Help Desk Software', 'Social Networking Software', 'Desktop Publishing Software'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
              Discover the best software tools
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Connect with buyers who have first-hand experience to find the best products for you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {softwareCategories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Show all
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
