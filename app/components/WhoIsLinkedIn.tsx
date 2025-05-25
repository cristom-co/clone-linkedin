import { Card, CardContent } from '@/app/components/ui/card'

export default function WhoIsLinkedIn() {
  const useCases = [
    'Find a coworker or classmate',
    'Find a new job',
    'Find a course or training'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
                Who is LinkedIn for?
              </h2>
              <p className="text-gray-600">
                Anyone looking to navigate their professional life.
              </p>
            </div>

            <div className="space-y-3">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors group">
                  <span className="text-gray-700 group-hover:text-blue-600">{useCase}</span>
                  <span className="text-gray-400 group-hover:text-blue-600">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-orange-200 rounded-lg opacity-60" />
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-80" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-200 rounded opacity-70" />

              {/* Main illustration placeholder */}
              <div className="relative z-10 flex items-center justify-center h-64">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-gray-600 text-sm">Professional Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
