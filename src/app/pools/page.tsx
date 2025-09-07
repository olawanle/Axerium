import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pools = [
  { name: "F2Pool", fee: "2.5%", payout: "PPS", regions: "US/EU/ASIA" },
  { name: "ViaBTC", fee: "2%", payout: "PPS+", regions: "Global" },
  { name: "Antpool", fee: "2%", payout: "PPS+", regions: "Global" },
];

export default function PoolsPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Mining Pools</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {pools.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>Fee: {p.fee}</div>
              <div>Payout: {p.payout}</div>
              <div>Regions: {p.regions}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


