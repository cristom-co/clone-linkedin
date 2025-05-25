export default function OpenToWork() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
              Let the right people know you&apos;re open to work
            </h2>
            <p className="text-gray-600">
              With the Open To Work feature, you can privately tell recruiters or publicly
              share with the LinkedIn community that you are looking for new job opportunities.
            </p>
          </div>

          {/* Right Side - Mobile Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone screen content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">in</span>
                      </div>
                      <div>
                        <div className="w-24 h-3 bg-gray-200 rounded mb-1" />
                        <div className="w-16 h-2 bg-gray-100 rounded" />
                      </div>
                    </div>

                    <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xs font-medium">#OpenToWork</span>
                    </div>

                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-100 rounded" />
                      <div className="w-3/4 h-2 bg-gray-100 rounded" />
                      <div className="w-5/6 h-2 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-100 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
