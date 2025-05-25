import { Badge } from '@/app/components/ui/badge'

export default function Games() {
  const games = ['Pinpoint', 'Queens', 'Crossclimb', 'Tango', 'Zip']

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
              Keep your mind sharp with games
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Take a break and reconnect with your network through quick daily games.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {games.map((game) => (
              <Badge
                key={game}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors bg-white"
              >
                {game}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
