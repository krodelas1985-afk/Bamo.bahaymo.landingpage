import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, MotionConfig, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  Handshake,
  Inbox,
  LineChart,
  MessageSquare,
  Plug,
  Repeat2,
  Settings2,
  ShieldCheck,
  Shuffle,
  UserCheck,
  UserMinus,
  Users,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/baymo-logo.png.asset.json";
import { AgentPhoneMock, DashboardMock, SampleTag, journeyCards } from "@/components/teams/mocks";
import { LEAD_INTAKE_WEBHOOK_URL, messengerDemoUrl, type TeamsDemoRef } from "@/lib/links";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "BaMo for Developers & Brokerages — One Connected Sales Process" },
      {
        name: "description",
        content:
          "You're paying for leads. See every inquiry, assign the right agent, and know who followed up — BaMo gives Philippine developers and brokerages one connected sales process.",
      },
      { property: "og:title", content: "BaMo for Developers & Brokerages" },
      {
        property: "og:description",
        content:
          "You're paying for leads. Is your team turning them into sales opportunities? See every inquiry, assign the right agent, know who followed up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bamo.bahaymo.com/teams" },
      { property: "og:image", content: "https://bamo.bahaymo.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://bamo.bahaymo.com/og-image.png" },
    ],
  }),
  component: TeamsLanding,
});

/* ─── shared bits ─────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
} as const;

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
    <section id={id} className={`relative scroll-mt-20 px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
      {children}
    </p>
  );
}

function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <motion.div {...inView} variants={fadeUp} className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
    </motion.div>
  );
}

function DemoButton({
  refId,
  label = "Book a Team Demo",
  className = "",
  size = "lg",
}: {
  refId: TeamsDemoRef;
  label?: string;
  className?: string;
  size?: "lg" | "sm";
}) {
  return (
    <a href={messengerDemoUrl(refId)} target="_blank" rel="noopener noreferrer">
      <motion.span className="inline-block" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          size={size === "lg" ? "lg" : "default"}
          className={`rounded-full bg-gradient-brand text-white shadow-glow hover:opacity-95 ${
            size === "lg" ? "h-12 px-7 text-base" : "h-10 px-5"
          } ${className}`}
        >
          {label} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </motion.span>
    </a>
  );
}

function MessengerHint({ light = false }: { light?: boolean }) {
  return (
    <p
      className={`mt-3 flex items-center gap-1.5 text-xs ${
        light ? "text-white/70" : "text-muted-foreground"
      }`}
    >
      <MessageSquare className="h-3.5 w-3.5" />
      Opens Messenger — say hi and BayMo will set a time with you.
    </p>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-brand"
    />
  );
}

/* ─── nav ─────────────────────────────────────────────────────── */

