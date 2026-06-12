import { Button, Section, Card, WA } from "@/components/ui";

export const metadata = { title: "Contacto — NOVU Marketing" };

const faqs = [
  ["¿Qué incluye la auditoría gratuita?", "Revisamos tus redes y presencia digital en 20 minutos y te entregamos 3 mejoras accionables, con o sin contrato. Sin compromiso."],
  ["¿Hay plazos forzosos?", "No. Los planes son mensuales y se renuevan si estás viendo resultados. Así de simple."],
  ["¿Trabajan fuera de mi ciudad?", "Sí — todo el proceso es digital: reuniones por videollamada y comunicación directa por WhatsApp."],
  ["¿Qué necesito para empezar?", "Solo tus accesos de redes y 30 minutos para la reunión de arranque. Del resto nos encargamos nosotros."],
];

export default function Contacto() {
  return (
    <main>
      <Section kicker="Contacto" title="El siguiente paso es" accent="empezar."
        sub="Pide tu auditoría digital gratuita — en 20 minutos te decimos exactamente qué mejorar para vender más.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grad-border p-9 text-center">
            <div className="text-4xl">💬</div>
            <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-lg font-semibold">WhatsApp (recomendado)</h3>
            <p className="mt-2 text-sm text-muted">Respuesta el mismo día, de lunes a sábado.</p>
            <div className="mt-6"><Button href={WA} external>Escríbenos ahora</Button></div>
          </div>
          <Card className="p-9 text-center">
            <div className="text-4xl">✉️</div>
            <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-lg font-semibold">Correo</h3>
            <p className="mt-2 text-sm text-muted">Para propuestas formales y facturación.</p>
            <a href="mailto:novumarketing03@gmail.com" className="mt-6 inline-block font-semibold text-blue hover:underline">
              novumarketing03@gmail.com
            </a>
          </Card>
        </div>
      </Section>

      <Section kicker="Preguntas frecuentes" title="Antes de" accent="escribirnos" className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <Card key={q}>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-muted">{a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
