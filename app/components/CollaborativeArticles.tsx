import { Badge } from '@/app/components/ui/badge'

export default function CollaborativeArticles() {
  const topics = [
    'Marketing', 'Public Administration', 'Healthcare', 'Engineering',
    'IT Services', 'Sustainability', 'Business Administration',
    'Telecommunications', 'HR Management'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
              Explore collaborative articles
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We&apos;re unlocking community knowledge in a new way. Experts add insights directly
              into each article, started with the help of AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {topic}
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
