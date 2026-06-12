import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[.06] py-10 text-center text-sm text-muted">
      <div className="font-[family-name:var(--font-poppins)] font-bold tracking-[.3em] text-white">N O V U</div>
      <div className="mt-2">© 2026 NOVU Marketing · Agencia de marketing digital</div>
      <div className="mt-3 flex justify-center gap-6">
        <Link href="/servicios" className="hover:text-white">Servicios</Link>
        <Link href="/casos" className="hover:text-white">Casos</Link>
        <Link href="/contacto" className="hover:text-white">Contacto</Link>
      </div>
    </footer>
  );
}
