import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import game from "@/assets/game.jpg";
import icon from "@/assets/icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reco — Play games. Earn rewards." },
      { name: "description", content: "Play top mobile games and earn rewards with Playnest." },
      { property: "og:title", content: "Playnest — Play games. Earn rewards." },
      { property: "og:description", content: "Play top mobile games and earn rewards with Playnest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ticker = [
  "🇺🇸 Mia S. earned $17.25",
  "🇺🇸 Jake R. earned $20.00",
  "🇺🇸 Sarah M. earned $35.50",
  "🇨🇦 Mike T. earned $18.50",
  "🇬🇧 Emma W. earned $31.00",
];
const methods = ["💙 PayPal", "💸 Venmo", "💚 Cash App", "🏦 Bank", "🎁 Gift cards"];
const faqs = [
  ["Is Reco free?", "Yes — it's free to join and play. Optional extras never affect your basic rewards."],
  [
    "How fast do I get paid?",
    "Cash out once you reach a milestone. Payouts go to PayPal, Venmo, Cash App, bank or gift card.",
  ],
  ["What's the catch?", "You actually have to play. Reward amounts vary by game and milestone."],
  ["Is Reco safe?", "We only partner with verified game studios and never sell your data."],
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">
      <span className="h-px w-7 bg-border" />
      {children}
      <span className="h-px w-7 bg-border" />
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <a href="https://taprkr.com/r/eyJ0IjoicmVjb3NvY2lhbC1jcHIiLCJ0aWQiOiI3ZjNkMGY2NDRkNGRjOTNiMjFhOSIsInRzIjoxNzkyNDIwMTIwOTYzfQ" 
        className="flex items-center justify-center gap-3 rounded-xl bg-ink py-3 text-background">
        <span className="text-xl"></span>
        <span className="text-left leading-tight">
          <span className="block text-[11px]">Download on the</span>
          <span className="text-lg font-bold">App Store</span>
        </span>
      </a>
      <a
        href="https://taprkr.com/r/eyJ0IjoicmVjb3NvY2lhbC1jcHIiLCJ0aWQiOiI3ZjNkMGY2NDRkNGRjOTNiMjFhOSIsInRzIjoxNzkyNDIwMTIwOTYzfQ"
        className="flex items-center justify-center gap-3 rounded-xl bg-brand py-3 text-primary-foreground shadow-brand"
      >
        <span className="text-xl">▶</span>
        <span className="text-left leading-tight">
          <span className="block text-[11px]">Get it on</span>
          <span className="text-lg font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function Index() {
  const [t, setT] = useState(0);
  const [paid, setPaid] = useState(487329);
  const [earned, setEarned] = useState(0);
  const [mode, setMode] = useState<"free" | "plus">("plus");
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const a = setInterval(() => setT((x) => (x + 1) % ticker.length), 3000);
    const b = setInterval(() => setPaid((x) => x + Math.floor(Math.random() * 40)), 2500);
    const c = setInterval(() => setEarned((x) => (x >= 9.75 ? 0 : x + 0.25)), 700);
    return () => [a, b, c].forEach(clearInterval);
  }, []);

  const plus = mode === "plus";
  const rows = plus
    ? [
        ["🚀", "Accelerated progress", "Every in-app purchase counts toward milestones", "~10x Faster"],
        ["💎", "Premium rewards", "Purchase milestones unlock the biggest payouts", "The biggest"],
      ]
    : [
        ["🕐", "Gradual progress", "Move up level by level, playing daily", "Steady"],
        ["🎁", "Standard rewards", "Unlock the core game milestones", "Basic"],
      ];

  return (
    <div className="min-h-screen bg-background pb-28 text-ink">
      <div className="sticky top-0 z-20 border-b bg-background/95 py-3 text-center text-sm text-muted-foreground backdrop-blur">
        <span key={t} className="animate-ticker inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
          {ticker[t]} <span className="rounded bg-muted px-1.5 text-[10px] uppercase"></span>
        </span>
      </div>

      <section className="bg-gradient-to-b from-surface to-background px-5 pt-11 pb-14 text-center">
        <div className="mx-auto max-w-[440px]">
          <img src={icon} alt="Playnest" width={72} height={72} className="mx-auto h-[72px] w-[72px] rounded-2xl" />
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-brand">★★★★★</span> <b className="text-ink">4.7</b> · App Store (demo)
          </p>
          <h1 className="mt-4 font-display text-[56px] font-extrabold leading-[0.98] tracking-tight">
            Play games.
            <br />
            <em className="text-brand">Get paid to play Subway Surfers.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-lg text-muted-foreground">
            Earn real cash playing top mobile games. Cash out anytime — no minimum.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {methods.map((m) => (
              <span key={m} className="rounded-full border bg-background px-4 py-2 text-sm font-semibold">
                {m}
              </span>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
            <b className="text-ink">1,831</b>
            {"\npeople playing "}
          </p>
          <div className="mt-6 rounded-2xl border bg-background p-7 shadow-card">
            <p className="text-muted-foreground">Rewards paid today </p>
            <p className="mt-1 font-display text-6xl font-extrabold tracking-tight">${paid.toLocaleString()}</p>
            <p className="mt-2 text-xs text-muted-foreground">Updates every few seconds · USD</p>
          </div>
          <div className="mt-16">
            <Eyebrow>REAL GAMEPLAY · REAL REWARDS</Eyebrow>
          </div>
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <img src={game} alt="Subway surfers gameplay" width={1280} height={720} className="block w-full" />
            <div className="absolute left-3 top-3 rounded-lg bg-ink/80 px-3 py-1.5 text-left text-background">
              <p className="text-[9px] font-bold tracking-widest">EARNED</p>
              <p className="text-2xl font-bold text-success">${earned.toFixed(2)}</p>
            </div>
            <div className="absolute right-3 top-3 rounded-lg bg-ink/80 px-2.5 py-1.5 text-xs font-bold text-chart-4">
              $0.25<span className="block text-[9px] font-normal text-background/70">per coin</span>
            </div>
            <div className="absolute bottom-3 right-3 rounded-lg bg-ink/80 px-3 py-2 text-left text-sm text-background">
              <b>Subway surfers</b>
              <p className="text-xs">⚡ Premium reward game</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-14">
        <div className="mx-auto max-w-[440px]">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight">Two ways to play</h2>
          <p className="mx-auto mt-3 max-w-sm text-center text-muted-foreground">
            The biggest rewards unlock at game milestones. Play free or add optional boosts.
          </p>
          <div className="mt-8 grid grid-cols-2 rounded-xl border bg-background p-1">
            {(["free", "plus"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setMode(k)}
                className={`rounded-lg py-3 font-semibold transition ${mode === k ? "bg-brand text-primary-foreground shadow-brand" : "text-muted-foreground"}`}
              >
                {k === "free" ? "🎮 Free" : "⚡ With boosts"}
              </button>
            ))}
          </div>
          <p className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-5xl font-extrabold italic text-brand">
              {plus ? "Up to $460\n" : "Core tier"}
            </span>
            <span className="text-muted-foreground">{plus ? "in as little as ~2 hrs" : "always free"}</span>
          </p>
          <div className="mt-4 space-y-2.5">
            {rows.map(([e, h, d, b]) => (
              <div key={h} className="flex items-center gap-4 rounded-2xl border bg-background p-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft">{e}</span>
                <div className="flex-1">
                  <p className="font-semibold">{h}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between text-sm">
            <span className="text-muted-foreground">Progress speed</span>
            <b>{plus ? "Accelerated" : "Your own pace"}</b>
          </div>
          <div className="mt-2 h-1 rounded-full bg-border">
            <div className={`h-1 rounded-full bg-brand transition-all ${plus ? "w-full" : "w-1/4"}`} />
          </div>
        </div>
      </section>

      <section className="px-5 py-9">
        <div className="mx-auto max-w-[440px]">
          <StoreButtons />
          <h2 className="mt-14 text-center font-display text-4xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-8 divide-y">
            {[
              "Download Reco and pick a game",
              "Play for free or make in-app purchases to hit the big milestones much sooner",
              "Cash out via PayPal, Venmo, Cash App, bank transfer, or gift card",
            ].map((s, i) => (
              <li key={s} className="flex gap-6 py-5 text-[17px]">
                <span className="font-display text-3xl font-extrabold italic text-brand">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface px-5 py-14">
        <div className="mx-auto max-w-[440px]">
          <Eyebrow>RECENT MEMBER PAYOUTS</Eyebrow>
          <div className="mt-6 divide-y overflow-hidden rounded-2xl border bg-background">
            {[
              ["JR", "Jake R.", "Texas · this week", "$441", "bg-brand text-primary-foreground"],
              ["SM", "Sarah M.", "Florida · last month", "$1.128", "bg-ink text-background"],
              ["MT", "Mike T.", "California · 2 weeks", "$786", "bg-brand-soft text-ink"],
            ].map(([a, n, d, v, c]) => (
              <div key={n} className="flex items-center gap-3.5 p-4">
                <span className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold ${c}`}>{a}</span>
                <div className="flex-1">
                  <p className="font-semibold">
                    {n} <span className="text-brand">✓</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
                <span className="font-display text-2xl font-extrabold">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 divide-x text-center">
            {[
              ["500K+", "Members"],
              ["4.7★", "App Rating"],
              ["$0", "To Join"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-4xl font-extrabold">{v}</p>
                <p className="text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Figures shown are sample data for design demo purposes.
          </p>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-[440px]">
          <Eyebrow>Quick answers</Eyebrow>
          <div className="mt-6 divide-y border-y">
            {faqs.map(([q, a], i) => (
              <div key={q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full justify-between py-5 text-left text-[17px] font-semibold"
                >
                  {q}
                  <span className="text-xs text-muted-foreground">{open === i ? "▲" : "▼"}</span>
                </button>
                {open === i && <p className="pb-5 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-xs text-muted-foreground">
            Reward amounts vary by game and milestone. Results are not guaranteed.
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
          </p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t bg-background/95 px-5 py-3 backdrop-blur">
        <a
          href="https://taprkr.com/r/eyJ0IjoicmVjb3NvY2lhbC1jcHIiLCJ0aWQiOiI3ZjNkMGY2NDRkNGRjOTNiMjFhOSIsInRzIjoxNzkyNDIwMTIwOTYzfQ"
          className="mx-auto flex max-w-[448px] items-center justify-center gap-2 rounded-xl bg-brand py-4 text-lg font-bold text-primary-foreground shadow-brand"
        >
          Start playing free on iOS & Android →
        </a>
      </div>
    </div>
  );
}
