import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allocations = [
  { label: "Community", percent: 50, from: "from-emerald-400", to: "to-emerald-600" },
  { label: "Contributors (4y vest)", percent: 20, from: "from-fuchsia-400", to: "to-fuchsia-600" },
  { label: "Treasury", percent: 20, from: "from-sky-400", to: "to-sky-600" },
  { label: "Liquidity & Partnerships", percent: 10, from: "from-amber-400", to: "to-amber-600" },
];

export default function TokenomicsPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-2xl" />

      <div className="container mx-auto px-4 py-14 space-y-10">
        <div className="space-y-3 text-center">
          <Badge>AXR</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Axerium Tokenomics</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for long-term sustainability and community ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">1,000,000,000</div>
              <div className="text-xs text-muted-foreground">AXR</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Initial Circulating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">8%</div>
              <div className="text-xs text-muted-foreground">At TGE</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Emission Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">Linear 4y</div>
              <div className="text-xs text-muted-foreground">Contributor vesting</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Community Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">50%</div>
              <div className="text-xs text-muted-foreground">Airdrops, incentives</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Allocations</h2>
          <div className="space-y-3">
            {allocations.map((a) => (
              <div key={a.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{a.label}</span>
                  <span className="font-medium">{a.percent}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${a.from} ${a.to}`}
                    style={{ width: `${a.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li>Community distribution happens via waitlist, quests, and ecosystem incentives.</li>
              <li>Contributor allocation vests linearly over four years after a standard cliff.</li>
              <li>Treasury is governed by the community with transparent reporting.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


