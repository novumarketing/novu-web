import { Button, Section, WA } from "@/components/ui";

export const metadata = {
  title: "Casos de éxito — NOVU Marketing",
  description: "Casos reales de NOVU: sitios web y marketing que generan resultados, como el sitio institucional de AMEFF.",
};

export default function Casos() {
  return (
    <main>
      <Section kicker="Casos de éxito" title="Trabajo" accent="real, en línea" sub="Lo que decimos, lo demostramos.">
        <div className="grad-border p-10">
          <div className="md:flex md:items-center md:gap-12">
            <div className="grid place-items-center rounded-xl bg-bg p-12 md:w-2/5">
              <div className="font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-[.2em]">AMEFF</div>
              <div className="mt-2 text-xs tracking-[.18em] text-muted">SITIO WEB INSTITUCIONAL</div>
            </div>
            <div className="mt-8 md:mt-0 md:flex-1">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">AMEFF — Asociación Mundial de Eventos y Festivales Folklóricos</h3>
              <p className="mt-4 text-muted">
                Diseño y desarrollo de su sitio institucional: organigrama, líderes, noticias y contacto.
                Incluye dominio propio, hosting con certificado de seguridad y mantenimiento mensual a cargo de NOVU.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full grad-bg" />Sitio responsive publicado en menos de una semana</li>
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full grad-bg" />Infraestructura segura con SSL y respaldos</li>
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full grad-bg" />Actualizaciones mensuales de contenido</li>
              </ul>
              <a href="https://ameff.vercel.app" target="_blank" rel="noopener" className="mt-6 inline-block font-semibold text-blue hover:underline">
                Ver sitio en línea →
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 rounded-3xl border border-dashed border-white/15 p-12 text-center">
          <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-muted">Tu marca puede ser el siguiente caso de éxito</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">Empezamos con una auditoría gratuita de 20 minutos: te decimos exactamente qué mejorar para vender más.</p>
          <div className="mt-7"><Button href={WA} external>Pide tu auditoría gratuita</Button></div>
        </div>
      </Section>
    </main>
  );
}
