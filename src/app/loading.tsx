export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-forest/20 border-t-forest" />
        <p className="text-sm text-forest/60">Cargando...</p>
      </div>
    </div>
  )
}
