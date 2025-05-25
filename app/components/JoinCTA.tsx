import { Button } from '@/app/components/ui/button'

export default function JoinCTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-light text-white">
            Join your colleagues, classmates, and friends on LinkedIn.
          </h2>

          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
            Get started
          </Button>
        </div>
      </div>
    </section>
  )
}
