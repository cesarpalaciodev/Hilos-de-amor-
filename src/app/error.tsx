"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl font-light text-forest mb-4">
          Algo salió mal
        </h1>
        <p className="text-forest/60 mb-8">
          {error.message || "Ocurrió un error inesperado"}
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-christmas-red px-8 py-3 text-cream transition-all hover:bg-christmas-red-light active:scale-95"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
