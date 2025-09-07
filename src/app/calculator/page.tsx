"use client";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

async function fetchBtcUsd(): Promise<number | null> {
  try {
    const res = await fetch("/api/price", { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.btcUsd ?? null;
  } catch {
    return null;
  }
}

export default function CalculatorPage() {
  const [hashrateTh, setHashrateTh] = useState(100);
  const [powerW, setPowerW] = useState(3000);
  const [electricityUsdPerKwh, setElectricityUsdPerKwh] = useState(0.1);
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  useEffect(() => {
    fetchBtcUsd().then(setBtcPrice);
  }, []);

  const { dailyRevenueUsd, dailyCostUsd, dailyProfitUsd } = useMemo(() => {
    // Simplified estimation: assume network difficulty is constant and 1 TH/s earns X BTC/day.
    // For demo purposes we use a placeholder coefficient.
    const btcPerDayPerTh = 0.0000035; // not accurate, just to make UI functional
    const btcPerDay = hashrateTh * btcPerDayPerTh;
    const revenueUsd = (btcPrice ?? 0) * btcPerDay;
    const kwhPerDay = (powerW * 24) / 1000;
    const costUsd = kwhPerDay * electricityUsdPerKwh;
    return {
      dailyRevenueUsd: revenueUsd,
      dailyCostUsd: costUsd,
      dailyProfitUsd: revenueUsd - costUsd,
    };
  }, [hashrateTh, powerW, electricityUsdPerKwh, btcPrice]);

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <div className="space-y-2">
        <Badge>Calculator</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Profitability</h1>
        <p className="text-muted-foreground">Quick estimate based on hashrate, power and electricity cost.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Hashrate (TH/s)</Label>
              <Input type="number" value={hashrateTh} onChange={(e) => setHashrateTh(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Power (W)</Label>
              <Input type="number" value={powerW} onChange={(e) => setPowerW(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Electricity ($/kWh)</Label>
              <Input
                type="number"
                step="0.01"
                value={electricityUsdPerKwh}
                onChange={(e) => setElectricityUsdPerKwh(Number(e.target.value))}
              />
            </div>
            <div className="text-sm text-muted-foreground">BTC price: {btcPrice ? `$${btcPrice.toLocaleString()}` : "—"}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estimates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>Daily revenue: ${dailyRevenueUsd.toFixed(2)}</div>
            <div>Daily power cost: ${dailyCostUsd.toFixed(2)}</div>
            <div className={dailyProfitUsd >= 0 ? "text-green-600" : "text-red-600"}>Daily profit: ${dailyProfitUsd.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


