export function Button({ children, variant = "primary", onClick, className = "" }) {
  const styles =
    variant === "primary"
      ? "border-moss bg-moss text-white shadow-[0_10px_24px_rgba(102,113,90,0.18)] hover:bg-walnut"
      : "border-fine-border bg-linen/70 text-walnut hover:border-moss hover:bg-white/70 hover:text-moss";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`motion-arrow inline-flex min-h-11 items-center justify-center rounded-card border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-cafe ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cedar">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl text-walnut md:text-[2.6rem]">{title}</h2>
      {children ? <p className="mt-4 text-sm leading-7 text-walnut/70">{children}</p> : null}
    </div>
  );
}

export function Hero({ eyebrow, title, lead, image, imageAlt, children }) {
  return (
    <section className="relative isolate min-h-[430px] overflow-hidden border-b border-fine-border bg-[linear-gradient(105deg,#f5f0e8_0%,#f5f0e8_42%,rgba(245,240,232,0.82)_58%,rgba(245,240,232,0)_76%)] md:min-h-[520px]">
      <img
        className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center md:w-[62%]"
        src={image}
        alt={imageAlt}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f5f0e8_0%,rgba(245,240,232,0.95)_36%,rgba(245,240,232,0.48)_64%,rgba(245,240,232,0.12)_100%)]" />
      <div className="mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-16 md:min-h-[520px] md:px-10 lg:px-16">
        <div className="animate-hero-in max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cedar">
            {eyebrow}
          </p>
          <h1 className="whitespace-pre-line font-serif text-[2.55rem] leading-[1.24] text-walnut md:text-[3rem] lg:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-walnut/76 md:text-lg">{lead}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function ImageCard({ image, title, children, meta }) {
  return (
    <article className="motion-card overflow-hidden rounded-card border border-fine-border bg-white/48">
      {image ? (
        <img className="aspect-[4/3] w-full object-cover" src={image} alt="" loading="lazy" />
      ) : null}
      <div className="p-5">
        {meta ? <p className="mb-2 text-xs tracking-[0.18em] text-cedar">{meta}</p> : null}
        <h3 className="font-serif text-2xl text-walnut">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-walnut/70">{children}</p>
      </div>
    </article>
  );
}

export function PageShell({ testId, children }) {
  return (
    <main data-testid={testId} className="animate-page-in">
      {children}
    </main>
  );
}

export function Band({ children, className = "" }) {
  return <section className={`px-5 py-16 md:px-10 lg:px-16 ${className}`}>{children}</section>;
}

export function InteriorPanel({ children, className = "" }) {
  return (
    <div className={`rounded-card border border-fine-border bg-white/42 shadow-[0_18px_45px_rgba(45,41,37,0.06)] ${className}`}>
      {children}
    </div>
  );
}
