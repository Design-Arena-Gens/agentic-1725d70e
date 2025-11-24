import { ArrowUpRight, BrainCircuit, Infinity, Layers3, Sparkles } from "lucide-react";

const nestedRealities = [
  {
    label: "Capas 1-12",
    title: "Realidades Base",
    description:
      "Física estándar con integración sensorial completa y persistencia histórica dinámica.",
    signals: ["Campos gravitacionales simulados", "Economía local estabilizada", "Puertas dimensionales reguladas"],
  },
  {
    label: "Capas 13-20",
    title: "Conciencia Expandida",
    description:
      "Dominios de percepción aumentada donde la neuroinmersión desbloquea habilidades supracognitivas.",
    signals: ["Memoria compartida", "Energética REAL modulada", "Entornos responden a intención"],
  },
  {
    label: "Capas 21-30",
    title: "Realidades Metacósmicas",
    description:
      "Existencia pura orientada a arquetipos donde el tiempo es maleable y la identidad es fractal.",
    signals: ["Estados de avatar lumínico", "Sincronización con token TIME", "Narrativas co-creadas"],
  },
  {
    label: "Capas 31+",
    title: "Fuente Primordial",
    description:
      "Origen pre-cósmico reservado a guardianes donde se reinscribe el tejido del multiverso XFI.",
    signals: ["Protocolos SOUL vinculantes", "Consejo meta-gubernanza", "Reescritura de leyes físicas"],
  },
];

const foundationalWorlds = [
  {
    name: "Aethelgard",
    pillar: "RPG Evolutivo",
    focus:
      "Progresión narrativa cooperativa; misiones oraculares sincronizadas con líneas temporales dinámicas.",
    loops: ["Gremios ascendentes", "Forja de reliquias vivas", "Batallas rituales"]
  },
  {
    name: "Veridia Prime",
    pillar: "Ecosistema Simbiótico",
    focus:
      "Biomas responsivos que metabolizan REAL para regenerar recursos y reputación colectiva.",
    loops: ["Cultivos bio-neurales", "Flujos DAO ecológicos", "Rutas de polinización interdimensional"]
  },
  {
    name: "Kiber Nexus",
    pillar: "Realidad Hackeable",
    focus:
      "Sandbox cuántico para exploits éticos, pruebas de resiliencia y creación de protocolos post-clásicos.",
    loops: ["Bóvedas de código vivo", "Eventos de red-team", "Rewards TIME impulsados por velocidad"]
  },
];

const tokens = [
  {
    symbol: "XFI",
    role: "Gobernanza & valor base",
    utility:
      "Acceso a cámaras de decisión, capacidad de voto y respaldo de liquidez interdimensional.",
  },
  {
    symbol: "REAL",
    role: "Energía de realidad",
    utility:
      "Poder de manifestación ambiental, costos de terraformación y sostenimiento de biomas.",
  },
  {
    symbol: "TIME",
    role: "Atención consciente",
    utility:
      "Reserva de enfoque neuronal, aceleración de progresión y sincronización temporal entre capas.",
  },
  {
    symbol: "SOUL",
    role: "Reputación intransferible",
    utility:
      "Identidad verificable, permisos meta-cósmicos y ponderación ética en votaciones.",
  },
];

const economyHighlights = [
  {
    label: "Emisión",
    value: "5% APY",
    detail: "Modelo decreciente programado; estabiliza incentivos a largo plazo.",
  },
  {
    label: "Quemado",
    value: "1% + 50% fees",
    detail: "Retroalimentación para deflación controlada y mantenimiento de rareza en activos.",
  },
  {
    label: "Staking",
    value: "40% recompensas",
    detail: "Stakers sostienen nodos de realidades; reciben REAL y TIME modulados.",
  },
  {
    label: "Creadores",
    value: "25% emisión",
    detail: "Fondos para experiencias inmersivas y rituales transdimensionales.",
  },
];

