import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Filter,
  MessageSquare,
  Phone,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/baymo-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BayMo — Only the leads ready to close. Real estate marketing, done for you." },
      {
        name: "description",
        content:
          "BayMo runs your real estate marketing and follow-up so you only see leads ready to close. Limited to 5 agent/broker partners per month.",
      },
      { property: "og:title", content: "BayMo — Real estate marketing made simple" },
      {
        property: "og:description",
        content:
          "Done-for-you ads, follow-up and qualification. You only talk to leads ready to close.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo.url },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};


function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2" aria-label="BayMo home">
          <img src={logo.url} alt="BayMo" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#results" className="hover:text-foreground">Results</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a href="#apply">
          <Button className="bg-gradient-brand text-white hover:opacity-95 shadow-glow h-10 px-5 rounded-full">
            Apply now
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section id="top" className="bg-hero pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
            Only 5 partner spots this month
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            We run your marketing and follow-up.{" "}
            <span className="text-gradient-brand">You only see leads ready to close.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            BayMo is a done-for-you growth partner for real estate agents and brokers. We
            generate, nurture, and qualify your leads — then hand you the ones with their
            calendar open and a signature pen in hand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#apply">
              <Button
                size="lg"
                className="bg-gradient-brand text-white hover:opacity-95 shadow-glow h-12 rounded-full px-7 text-base"
              >
                Reserve my spot <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#how" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
              See how it works →
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "No upfront ad spend lock-in",
              "Show-up rates above industry average",
              "Cancel anytime after month one",
              "Built for agents who hate cold outreach",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-orange)]" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-elegant">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Today's qualified leads
                </div>
                <div className="mt-1 font-display text-2xl font-bold">4 ready to close</div>
              </div>
              <div className="rounded-full bg-[color:var(--brand-orange)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-red)]">
                Live
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Marcus & Lena", note: "Pre-approved · $620k · tour Sat 11am", tag: "Hot" },
                { name: "Priya R.", note: "Listing consult booked · Tue 2pm", tag: "Booked" },
                { name: "Jordan T.", note: "Cash buyer · downtown condo", tag: "Hot" },
                { name: "The Alvarez family", note: "Relocating Q3 · pre-qual sent", tag: "Warm" },
              ].map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <div>
                    <div className="font-semibold text-foreground">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.note}</div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      l.tag === "Hot"
                        ? "bg-gradient-brand text-white"
                        : l.tag === "Booked"
                          ? "bg-[color:var(--brand-navy)] text-white"
                          : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {l.tag}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-4 w-4 text-[color:var(--brand-orange)]" />
              237 conversations handled by BayMo this week. You: 0 cold calls.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Problem() {
  const items = [
    { icon: Clock, t: "You're working leads at 9pm", d: "Every unanswered text is a deal walking out the door — but you can't be on call 24/7." },
    { icon: Filter, t: "80% of leads aren't real", d: "Tire kickers, wrong numbers, and 'just curious' eat your week. You only have hours for closers." },
    { icon: TrendingUp, t: "Ad agencies hand you garbage", d: "They report on clicks. You need conversations, appointments, and contracts." },
  ];
  return (
    <Section className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
          The honest truth
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          You don't need more leads. You need fewer, better ones.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Most agents are drowning in half-warm contacts and chasing replies between
          showings. BayMo flips it.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Sparkles,
      t: "We launch your campaigns",
      d: "Within 7 days, BayMo deploys proven ad creative, landing pages and lead capture under your brand — no setup work from you.",
    },
    {
      n: "02",
      icon: MessageSquare,
      t: "We follow up for you, 24/7",
      d: "Every new lead gets an instant text, a personalized email sequence and AI-assisted human follow-up until they reply or opt out.",
    },
    {
      n: "03",
      icon: Filter,
      t: "We qualify ruthlessly",
      d: "Budget, timeline, motivation, pre-approval. We weed out the noise so you don't burn a Saturday on someone who 'just wanted to look'.",
    },
    {
      n: "04",
      icon: Phone,
      t: "You only see closers",
      d: "Appointments land in your calendar. Hot leads land in your phone. You walk into every conversation already half-sold.",
    },
  ];
  return (
    <Section id="how" className="py-20 sm:py-28 bg-secondary/40 rounded-[2rem]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
          How BayMo works
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          A four-step machine you don't have to touch.
        </h2>
      </motion.div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl font-extrabold text-gradient-brand">{s.n}</span>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] text-white">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Results() {
  const stats = [
    { k: "3.2×", v: "more booked appointments per ad dollar" },
    { k: "<5 min", v: "average response time to new leads" },
    { k: "5", v: "agent partners onboarded each month — by design" },
  ];
  return (
    <Section id="results" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="grid gap-3 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card p-7 text-center">
            <div className="font-display text-5xl font-extrabold text-gradient-brand">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          {
            q: "I closed three deals in my first 60 days with BayMo. I haven't cold-called once since.",
            a: "Devon M.",
            r: "Broker, Phoenix AZ",
          },
          {
            q: "It's like having a marketing team, an SDR and a coordinator — for less than one hire.",
            a: "Sasha L.",
            r: "Top-producing agent, Austin TX",
          },
        ].map((t) => (
          <motion.figure
            key={t.a}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <blockquote className="font-display text-xl font-semibold leading-snug text-foreground">
              "{t.q}"
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{t.a}</span> · {t.r}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Promise() {
  const points = [
    "A dedicated growth manager who knows your market",
    "All ads, copy, landing pages and CRM workflows built for you",
    "24/7 lead response — leads never sit cold",
    "Weekly reporting on appointments, not vanity metrics",
    "Month-to-month. No annual contracts.",
  ];
  return (
    <Section className="py-20 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] bg-[color:var(--brand-navy)] p-8 sm:p-14 text-white shadow-elegant">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
              What's included
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Everything an in-house marketing team would do — without hiring one.
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              We only take 5 new agent or broker partners each month so every account gets
              senior attention. If we're not a fit, we'll tell you on the first call.
            </p>
          </motion.div>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-orange)]" />
                <span className="text-sm text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "How is BayMo different from a marketing agency?",
      a: "Agencies hand you leads and walk away. BayMo runs the entire follow-up and qualification process — you only get the leads that are ready to talk to you, with the appointment already on your calendar.",
    },
    {
      q: "Why only 5 spots a month?",
      a: "Each partner gets a dedicated growth manager, custom creative, and live follow-up. To keep that quality bar, we cap onboarding at 5 agents or brokers per month — full stop.",
    },
    {
      q: "Do I need to run my own ads or CRM?",
      a: "No. We build, host, and operate the entire stack under your brand. You keep the data and the relationships; we handle the work.",
    },
    {
      q: "What's the commitment?",
      a: "Month-to-month after a one-time setup. Stay because it works, not because you signed a 12-month contract.",
    },
    {
      q: "How fast will I see results?",
      a: "Campaigns are live within 7 days. Most partners see their first qualified appointment in the first two weeks.",
    },
  ];
  return (
    <Section id="faq" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          The questions every smart agent asks first.
        </h2>
      </motion.div>
      <div className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section id="apply" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 text-center shadow-elegant sm:p-14"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 -top-32 h-64 bg-gradient-brand opacity-20 blur-3xl"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
            Spots remaining this month: 3 of 5
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Stop chasing leads. <span className="text-gradient-brand">Start closing them.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Apply to onboard with BayMo. 15-minute fit call. If we're not the right partner
            for your market, we'll point you to who is.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#apply">
              <Button
                size="lg"
                className="bg-gradient-brand text-white hover:opacity-95 shadow-glow h-12 rounded-full px-8 text-base"
              >
                Reserve my spot <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Real estate agents & brokers only · No spam · Reply within 1 business day
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <img src={logo.url} alt="BayMo" className="h-7 w-auto" />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BayMo. Real estate made simple.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Results />
        <Promise />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
