import { navItems } from "../data/siteData.js";

const visibleNavItems = navItems.filter((item) => item.id !== "reservation");

export default function Header({ activePage, onNavigate }) {
  return (
    <header className="sticky top-0 z-30 border-b border-fine-border bg-linen/94 px-5 py-4 backdrop-blur md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="group flex items-center gap-3 text-left"
        >
          <span className="grid size-12 place-items-center rounded-full border border-cedar/45 text-cedar transition-colors group-hover:border-moss group-hover:text-moss">
            <svg viewBox="0 0 42 42" aria-hidden="true" className="size-8 fill-none stroke-current">
              <circle cx="21" cy="21" r="13" strokeWidth="1.4" />
              <path d="M14 20c.8-5.4 5.3-8.2 7-8.2s6.2 2.8 7 8.2" strokeWidth="1.4" />
              <path d="M15.2 15.2c-2-3.6-5.5-4-6.3-1.3-.7 2.4 1.3 4.8 4.3 5.5M26.8 15.2c2-3.6 5.5-4 6.3-1.3.7 2.4-1.3 4.8-4.3 5.5" strokeWidth="1.4" />
              <path d="M16.5 24.5c2.2 2 6.8 2 9 0M18 20.8h.1M24 20.8h.1" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span>
            <span className="block font-serif text-[1.35rem] leading-tight text-walnut">
              森音チンチラカフェ
            </span>
            <span className="block text-[0.68rem] font-semibold tracking-[0.24em] text-cedar">
              MORINE CHINCHILLA CAFE
            </span>
          </span>
        </button>
        <nav className="hidden items-center gap-7 text-sm text-walnut/72 lg:flex">
          {visibleNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`relative py-3 transition-colors hover:text-moss ${
                activePage === item.id ? "text-moss after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-moss" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => onNavigate("reservation")}
          className="motion-arrow rounded-card border border-moss bg-moss px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(102,113,90,0.2)] transition-colors hover:bg-walnut"
        >
          予約する
        </button>
      </div>
      <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 text-sm text-walnut/70 lg:hidden">
        {visibleNavItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`shrink-0 rounded-full border px-3 py-1.5 transition-colors ${
              activePage === item.id
                ? "border-moss bg-moss text-white"
                : "border-fine-border bg-white/30"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