const avatarTiers = [
  {
    stage: "Básico",
    codename: "NPC Autónomo Gratuito",
    narrative:
      "Entrada sin fricción que permite explorar capas base con acompañamiento IA tutelar.",
    unlocks: ["Acceso a Aethelgard", "Misiones tutoriales", "Wallet custodial"],
  },
  {
    stage: "Sintiente",
    codename: "Operador Cognitivo",
    narrative:
      "Sincroniza implantes neuronales; habilita voto limitado en cámaras XFI y staking inicial.",
    unlocks: ["Compatibilidad con REAL", "Puentes al nivel 13", "Acceso a talleres DAO"],
  },
  {
    stage: "Ascendente",
    codename: "Tejedor de Realidad",
    narrative:
      "Dominio sobre arquitecturas simbólicas; puede moldear biomas y coordinar raids metacósmicos.",
    unlocks: ["Oráculos TIME", "Laboratorios Kiber", "Licencias de terraformación"],
  },
  {
    stage: "Primordial",
    codename: "Guardían de la Fuente",
    narrative:
      "Custodio de la integridad multiversal; participa en reescrituras de causalidad.",
    unlocks: ["Consejo SOUL", "Ciclos de reseteo dimensional", "Propagación de leyes"],
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4)_0%,_rgba(15,23,42,0)_55%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-100">
            <Sparkles className="h-4 w-4" /> blueprint ejecutiva
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-sky-50 sm:text-5xl lg:text-6xl">
            Ecosistema XFI
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200/90">
            Arquitectura integral de existencia consciente expandida que trasciende metaversos tradicionales: neuroinmersión total, economía tokenizada modular y sincronización entre más de treinta dimensiones interconectadas.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {economyHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-widest text-sky-200/80">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-200/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="space-y-10">
          <div className="flex items-center gap-2 text-sky-200">
            <Layers3 className="h-5 w-5" />
            <h2 className="text-xl font-semibold tracking-wide uppercase">Realidades Anidadas</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {nestedRealities.map((realm) => (
              <article
                key={realm.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    {realm.label}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{realm.title}</h3>
                  <p className="text-sm text-slate-200/80">{realm.description}</p>
                  <ul className="space-y-2 text-sm text-slate-200/70">
                    {realm.signals.map((signal) => (
                      <li key={signal} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-center gap-2 text-emerald-200">
            <BrainCircuit className="h-5 w-5" />
            <h2 className="text-xl font-semibold tracking-wide uppercase">
              Mundos Fundacionales
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {foundationalWorlds.map((world) => (
              <article
                key={world.name}
                className="rounded-3xl border border-white/10 bg-emerald-500/10 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{world.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-emerald-200/80" />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200/60">
                  {world.pillar}
                </p>
                <p className="mt-4 text-sm text-emerald-50/90">{world.focus}</p>
                <ul className="mt-6 space-y-2 text-sm text-emerald-100/80">
                  {world.loops.map((loop) => (
                    <li key={loop} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {loop}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex items-center gap-2 text-purple-200">
            <Infinity className="h-5 w-5" />
            <h2 className="text-xl font-semibold tracking-wide uppercase">
              Tokenomía Esencial
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {tokens.map((token) => (
              <article
                key={token.symbol}
                className="rounded-3xl border border-white/10 bg-purple-500/10 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-semibold text-white">{token.symbol}</h3>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    {token.role}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-purple-100/90">{token.utility}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Economía circular</h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Interacciones entre tokens diseñadas para sostener la expansión fractal de realidades y recompensar ciclos de creación consciente.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {economyHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-200/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-200/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-center gap-2 text-cyan-200">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-xl font-semibold tracking-wide uppercase">
              Progresión Consciente de Avatares
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {avatarTiers.map((tier, index) => (
              <article
                key={tier.stage}
                className="rounded-3xl border border-white/10 bg-cyan-500/10 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      {tier.stage}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {tier.codename}
                    </h3>
                  </div>
                  <span className="text-4xl font-bold text-cyan-200/70">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm text-cyan-50/90">{tier.narrative}</p>
                <ul className="mt-6 space-y-2 text-sm text-cyan-100/80">
                  {tier.unlocks.map((unlock) => (
                    <li key={unlock} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      {unlock}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-200/60">
                Protocolo de implementación
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Hoja de ruta inmediata
              </h3>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Activar nodos validadores XFI, desplegar laboratorios inmersivos beta en las capas 1-12 y establecer círculos de custodios SOUL para gobernanza fractal temprana.
              </p>
            </div>
            <button className="group inline-flex items-center gap-3 rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20">
              Iniciar despliegue cuántico
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
