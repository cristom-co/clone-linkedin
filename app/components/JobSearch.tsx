import { Badge } from '@/app/components/ui/badge'

export default function JobSearch() {
  const jobCategories = [
    'Engineering', 'Business Development', 'Finance', 'Administrative Assistant',
    'Retail Associate', 'Customer Service', 'Operations', 'Information Technology',
    'Marketing', 'Human Resources', 'Healthcare Service', 'Sales',
    'Program and Project Management', 'Accounting', 'Arts and Design',
    'Community and Social Services', 'Consulting', 'Education'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
              Find the right job or internship for you
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {jobCategories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors bg-white"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
