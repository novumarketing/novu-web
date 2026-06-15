import { Button, Section, Card, WA } from "@/components/ui";

export const metadata = {
  title: "Servicios y paquetes — NOVU Marketing",
  description: "Cuatro servicios — redes sociales, contenido, publicidad pagada y sitios web — y planes mensuales desde $7,000 MXN. Elige el nivel que tu negocio necesita y escala cuando estés listo.",
};

const servicios = [
  ["📱", "Gestión de redes sociales", "Nos volvemos tu equipo de redes: estrategia mensual, calendario de contenido, publicación, respuesta a comentarios y mensajes. Tu marca activa todos los días, sin que tú pierdas tiempo.", "El servicio ancla del plan mensual"],
  ["🎬", "Creación de contenido", "Reels que la gente sí ve, diseño gráfico alineado a tu marca, textos que venden y sesiones de foto/video. Todo pensado para convertir, no solo para verse bonito.", "Lo que diferencia a NOVU visualmente"],
  ["🎯", "Publicidad pagada", "Campañas en Meta Ads y Google Ads con segmentación fina, creativos probados y optimización semanal. Cada peso invertido se rastrea hasta el resultado.", "El acelerador de resultados"],
  ["🌐", "Branding y sitios web", "Identidad visual completa, landing pages y sitios institucionales con dominio, hosting seguro y mantenimiento. Como el que hicimos para AMEFF.", "Proyectos puntuales con cotización a la medida"],
];

const planes = [
  { n: "PRESENCIA", p: "$7,000", hot: false, f: "Para empezar con orden", items: ["12 publicaciones al mes", "2 redes sociales", "Diseño gráfico incluido", "Reporte mensual de resultados"] },
  { n: "CRECIMIENTO", p: "$14,000", hot: true, f: "El paquete recomendado", items: ["20 publicaciones + 8 reels", "3 redes sociales", "Gestión de Meta Ads", "Reporte quincenal + reunión"] },
  { n: "DOMINIO", p: "$25,000+", hot: false, f: "Para dominar el mercado", items: ["Contenido completo + video", "Ads en Meta y Google", "Email marketing y landing", "Estratega dedicado semanal"] },
];

export default function Servicios() {
  return (
    <main>
      <Section kicker="Servicios" title="Todo para crecer," accent="bajo un mismo techo"
        sub="Cuatro servicios que se combinan según lo que tu negocio necesita hoy.">
        <div className="grid gap-6 md:grid-cols-2">
          {servicios.map(([icon, t, d, foot]) => (
            <Card key={t}>
              <div className="flex items-start gap-5">
                <div aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full grad-bg text-xl">{icon}</div>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{d}</p>
                  <p className="mt-3 text-xs italic text-blue">{foot}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section kicker="Paquetes" title="Planes mensuales," accent="claros y sin sorpresas"
        sub="Elige el nivel que necesita tu negocio hoy y escala cuando estés listo." className="pt-0">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {planes.map(({ n, p, hot, f, items }) => (
            <div key={n} className={`relative flex flex-col rounded-2xl p-8 ${hot ? "grad-border" : "border border-white/[.06] bg-card"}`}>
              {hot && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full grad-bg px-4 py-1 text-[11px] font-bold tracking-widest">MÁS POPULAR</div>}
              <div className={`text-xs font-bold tracking-[.18em] ${hot ? "text-magenta" : "text-blue"}`}>{n}</div>
              <div className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-extrabold">{p} <span className="text-sm font-medium text-muted">MXN /mes</span></div>
              <div className="mt-1 text-sm italic text-muted">{f}</div>
              <ul className="mt-6 flex-1 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="h-3 w-3 shrink-0 rounded-full grad-bg" />{it}
                  </li>
                ))}
              </ul>
              <div className="mt-7"><Button href={WA} external ghost={!hot}>Empezar</Button></div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm italic text-muted">Sitios web y proyectos de branding se cotizan por separado, a la medida de cada proyecto. Precios sin IVA.</p>
      </Section>
    </main>
  );
}
