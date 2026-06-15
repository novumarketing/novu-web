import Link from "next/link";
import { Button, Section, Card, WA } from "@/components/ui";

const servicios = [
  ["📱", "Gestión de redes sociales", "Estrategia, calendario, publicación y community management en Instagram, TikTok y Facebook."],
  ["🎬", "Creación de contenido", "Reels, diseño gráfico, copywriting y sesiones de foto y video orientadas a conversión."],
  ["🎯", "Publicidad pagada", "Campañas en Meta Ads y Google Ads: segmentación, creativos y optimización semanal."],
  ["🌐", "Branding y sitios web", "Identidad visual, landing pages y sitios institucionales que captan y convierten."],
];

const pasos = [
  ["Auditoría gratuita", "Diagnóstico de 20 minutos de tu presencia digital con 3 mejoras accionables."],
  ["Propuesta clara", "Una página: qué haremos, qué cuesta y qué resultados esperar."],
  ["Manos a la obra", "Contenido y campañas corriendo la primera semana de trabajo."],
  ["Resultados medibles", "Reportes claros cada mes: lo que funciona se escala, lo que no se ajusta."],
];

export default function Home() {
  return (
    <main>
      <header className="relative overflow-hidden py-28 text-center">
        <div className="blob left-[-120px] top-[-160px] h-[420px] w-[420px] bg-blue" />
        <div className="blob bottom-[-180px] right-[-120px] h-[420px] w-[420px] bg-purple" />
        <div className="mx-auto max-w-4xl px-6">
          <div className="fade-up text-xs font-semibold uppercase tracking-[.3em] text-blue">Agencia de marketing digital</div>
          <h1 className="fade-up-1 mt-5 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-tight md:text-6xl">
            Hacemos visibles a las marcas que <span className="grad-text">merecen crecer</span>
          </h1>
          <p className="fade-up-2 mx-auto mt-6 max-w-xl text-lg text-muted">
            Estrategia, contenido creativo y datos para convertir tu presencia digital en ventas reales. Sin jerga, sin humo: resultados medibles cada mes.
          </p>
          <div className="fade-up-3 mt-9 flex flex-wrap justify-center gap-4">
            <Button href={WA} external>Pide tu auditoría gratuita</Button>
            <Button href="/servicios" ghost>Ver servicios</Button>
          </div>
        </div>
      </header>

      <Section kicker="Servicios" title="Cuatro servicios," accent="una sola meta: crecer"
        sub="Todo lo que tu negocio necesita para destacar en digital, bajo un mismo techo.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(([icon, t, d]) => (
            <Card key={t}>
              <div aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full grad-bg text-xl">{icon}</div>
              <h3 className="mt-5 font-[family-name:var(--font-poppins)] font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/servicios" className="font-semibold text-blue hover:underline">Ver servicios y paquetes completos →</Link>
        </div>
      </Section>

      <Section kicker="Casos de éxito" title="Trabajo" accent="real, en línea" sub="Lo que decimos, lo demostramos." className="pt-0">
        <div className="grad-border p-10 md:flex md:items-center md:gap-10">
          <div className="grid place-items-center rounded-xl bg-bg p-10 md:w-1/3">
            <div className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-[.2em]">AMEFF</div>
            <div className="mt-2 text-xs tracking-[.18em] text-muted">SITIO WEB INSTITUCIONAL</div>
          </div>
          <div className="mt-8 md:mt-0 md:flex-1">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold">AMEFF — Asociación Mundial de Eventos y Festivales Folklóricos</h3>
            <p className="mt-3 text-muted">Sitio institucional con dominio propio, hosting seguro y mantenimiento mensual a cargo de NOVU.</p>
            <Link href="/casos" className="mt-4 inline-block font-semibold text-blue hover:underline">Conocer el caso →</Link>
          </div>
        </div>
      </Section>

      <Section kicker="Proceso" title="Así trabajamos" accent="contigo" sub="Simple, rápido y transparente — arrancamos en días, no meses." className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map(([t, d], i) => (
            <Card key={t}>
              <div className="grid h-10 w-10 place-items-center rounded-full grad-bg font-bold">{i + 1}</div>
              <h3 className="mt-4 font-[family-name:var(--font-poppins)] font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/[.06] bg-card px-8 py-16 text-center">
          <div className="blob left-[-100px] top-[-120px] h-[300px] w-[300px] bg-blue opacity-20" />
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold md:text-4xl">
            El siguiente paso es <span className="grad-text">empezar.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Pide tu auditoría digital gratuita — en 20 minutos te decimos exactamente qué mejorar para vender más.
          </p>
          <div className="mt-8"><Button href={WA} external>Escríbenos por WhatsApp</Button></div>
        </div>
      </Section>
    </main>
  );
}