function AudienceSwitch() {
  return (
    <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
      <a href="/" className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground">
        For Agents
      </a>
      <span className="rounded-full bg-[color:var(--brand-navy)] px-3 py-1.5 text-white">
        For Teams
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <a href="/" className="flex flex-shrink-0 items-center gap-2" aria-label="BaMo home">
          <img src={logo.url} alt="BaMo" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {[
            { href: "#journey", label: "How it works" },
            { href: "#scenarios", label: "Developers & brokerages" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <AudienceSwitch />
          <span className="hidden sm:block">
            <DemoButton refId="teams_nav" size="sm" />
          </span>
        </div>
      </div>
    </header>
  );
}

/* ─── 1. hero ─────────────────────────────────────────────────── */

function Hero() {
  return (
    <Section id="top" className="bg-hero pt-12 pb-20 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            <Building2 className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
            BaMo for Developers & Brokerages
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            You're paying for leads.{" "}
            <span className="text-gradient-brand">
              Is your team turning them into sales opportunities?
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg text-muted-foreground">
            See every inquiry, assign the right agent, and know who followed up — in one connected
            sales process.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <DemoButton refId="teams_hero" />
            <a
              href="#journey"
              className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              See how a lead moves ↓
            </a>
          </motion.div>
          <motion.div variants={item}>
            <MessengerHint />
          </motion.div>
          <motion.ul
            variants={stagger}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {[
              "Built in the Philippines",
              "Works with the Facebook ads you already run",
              "Your data stays yours",
            ].map((t) => (
              <motion.li key={t} variants={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-orange)]" />
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="relative"
        >
          <div
            className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-15 blur-2xl"
            aria-hidden
          />
          <DashboardMock compact />
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── 2. pain as questions ────────────────────────────────────── */

function Pain() {
  const qs = [
    { icon: Inbox, q: "Do inquiries wait hours — or until morning — for a reply?" },
    { icon: MessageSquare, q: "Do leads disappear into agents' private inboxes and group chats?" },
    { icon: Repeat2, q: "Do two agents end up chasing the same buyer?" },
    { icon: ClipboardList, q: "Do you chase your team for updates before every sales meeting?" },
    { icon: UserMinus, q: "When an agent leaves, do their clients leave with them?" },
  ];
  return (
    <Section className="rounded-[2rem] bg-[color:var(--tint-cream)] py-20 sm:py-24">
      <SectionHead
        eyebrow="Sound familiar?"
        title="The ads are working. What happens after the inquiry is harder to see."
      />
      <motion.ul
        {...inView}
        variants={stagger}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {qs.map((x) => (
          <motion.li
            key={x.q}
            variants={item}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <x.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-bold leading-snug text-foreground">
              {x.q}
            </span>
          </motion.li>
        ))}
        <motion.li
          variants={item}
          className="flex items-center rounded-2xl bg-[color:var(--brand-navy)] p-5 font-display text-lg font-bold text-white"
        >
          "Bayad na ang ads. Sayang kung walang sumasagot."
        </motion.li>
      </motion.ul>
    </Section>
  );
}

/* ─── 3. one lead's journey ───────────────────────────────────── */

function Journey() {
  const steps = [
    {
      t: "A buyer inquires",
      d: "from your Facebook ad about Project A.",
      card: journeyCards.inquiry,
    },
    {
      t: "BaMo answers in seconds",
      d: "and asks what they need — budget, timing, financing.",
      card: journeyCards.reply,
    },
    {
      t: "The inquiry lands with its source",
      d: "campaign and project recorded, tagged by readiness.",
      card: journeyCards.tagged,
    },
    {
      t: "The right agent is assigned",
      d: "by the manager, or automatically by rotation.",
      card: journeyCards.assigned,
    },
    {
      t: "The agent sees the next step",
      d: "buyer details and what to do today, in their app.",
      card: journeyCards.agent,
    },
    {
      t: "Management sees it happen",
      d: "the viewing is recorded — no separate update needed.",
      card: journeyCards.visible,
    },
  ];
  return (
    <Section id="journey" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="One connected process"
        title={
          <>
            You're paying for leads.{" "}
            <span className="text-gradient-brand">What happens to them next?</span>
          </>
        }
        body="Follow one inquiry from your ad to a booked viewing — and see where your team, and you, fit in."
      />
      <motion.ol
        {...inView}
        variants={stagger}
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.t}
            variants={item}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--brand-navy)] font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold leading-tight">{s.t}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            <div className="mt-4 flex-1">{s.card}</div>
          </motion.li>
        ))}
      </motion.ol>
      <div className="mt-4 flex justify-end">
        <SampleTag />
      </div>

      <motion.div {...inView} variants={fadeUp} className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          {
            who: "Manager view",
            icon: BarChart3,
            qs: [
              "Who owns each lead?",
              "Who needs to act today?",
              "Which opportunities have stalled?",
            ],
            dark: true,
          },
          {
            who: "Agent view",
            icon: UserCheck,
            qs: ["Who should I contact today?", "What does this buyer need?", "What happens next?"],
            dark: false,
          },
        ].map((v) => (
          <div
            key={v.who}
            className={`rounded-2xl p-6 ${
              v.dark
                ? "bg-[color:var(--brand-navy)] text-white"
                : "border border-border bg-[color:var(--tint-sky)] text-foreground"
            }`}
          >
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <v.icon className="h-5 w-5 text-[color:var(--brand-orange)]" /> {v.who}
            </div>
            <ul className="mt-4 space-y-2">
              {v.qs.map((q) => (
                <li key={q} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[color:var(--brand-orange)]" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
      <div className="mt-10 flex flex-col items-center text-center">
        <DemoButton refId="teams_journey" label="See it with your own leads" />
      </div>
    </Section>
  );
}

/* ─── 4. allocation & accountability ─────────────────────────── */

function Allocation() {
  const cards = [
    {
      icon: Shuffle,
      t: "Assign your way",
      d: "Pick the agent yourself, rotate evenly across the team, or give more leads to agents who respond fast and convert.",
    },
    {
      icon: ArrowRightLeft,
      t: "Reassign without losing history",
      d: "The conversation, notes and appointments move with the lead. Every change of owner is logged.",
    },
    {
      icon: ShieldCheck,
      t: "Nothing walks out the door",
      d: "When an agent leaves, hand their open clients to someone else in one step.",
    },
  ];
  return (
    <Section className="rounded-[2rem] bg-[color:var(--tint-sky)] py-20 sm:py-24">
      <SectionHead
        eyebrow="Lead allocation & accountability"
        title="Assign the right agent. Know who followed up."
        body="Clear ownership for every buyer — so nothing falls between agents and nobody has to ask who's handling it."
      />
      <motion.div {...inView} variants={stagger} className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <motion.div
            key={c.t}
            variants={item}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        {...inView}
        variants={fadeUp}
        className="mt-8 flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-navy)]"
      >
        <Users className="h-4 w-4 text-[color:var(--brand-orange)]" />
        Agents see their own clients. Managers see the whole team.
      </motion.p>
    </Section>
  );
}

/* ─── 5. agent tools + 6. management visibility ──────────────── */

function AgentTools() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Tools for your agents"
            title="Give your agents a clear list, not a messy inbox."
            body="Each agent opens the BaMo app and sees exactly who to contact, what the buyer needs, and what happens next."
          />
          <motion.ul {...inView} variants={stagger} className="mt-8 space-y-3">
            {[
              "Assigned clients with the full conversation history",
              "Reminders and follow-ups that are due",
              "Viewing and call appointments",
              "Approved project materials — brochures, price lists, computations",
            ].map((t) => (
              <motion.li key={t} variants={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-orange)]" />
                {t}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p {...inView} variants={fadeUp} className="mt-6 text-sm text-muted-foreground">
            Less admin, more selling. BaMo handles first replies and routine follow-ups, so your
            agents spend their time with buyers who are ready to talk.
          </motion.p>
        </div>
        <motion.div {...inView} variants={fadeUp}>
          <AgentPhoneMock />
        </motion.div>
      </div>
    </Section>
  );
}

function Visibility() {
  return (
    <Section className="rounded-[2rem] bg-[color:var(--tint-cream)] py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div {...inView} variants={fadeUp} className="order-2 lg:order-1">
          <DashboardMock />
        </motion.div>
        <div className="order-1 lg:order-2">
          <SectionHead
            eyebrow="Visibility for management"
            title="See who is doing what — without asking."
            body="Every inquiry, every assignment, every follow-up, in one overview."
          />
          <motion.ul {...inView} variants={stagger} className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "See unassigned inquiries",
              "Know who followed up",
              "Response speed by agent",
              "Workload across the team",
              "Appointments and viewings",
              "Pipeline by campaign and project",
            ].map((t) => (
              <motion.li
                key={t}
                variants={item}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                <LineChart className="h-4 w-4 flex-shrink-0 text-[color:var(--brand-orange)]" />
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}

/* ─── 7. scenarios ────────────────────────────────────────────── */

function Scenarios() {
  const scenarios = {
    developer: {
      setup: "Three projects, an in-house sales team and two accredited brokerages.",
      body: [
        "Each project runs its own campaign, so every inquiry arrives tagged with the project it's for.",
        "Your sales manager assigns each project's inquiries to the team handling it — in-house or partner brokerage.",
        "The overview shows which projects are drawing interest, and whether each team is following through.",
      ],
      outcomes: [
        "See which projects attract interest",
        "Hold every sales team to the same standard",
        "Keep partner brokerages accountable",
      ],
    },
    brokerage: {
      setup: "Twelve agents, one Facebook page, hundreds of inquiries a month.",
      body: [
        "Every inquiry is answered right away, then rotated fairly across your agents — or weighted toward your top performers.",
        "Each agent works their own list in the BaMo app. You see the whole pipeline.",
        "When an agent moves on, their buyers are handed to someone else with the full history.",
      ],
      outcomes: [
        "Fair, visible lead distribution",
        "No more buyers lost between agents",
        "Continuity when your team changes",
      ],
    },
  };
  return (
    <Section id="scenarios" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="Built for how you sell"
        title="One system. Fits a developer or a brokerage."
      />
      <motion.div {...inView} variants={fadeUp} className="mt-10">
        <Tabs defaultValue="developer">
          <TabsList className="h-auto rounded-full bg-secondary p-1">
            <TabsTrigger value="developer" className="rounded-full px-5 py-2 font-semibold">
              <Building2 className="mr-2 h-4 w-4" /> Developer
            </TabsTrigger>
            <TabsTrigger value="brokerage" className="rounded-full px-5 py-2 font-semibold">
              <Handshake className="mr-2 h-4 w-4" /> Brokerage
            </TabsTrigger>
          </TabsList>
          {(Object.keys(scenarios) as (keyof typeof scenarios)[]).map((k) => {
            const s = scenarios[k];
            return (
              <TabsContent key={k} value={k} className="mt-6">
                <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1.4fr_1fr]">
                  <div>
                    <SampleTag label="Example scenario" />
                    <h3 className="mt-3 font-display text-2xl font-bold">{s.setup}</h3>
                    <ul className="mt-5 space-y-3">
                      {s.body.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-foreground">
                          <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[color:var(--brand-orange)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[color:var(--brand-navy)] p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      What you get
                    </div>
                    <ul className="mt-4 space-y-3">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 font-medium">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-orange)]" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.div>
      <div className="mt-10">
        <DemoButton refId="teams_scenarios" label="Walk through your setup with us" />
      </div>
    </Section>
  );
}

/* ─── 8. proof ────────────────────────────────────────────────── */

// Figures from BaMo's CRM for each client's own account, pulled 2026-09-28.
// Re-pull before every copy change; both clients must approve their card.
const PROOF = [
  {
    name: "Mary Ann",
    since: "BaMo client since May 2026",
    stats: [
      { v: "897", l: "inquiries handled" },
      { v: "97%", l: "got a reply" },
      { v: "~36 sec", l: "median time to first reply" },
      { v: "65", l: "viewing appointments recorded" },
    ],
  },
  {
    name: "Cristy",
    since: "BaMo client since July 2026",
    stats: [
      { v: "445", l: "inquiries handled" },
      { v: "99%", l: "got a reply" },
      { v: "136", l: "buyers qualified warm or hot" },
      { v: "9", l: "viewing appointments recorded" },
    ],
  },
];

function Proof() {
  return (
    <Section className="rounded-[2rem] bg-[color:var(--brand-navy)] py-20 text-white sm:py-24">
      <motion.div {...inView} variants={fadeUp} className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
          Proof
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          Real results from BaMo clients.
        </h2>
      </motion.div>
      <motion.div {...inView} variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2">
        {PROOF.map((p) => (
          <motion.div
            key={p.name}
            variants={item}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div className="font-display text-2xl font-bold">{p.name}</div>
            <div className="text-sm text-white/60">{p.since}</div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {p.stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-extrabold text-[color:var(--brand-orange)]">
                    {s.v}
                  </div>
                  <div className="text-sm text-white/75">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-6 text-xs text-white/50">
        Figures from BaMo's CRM for each client's account, from their start date to September 2026.
        Individual results vary.
      </p>
    </Section>
  );
}

/* ─── 9. setup ────────────────────────────────────────────────── */

function Setup() {
  const steps = [
    {
      icon: ClipboardList,
      t: "Review your process",
      d: "How inquiries arrive today, who handles them, and where visibility gets lost.",
    },
    {
      icon: Plug,
      t: "Connect your lead sources",
      d: "Your Facebook page and the ads you already run.",
    },
    {
      icon: Settings2,
      t: "Configure teams & assignment",
      d: "Projects, agents, who sees what, and how leads are assigned.",
    },
    {
      icon: GraduationCap,
      t: "Train your people",
      d: "Managers on the dashboard, agents on the mobile app.",
    },
    {
      icon: LineChart,
      t: "Review performance together",
      d: "A check-in after your first 30 days.",
    },
  ];
  return (
    <Section className="py-20 sm:py-28">
      <SectionHead eyebrow="Setup & support" title="We set it up with you." />
      <motion.ol {...inView} variants={stagger} className="mt-10 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.li
            key={s.t}
            variants={item}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <s.icon className="h-6 w-6 text-[color:var(--brand-orange)]" />
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-3 font-display text-base font-bold leading-snug">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

/* ─── 10. faq ─────────────────────────────────────────────────── */

const FAQ = [
  {
    q: "Do we have to stop working with our ad agency?",
    a: "No. BaMo works on the inquiries your current ads already produce. If you'd like, BaMo can run your ads too.",
  },
  {
    q: "We already use a CRM or spreadsheets.",
    a: "We'll look at what you use today on the demo call and show you how BaMo fits alongside it — or replaces it.",
  },
  {
    q: "Which channels do you support?",
    a: "We start with Facebook Messenger and your Facebook ads — where most Philippine property inquiries arrive.",
  },
  {
    q: "Who can see our leads?",
    a: "Agents see only the clients assigned to them. Managers and admins see the whole team. Your data belongs to you.",
  },
  {
    q: "Can agents from partner brokerages work our leads?",
    a: "Yes. Add them as agents in your workspace and assign them the inquiries they're handling.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on your team size and setup. We'll walk you through it on the demo call.",
  },
];

function Faq() {
  return (
    <Section id="faq" className="rounded-[2rem] bg-[color:var(--tint-sky)] py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <SectionHead eyebrow="Common questions" title="What teams ask us first." />
        <motion.div {...inView} variants={fadeUp}>
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card px-5"
          >
            {FAQ.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`q${i}`}
                className={i === FAQ.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="text-left font-display text-base font-bold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── 11. closing CTA + fallback form ─────────────────────────── */

type FormErrors = Partial<
  Record<"fullName" | "company" | "orgType" | "agentCount" | "contact", string>
>;

function validate(d: Record<string, string>): FormErrors {
  const e: FormErrors = {};
  if (!d.fullName?.trim()) e.fullName = "Please enter your name.";
  if (!d.company?.trim()) e.company = "Please enter your company.";
  if (!d.orgType) e.orgType = "Please choose one.";
  if (!d.agentCount) e.agentCount = "Please choose a range.";
  const c = d.contact?.trim() ?? "";
  if (!c) e.contact = "Please enter an email or mobile number.";
  else if (c.includes("@") ? !/^\S+@\S+\.\S+$/.test(c) : c.replace(/\D/g, "").length < 10)
    e.contact = "That doesn't look like a valid email or mobile number.";
  return e;
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1 text-xs text-[color:var(--brand-red)]">{msg}</p> : null;
}

const selectCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function TeamForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (state === "sending") return;
    const form = ev.currentTarget;
    const d = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const errs = validate(d);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const contact = d.contact.trim();
    const isEmail = contact.includes("@");
    setState("sending");
    try {
      const res = await fetch(LEAD_INTAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audience: "team",
          fullName: d.fullName.trim(),
          company: d.company.trim(),
          orgType: d.orgType,
          agentCount: d.agentCount,
          email: isEmail ? contact : null,
          phone: isEmail ? null : contact,
          challenge: d.challenge?.trim() || null,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background p-8 text-center text-foreground shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-orange)]/10">
          <CheckCircle2 className="h-8 w-8 text-[color:var(--brand-orange)]" />
        </span>
        <p className="mt-5 font-display text-xl font-bold">Thanks — we've got your request.</p>
        <p className="mt-3 max-w-sm text-muted-foreground">
          A BaMo team member will reach out within 1 business day. Want to pick a time now?
        </p>
        <div className="mt-6">
          <DemoButton refId="teams_form_thanks" label="Continue in Messenger" size="sm" />
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-background p-6 text-foreground shadow-sm"
    >
      <p className="font-display text-lg font-bold">Prefer email? Leave your details.</p>
      <div className="mt-4 grid gap-3">
        <div>
          <Input
            name="fullName"
            placeholder="Your name"
            className="h-11"
            aria-invalid={!!errors.fullName}
          />
          <FieldError msg={errors.fullName} />
        </div>
        <div>
          <Input
            name="company"
            placeholder="Company"
            className="h-11"
            aria-invalid={!!errors.company}
          />
          <FieldError msg={errors.company} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <select
              name="orgType"
              defaultValue=""
              className={selectCls}
              aria-label="Developer or brokerage"
              aria-invalid={!!errors.orgType}
            >
              <option value="" disabled>
                Developer or brokerage?
              </option>
              <option value="developer">Developer</option>
              <option value="brokerage">Brokerage / realty team</option>
            </select>
            <FieldError msg={errors.orgType} />
          </div>
          <div>
            <select
              name="agentCount"
              defaultValue=""
              className={selectCls}
              aria-label="Number of agents"
              aria-invalid={!!errors.agentCount}
            >
              <option value="" disabled>
                Number of agents
              </option>
              <option value="1-5">1–5</option>
              <option value="6-20">6–20</option>
              <option value="21-50">21–50</option>
              <option value="50+">50+</option>
            </select>
            <FieldError msg={errors.agentCount} />
          </div>
        </div>
        <div>
          <Input
            name="contact"
            placeholder="Email or mobile number"
            className="h-11"
            aria-invalid={!!errors.contact}
          />
          <FieldError msg={errors.contact} />
        </div>
        <Textarea
          name="challenge"
          placeholder="Biggest lead-management challenge (optional)"
          className="min-h-20"
        />
        <Button
          type="submit"
          size="lg"
          className="mt-1 h-12 w-full rounded-full bg-[color:var(--brand-navy)] text-white hover:opacity-95"
        >
          {state === "sending" ? "Sending…" : "Request a Team Demo"}
        </Button>
        {state === "failed" && (
          <p className="text-center text-sm text-[color:var(--brand-red)]">
            Sorry, that didn't go through. Please try again, or message us on Messenger.
          </p>
        )}
        <p className="text-center text-xs text-muted-foreground">
          Developers, brokerages and realty teams · We reply within 1 business day
        </p>
      </div>
    </form>
  );
}

function Closing() {
  return (
    <Section id="demo" className="py-20 sm:py-28">
      <motion.div
        {...inView}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] bg-[color:var(--brand-navy)] p-8 text-white shadow-elegant sm:p-14"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 -top-32 h-64 bg-gradient-brand opacity-25 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              See how your leads could move through{" "}
              <span className="text-gradient-brand">one connected sales process.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              A 20-minute demo, built around your business: how inquiries arrive, how your agents
              receive them, and where you lose visibility today.
            </p>
            <div className="mt-8">
              <DemoButton refId="teams_close" />
              <MessengerHint light />
            </div>
          </div>
          <TeamForm />
        </div>
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8 lg:px-12">
        <img src={logo.url} alt="BaMo" className="h-7 w-auto" />
        <a
          href="/"
          className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
        >
          Are you an individual agent? See BaMo for Agents →
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BaMo · Built for Philippine real estate.
        </p>
      </div>
    </footer>
  );
}

function TeamsLanding() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-background text-foreground">
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <Pain />
          <Journey />
          <Allocation />
          <AgentTools />
          <Visibility />
          <Scenarios />
          <Proof />
          <Setup />
          <Faq />
          <Closing />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
