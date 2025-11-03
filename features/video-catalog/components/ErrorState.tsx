import { AlertCircle, RotateCcw } from 'lucide-react'

type ErrorStateProps = {
  onRetry?: () => void
}

export function ErrorState({ onRetry }: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-red-500" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Что-то пошло не так
        </h2>

        <p className="text-gray-600 text-center mb-8 max-w-md">
            Не удалось загрузить видео. Пожалуйста, проверьте соединение с интернетом
            и попробуйте ещё раз.
        </p>

        {onRetry && (
            <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
            <RotateCcw className="w-4 h-4" />
            Повторить попытку
            </button>
        )}
        </div>
    )
}