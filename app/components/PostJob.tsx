import { Button } from '@/app/components/ui/button'

export default function PostJob() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
            Post your job for millions of people to see
          </h2>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
            Post a job
          </Button>
        </div>
      </div>
    </section>
  )
}
