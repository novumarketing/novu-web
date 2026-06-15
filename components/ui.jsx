import Link from "next/link";

export const WA = "https://wa.me/527751238085?text=Hola%2C%20me%20interesa%20agendar%20un%20diagn%C3%B3stico%20de%20conversi%C3%B3n%20para%20mi%20negocio.";

export function Button({ href, children, ghost = false, external = false }) {
  const cls = ghost
    ? "inline-block rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-blue hover:-translate-y-0.5"
    : "inline-block rounded-full grad-bg px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(168,51,245,.35)]";
  return external ? (
    <a href={href} target="_blank" rel="noopener" className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export function Section({ id, kicker, title, accent, sub, children, className = "" }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {kicker && <div className="text-xs font-semibold uppercase tracking-[.25em] text-blue">{kicker}</div>}
        {title && (
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold md:text-4xl">
            {title} {accent && <span className="grad-text">{accent}</span>}
          </h2>
        )}
        {sub && <p className="mt-4 max-w-2xl text-muted">{sub}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`card-hover rounded-2xl border border-white/[.06] bg-card p-7 ${className}`}>
      {children}
    </div>
  );
}
