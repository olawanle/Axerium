import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center text-center gap-6 py-12">
        <Badge>Axerium</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The crypto mining hub
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Profitability calculator, curated mining pools, live price data, and insights to help you mine smarter.
        </p>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/waitlist">Join the waitlist</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tokenomics">View tokenomics</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Grass-like waitlist</CardTitle>
          </CardHeader>
          <CardContent>
            Referral-based waitlist to reward early community growth.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tokenomics</CardTitle>
          </CardHeader>
          <CardContent>
            Clear supply, allocations and emissions, built for longevity.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            Transparent phases from community to mainnet.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
