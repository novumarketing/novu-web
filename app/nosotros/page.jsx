import { Button, Section, Card, WA } from "@/components/ui";

export const metadata = {
  title: "Nosotros — NOVU Marketing",
  description: "Conoce a NOVU y a Mauricio Flores: marketing de boutique para negocios locales, con trato directo, reportes claros y resultados medibles.",
  openGraph: { description: "NOVU es marketing de boutique: trato directo con el fundador, reportes claros y foco en resultados de negocio." },
  twitter: { description: "NOVU: marketing de boutique con trato directo y resultados medibles." },
};

const valores = [
  ["Resultados, no likes", "Cada acción se mide contra un objetivo de negocio: leads, ventas, reservas."],
  ["Cercanía total", "Un solo punto de contacto, reportes claros y comunicación directa."],
  ["Creatividad con datos", "El contenido se diseña y se optimiza según lo que los números dicen."],
  ["Agilidad de boutique", "Sin burocracia de agencia grande: arrancamos en días, no meses."],
];

export default function Nosotros() {
  return (
    <main>
      <Section kicker="Nosotros" title="Quién está detrás de" accent="NOVU">
        <div className="grad-border p-10 md:flex md:items-center md:gap-12">
          <div className="relative mx-auto h-44 w-44 shrink-0 rounded-full grad-bg p-1 md:mx-0">
            <div className="grid h-full w-full place-items-center rounded-full bg-card2 font-[family-name:var(--font-poppins)] text-5xl font-extrabold text-muted">MF</div>
            {/* Foto: coloca public/mauricio.jpg y descomenta:
            <img src="/mauricio.jpg" alt="Mauricio Flores" className="absolute inset-1 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-full object-cover" /> */}
          </div>
          <div className="mt-8 text-center md:mt-0 md:text-left">
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">Mauricio Flores — Fundador</h3>
            <p className="mt-4 text-muted">
              Creé NOVU con una idea simple: los negocios locales merecen el mismo nivel de marketing que las grandes marcas,
              sin pagar estructuras infladas ni perderse en reportes que nadie entiende.
            </p>
            <p className="mt-3 text-muted">
              Trabajas directamente conmigo: una sola persona que conoce tu negocio, responde tu WhatsApp y te habla claro
              sobre qué está funcionando y qué no.
            </p>
          </div>
        </div>
      </Section>

      <Section kicker="Filosofía" title="Lo que nos hace" accent="diferentes" className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2">
          {valores.map(([t, d], i) => (
            <Card key={t}>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full grad-bg font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm text-muted">{d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center"><Button href={WA} external>Platiquemos de tu negocio</Button></div>
      </Section>
    </main>
  );
}
