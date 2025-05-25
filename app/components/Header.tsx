import { Button } from '@/app/components/ui/button'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Articles
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              People
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Learning
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Jobs
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Games
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Join now
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
