import { Button } from '@/app/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Explore jobs and grow your network
            </h1>

            <div className="space-y-4">
              <div className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium">
                  Sign in with email
                </Button>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                By clicking Continue to join or sign in, you agree to LinkedIn&apos;s{' '}
                <button className="text-blue-600 hover:underline">User Agreement</button>,{' '}
                <button className="text-blue-600 hover:underline">Privacy Policy</button>, and{' '}
                <button className="text-blue-600 hover:underline">Cookie Policy</button>.
              </p>

              <p className="text-sm text-gray-600">
                New to LinkedIn?{' '}
                <button className="text-blue-600 hover:underline font-medium">Join now</button>
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-200 rounded-lg opacity-60" />
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-blue-200 rounded-full opacity-80" />
              <div className="absolute top-1/2 right-8 w-8 h-8 bg-green-200 rounded opacity-70" />

              {/* Main illustration placeholder */}
              <div className="relative z-10 flex items-center justify-center h-64">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">👤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
