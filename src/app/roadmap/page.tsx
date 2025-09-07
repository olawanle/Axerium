const phases = [
  {
    title: "Phase 1 — Community",
    items: [
      "Launch waitlist and referral program",
      "Publish whitepaper and tokenomics",
      "Early community quests",
    ],
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Phase 2 — Testnet",
    items: [
      "Public testnet with faucets and dashboards",
      "Developer grants",
      "Ecosystem partners onboarding",
    ],
    color: "from-sky-400 to-sky-600",
  },
  {
    title: "Phase 3 — Mainnet",
    items: [
      "Genesis distribution",
      "Listings and ecosystem growth",
      "Governance rollout",
    ],
    color: "from-fuchsia-400 to-fuchsia-600",
  },
];

export default function RoadmapPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-2xl" />
      <div className="container mx-auto px-4 py-14">
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Roadmap</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our path from community to mainnet, delivered in transparent phases.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-10">
            {phases.map((phase, idx) => (
              <li key={phase.title} className="relative">
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r ${phase.color}`} />
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:ml-1/2 md:pl-8" : "md:pr-8"}`}>
                  <div className={`inline-block rounded-md bg-gradient-to-r ${phase.color} text-transparent bg-clip-text`}> 
                    <h2 className="text-xl font-semibold">{phase.title}</h2>
                  </div>
                  <ul className="mt-3 list-disc pl-6 text-muted-foreground space-y-1">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


