"use client";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="relative rounded-md border bg-muted p-4 text-xs overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}

export default function MiningPage() {
  const [wallet, setWallet] = useState("");
  const [worker, setWorker] = useState("rig-01");

  const poolHost = "pool.axerium.org";
  const poolPorts = { us: 3333, eu: 3334, asia: 3335 };

  const exampleCmd = useMemo(() => {
    const addr = wallet || "axr1qexampleyourwalletaddress";
    return `axerium-miner \\\n+  --pool stratum+tcp://${poolHost}:${poolPorts.us} \\\n+  --user ${addr}.${worker} \\\n+  --pass x \\\n+  --algo axrhash`;
  }, [wallet, worker]);

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-2xl" />
      <div className="container mx-auto px-4 py-14 space-y-10">
        <div className="text-center space-y-3">
          <Badge>Mining</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Start mining Axerium</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Three simple steps to get your rig contributing to the Axerium network.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Download miner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Get the latest Axerium Miner for your OS:</p>
              <ul className="list-disc pl-5">
                <li>macOS: axerium-miner-macos.tar.gz</li>
                <li>Windows: axerium-miner-win.zip</li>
                <li>Linux: axerium-miner-linux.tar.gz</li>
              </ul>
              <p className="text-xs">(Links coming soon; placeholder artifacts for now.)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Set your wallet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground">Enter your AXR wallet address and optional worker name.</div>
              <Input placeholder="axr1q..." value={wallet} onChange={(e) => setWallet(e.target.value)} />
              <Input placeholder="rig-01" value={worker} onChange={(e) => setWorker(e.target.value)} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Run the miner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CodeBlock code={exampleCmd} />
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(exampleCmd);
                    toast.success("Command copied");
                  }}
                >
                  Copy command
                </Button>
                <Button variant="outline" onClick={() => {
                  const alt = exampleCmd.replace(`:${poolPorts.us}`, `:${poolPorts.eu}`);
                  navigator.clipboard.writeText(alt);
                  toast.success("EU endpoint copied");
                }}>EU endpoint</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pool endpoints</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>US: {poolHost}:{poolPorts.us}</li>
                <li>EU: {poolHost}:{poolPorts.eu}</li>
                <li>ASIA: {poolHost}:{poolPorts.asia}</li>
              </ul>
              <div className="mt-3 text-xs">Protocol: stratum+tcp · Algo: axrhash</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommended specs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>CPU: 4+ cores or recent GPU</li>
                <li>RAM: 8 GB</li>
                <li>Storage: 10 GB free</li>
                <li>Network: Stable broadband</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fees">
                <AccordionTrigger>What are the pool fees?</AccordionTrigger>
                <AccordionContent>
                  Introductory 1% fee during Testnet. Mainnet fees will be announced with governance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rewards">
                <AccordionTrigger>How are rewards distributed?</AccordionTrigger>
                <AccordionContent>
                  Payouts are proportional to contributed shares. Testnet rewards may include AXR points redeemable at TGE.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger>Where can I get support?</AccordionTrigger>
                <AccordionContent>
                  Join our community channels from the homepage footer. We host weekly office hours during Testnet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


