import { Metadata } from "next"
import Link from "next/link"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales de Hilos de Amor.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream px-4 py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl font-light text-forest">
          Política de Privacidad
        </h1>
        <div className="mt-4 h-[1px] w-16 bg-gradient-to-r from-gold/30 to-transparent" />
        
        <p className="mt-8 text-sm text-forest/50">
          Última actualización: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-forest/70">
          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              <strong>{site.name}</strong><br />
              Correo: {site.email}<br />
              Sitio web: https://www.{site.domain}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              2. Datos que recopilamos
            </h2>
            <p>
              No recopilamos datos personales directamente. Solo utilizamos servicios de terceros:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Google Analytics (GA4):</strong> Recopila datos anónimos de navegación (páginas visitadas, tiempo en el sitio, país de origen). No recopila nombres, correos ni información que identifique personalmente al usuario.
              </li>
              <li>
                <strong>Meta Pixel:</strong> Recopila datos de interacción para campañas publicitarias de Facebook e Instagram.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos recopilados a través de Google Analytics y Meta Pixel se utilizan exclusivamente para:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Analizar el tráfico del sitio web</li>
              <li>Mejorar la experiencia de navegación</li>
              <li>Medir el rendimiento de campañas publicitarias</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              4. Cookies
            </h2>
            <p>
              Utilizamos cookies propias y de terceros para fines analíticos. Al navegar por este sitio, aceptas el uso de cookies. Puedes desactivarlas en la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              5. Base legal
            </h2>
            <p>
              La base legal para el tratamiento de datos es el consentimiento del usuario, otorgado al aceptar el banner de cookies o al continuar navegando en el sitio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              6. Conservación de datos
            </h2>
            <p>
              Los datos recopilados por Google Analytics se conservan durante 14 meses. Los datos de Meta Pixel se conservan según la configuración de tu cuenta de Meta.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              7. Tus derechos
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, escríbenos a: {site.email}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-forest mb-3">
              8. Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página.
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="text-sm text-forest/40 transition-colors hover:text-forest/70"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
