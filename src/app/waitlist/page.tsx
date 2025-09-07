"use client";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function WaitlistPage() {
  const search = useSearchParams();
  const referredBy = search.get("ref");
  const [email, setEmail] = useState("");
  const [referralId, setReferralId] = useState<string | null>(null);
  const referralUrl = useMemo(() => {
    if (!referralId) return null;
    if (typeof window === "undefined") return null;
    const url = new URL(window.location.origin + "/waitlist");
    url.searchParams.set("ref", referralId);
    return url.toString();
  }, [referralId]);

  async function join() {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, referredBy }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setReferralId(data.referralId);
      toast.success("You're on the list!");
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Axerium Waitlist</h1>
        <p className="text-muted-foreground">Reserve your spot for early access. Share your referral link to move up the list.</p>
        <Card>
          <CardHeader>
            <CardTitle>Join</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={join}>Join</Button>
          </CardContent>
        </Card>
        {referralUrl && (
          <Card>
            <CardHeader>
              <CardTitle>Your referral link</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input readOnly value={referralUrl} onFocus={(e) => e.currentTarget.select()} />
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(referralUrl);
                  toast.success("Copied to clipboard");
                }}
              >
                Copy link
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Axerium?</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Energy-efficient consensus with real-world utility.</li>
          <li>Community-first distribution via waitlist + referrals.</li>
          <li>Transparent tokenomics and phased roadmap.</li>
        </ul>
      </div>
    </div>
  );
}


