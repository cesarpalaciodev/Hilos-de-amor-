import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
        Error 404
      </span>
      <h1 className="font-serif text-7xl font-light text-forest">404</h1>
      <p className="mt-4 text-[15px] text-forest/40">
        Página no encontrada
      </p>
      <div className="mt-4 h-[1px] w-8 bg-gold/20" />
      <Link
        href="/"
        className="mt-8 rounded-full bg-christmas-red px-8 py-3.5 text-sm font-medium text-cream transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light active:scale-[0.98]"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
