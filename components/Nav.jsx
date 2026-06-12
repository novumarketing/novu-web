import Link from "next/link";

const links = [
  ["Servicios", "/servicios"],
  ["Casos", "/casos"],
  ["Nosotros", "/nosotros"],
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/[.06] bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-lg font-extrabold tracking-[.3em]">
          <span className="grid h-9 w-9 place-items-center rounded-lg grad-bg tracking-normal">N</span>
          NOVU
        </Link>
        <div className="hidden gap-7 md:flex">
          {links.map(([t, h]) => (
            <Link key={h} href={h} className="text-sm font-medium text-muted transition hover:text-white">{t}</Link>
          ))}
        </div>
        <Link href="/contacto" className="rounded-full grad-bg px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5">
          Hablemos
        </Link>
      </div>
    </nav>
  );
}
