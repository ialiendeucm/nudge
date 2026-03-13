export default function Home() {
  const tools = [
    {
      name: "BEAM, Behavioral Message Auditor",
      description:
        "Analyse written messages through the lens of Behavioral Economics and improve clarity, influence, and structure.",
      href: "https://chatgpt.com/g/g-6974f6f3ba148191b31b6f1642c50299-beam-behavioral-message-auditor",
    },
    {
      name: "Nudge Designer",
      description:
        "Generate practical, ethical nudges for organisations, public policy, communication, and behaviour change.",
      href: "https://chatgpt.com/g/g-6994631f29448191b7c487dccbc0ef0d-nudge-designer",
    },
    {
      name: "Causal Lab",
      description:
        "Support causal reasoning, evaluation design, and research-oriented decision frameworks in applied settings.",
      href: "https://chatgpt.com/g/g-6990c1363dc88191bdf3b3b3269d9363-causal-lab",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Behavioral Economics Tools
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              Iñaki Aliende, PhD
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#tools" className="transition hover:text-slate-900">
              Tools
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(51,65,85,0.05),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Research-backed GPT tools
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
                Behavioral Economics tools for communication, nudging, and causal reasoning.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                This site brings together a small suite of GPT-based tools designed to support
                applied work in communication, behaviour change, and analytical reasoning. The
                overall approach combines academic rigour with practical usability.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#tools"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Explore the tools
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
                >
                  Academic profile
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-full rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Current suite
                </p>

                <div className="mt-6 space-y-4">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            0{index + 1}
                          </p>
                          <h3 className="mt-2 text-base font-semibold leading-6">
                            {tool.name}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="border-t border-slate-200 bg-slate-50/70"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Tools
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Three GPTs for applied Behavioral Economics
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Each tool is designed as a practical point of entry into a specific task. Together,
                they form a small but coherent suite that connects behavioral insight, applied
                reasoning, and structured support.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-2xl font-semibold leading-8 tracking-tight">
                    {tool.name}
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                    {tool.description}
                  </p>

                  <div className="mt-8">
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Open GPT
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Academic profile and applied orientation
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                These tools are presented within an academic-professional profile focused on Applied
                Economics, Behavioral Economics, Data Science, and evaluation. Their purpose is not
                only to provide AI support, but also to translate structured reasoning into practical
                use.
              </p>

              <p>
                Developed by Iñaki Aliende, PhD, this suite connects academic rigour with practical
                decision support in communication, behaviour change, and analytical reasoning.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-200 bg-slate-900 text-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  For academic collaboration, training, or applied projects
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                  I am a university lecturer, researcher, and consultant working at the intersection
                  of Applied Economics, Behavioral Economics, and Data Science.
                  <br />
                  My work combines academic rigour with practical applications in communication,
                  evaluation, and decision-making.
                  <br />
                  I develop tools and training initiatives designed to translate analytical insight
                  into real-world use.
                </p>
              </div>

              <a
                href="mailto:ialiende@ucm.es"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Contact by email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}