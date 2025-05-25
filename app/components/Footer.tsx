export default function Footer() {
  const generalLinks = [
    'Sign Up', 'Help Center', 'About', 'Press', 'Blog', 'Careers', 'Developers'
  ]

  const browseLinks = [
    'Learning', 'Jobs', 'Games', 'Salary', 'Mobile'
  ]

  const businessLinks = [
    'Talent', 'Marketing', 'Sales', 'Learning'
  ]

  const directoriesLinks = [
    'Members', 'Jobs', 'Companies', 'Featured', 'Learning', 'Posts', 'Articles', 'Schools', 'News', 'News Letters', 'Services', 'Products', 'Advice', 'People Search'
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* General */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">General</h3>
            <ul className="space-y-2">
              {generalLinks.map((link) => (
                <li key={link}>
                  <button className="text-sm text-gray-600 hover:text-gray-900 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse LinkedIn */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Browse LinkedIn</h3>
            <ul className="space-y-2">
              {browseLinks.map((link) => (
                <li key={link}>
                  <button className="text-sm text-gray-600 hover:text-gray-900 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Business Solutions</h3>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link}>
                  <button className="text-sm text-gray-600 hover:text-gray-900 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Directories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Directories</h3>
            <ul className="space-y-2">
              {directoriesLinks.slice(0, 8).map((link) => (
                <li key={link}>
                  <button className="text-sm text-gray-600 hover:text-gray-900 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">in</span>
              </div>
              <span className="text-sm text-gray-600">LinkedIn Corporation © 2025</span>
            </div>

            <div className="flex flex-wrap items-center space-x-4 text-xs text-gray-500">
              <button className="hover:text-gray-700">About</button>
              <button className="hover:text-gray-700">Accessibility</button>
              <button className="hover:text-gray-700">User Agreement</button>
              <button className="hover:text-gray-700">Privacy Policy</button>
              <button className="hover:text-gray-700">Cookie Policy</button>
              <button className="hover:text-gray-700">Copyright Policy</button>
              <button className="hover:text-gray-700">Brand Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
