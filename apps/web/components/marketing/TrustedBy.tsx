const logos = ["Vercel", "Linear", "Stripe", "Railway", "Supabase", "Resend"]

export default function TrustedBy() {
  return (
    <section className="border-b border-border py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by engineering teams building at scale
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {logos.map((name) => (
            <span
              key={name}
              className="font-mono text-sm font-medium text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
