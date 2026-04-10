import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Orbit</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
          Now in public beta
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Build faster.<br />Ship with confidence.
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-10">
          Orbit gives your team the tools to move quickly without breaking things. Collaborate, iterate, and deploy — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="px-8">Start for free</Button>
          <Button size="lg" variant="outline" className="px-8">See how it works</Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Everything you need</h2>
          <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
            A complete platform for modern teams — no duct tape required.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to launch?</h2>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          Join thousands of teams already building with Orbit.
        </p>
        <Button size="lg" className="px-10">Get started free</Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Orbit. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "⚡",
    title: "Lightning fast",
    description: "Optimized infrastructure that scales with your team without slowing you down.",
  },
  {
    icon: "🔒",
    title: "Secure by default",
    description: "End-to-end encryption and role-based access control out of the box.",
  },
  {
    icon: "🤝",
    title: "Real-time collaboration",
    description: "Work together seamlessly — see changes as they happen, live.",
  },
  {
    icon: "📊",
    title: "Powerful analytics",
    description: "Understand what's happening with clear, actionable dashboards.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    description: "Connect to the tools you already use with one-click integrations.",
  },
  {
    icon: "🛠️",
    title: "Developer friendly",
    description: "A robust API and CLI so you can automate anything.",
  },
];
