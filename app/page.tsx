const services = [
  {
    title: "Product Strategy",
    description:
      "Clarify the core offer, user journey, and launch roadmap before a single pixel ships.",
  },
  {
    title: "Web Design & Build",
    description:
      "Responsive websites with refined interfaces, fast performance, and a memorable brand feel.",
  },
  {
    title: "AI-Powered Tools",
    description:
      "Custom automations, internal dashboards, and AI workflows that make teams move faster.",
  },
];

const projects = [
  "Studio launch systems",
  "AI workflow assistants",
  "Premium portfolio websites",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We map the goals, audience, and opportunities worth building around.",
  },
  {
    step: "02",
    title: "Design",
    description: "We shape a sharp visual direction and turn it into clear product flows.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop, polish, and launch with performance and maintainability in mind.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06070a] text-white">
      <section className="relative px-6 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(48,209,182,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(244,180,72,0.12),transparent_30%),linear-gradient(180deg,#06070a_0%,#0b1118_55%,#06070a_100%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-[0.24em] text-white">
            KHARHY STUDIO
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/68 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#process">
              Process
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-24 pt-20 md:grid-cols-[1.05fr_0.95fr] md:pb-32 md:pt-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              Premium digital studio for ambitious teams
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              Kharhy Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Building digital products, websites, and AI-powered tools.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100"
              >
                Start a project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-200/50 hover:bg-white/5"
              >
                View work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-teal-300/10 blur-3xl" />
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-[1.3rem] border border-white/10 bg-[#101820] p-5">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Studio dashboard</p>
                    <p className="mt-1 text-xl font-semibold">Launch readiness</p>
                  </div>
                  <div className="rounded-full bg-emerald-300/15 px-3 py-1 text-sm font-medium text-emerald-200">
                    Live
                  </div>
                </div>
                <div className="space-y-4">
                  {["Brand system", "Website build", "AI workflow"].map((item, index) => (
                    <div
                      className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                      key={item}
                    >
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="font-medium text-white">{item}</span>
                        <span className="text-white/45">{88 + index * 4}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-300 to-amber-200"
                          style={{ width: `${88 + index * 4}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {["Fast", "Sharp", "Useful"].map((label) => (
                    <div className="rounded-2xl bg-white/[0.04] px-3 py-4" key={label}>
                      <p className="text-sm font-semibold">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Strategy, design, and engineering in one focused studio.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-teal-200/35"
                key={service.title}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Digital work built to feel polished and practical.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {projects.map((project) => (
                <article
                  className="min-h-56 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.025] p-6"
                  key={project}
                >
                  <div className="mb-16 h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-200 to-amber-200" />
                  <h3 className="text-lg font-semibold">{project}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Concept, interface, build, and launch support for high-trust digital
                    experiences.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            Process
          </p>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {process.map((item) => (
              <article className="grid gap-5 py-8 md:grid-cols-[0.18fr_0.32fr_0.5fr]" key={item.step}>
                <p className="font-mono text-sm text-teal-200">{item.step}</p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="max-w-2xl leading-7 text-white/62">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Have an idea worth turning into a premium digital product?
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/64">
                Let us shape the product, website, or AI tool your next stage needs.
              </p>
            </div>
            <a
              href="mailto:hello@kharhystudio.com"
              className="inline-flex items-center justify-center rounded-full bg-teal-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              hello@kharhystudio.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
