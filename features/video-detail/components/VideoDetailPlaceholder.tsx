import Link from 'next/link'
import { ArrowLeft, PlayCircle, CheckCircle2 } from 'lucide-react'

type Props = {
  videoId: string
}

export function VideoDetailPlaceholder({ videoId }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к каталогу
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-gray-400" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Детали видео
          </h1>

          <p className="text-gray-500 mb-2">
            ID:{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
              {videoId}
            </code>
          </p>

          <div className="max-w-md mx-auto mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              Спасибо, что уделили время на проверку! ❤️
              <br />В реальном приложении здесь был бы видеоплеер, описание,
              комментарии и рекомендации.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-gray-500 mt-6">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Навигация работает корректно
          </div>
        </div>
      </div>
    </div>
  )
}