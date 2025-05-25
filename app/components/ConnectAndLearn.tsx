import { Button } from '@/app/components/ui/button'
import { Card, CardContent } from '@/app/components/ui/card'

export default function ConnectAndLearn() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Connect Card */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Illustration placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div className="text-orange-600 text-sm">Connect</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Connect with people who can help
                  </h3>
                  <Button variant="outline" className="w-full">
                    Find people you know
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learn Card */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Illustration placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="text-blue-600 text-sm">Learn</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Learn the skills you need to succeed
                  </h3>
                  <Button variant="outline" className="w-full">
                    Choose a topic to learn about
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
