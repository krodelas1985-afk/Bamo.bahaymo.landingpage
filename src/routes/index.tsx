import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Filter,
  MessageSquare,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Zap,
  Globe,
  Megaphone,
  Video,
  Bot,
  Database,
  CalendarCheck,
  ListChecks,
  BarChart3,
  X,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/baymo-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BayMo — Your AI Growth Team for Philippine Real Estate" },
      {
        name: "description",
        content:
          "BaMo builds your website, runs your ads, replies to every lead 24/7 and books appointments — so Filipino real estate agents can focus on closing.",
      },
      { property: "og:title", content: "BayMo — Your AI Growth Team for Real Estate" },
      {
        property: "og:description",
        content:
          "Website, ads, content, follow-up, CRM and appointment setting — done for you. Built for Philippine real estate.",
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
          <a href="#included" className="hover:text-foreground">What's included</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#founding" className="hover:text-foreground">Founding clients</a>
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
            <Flag className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
            Your done-for-you growth team · Philippines
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Your <span className="text-gradient-brand">AI Growth Team</span> for Real Estate.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            We build your website, manage your marketing, respond to every lead 24/7, and
            book appointments — so you can focus on closing more sales.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#apply">
              <Button
                size="lg"
                className="bg-gradient-brand text-white hover:opacity-95 shadow-glow h-12 rounded-full px-7 text-base"
              >
                Become a Founding Client <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#included" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
              See everything included ↓
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "Professional Website",
              "Facebook Ads Managed",
              "AI Content Creation",
              "24/7 AI Follow-up",
              "Private CRM",
              "AI Appointment Setting",
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
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-elegant">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white font-display font-bold">
                  B
                </div>
                <div>
                  <div className="font-display font-bold leading-tight">BayMo</div>
                  <div className="text-xs text-muted-foreground">Your AI assistant · Today</div>
                </div>
              </div>
              <div className="rounded-full bg-[color:var(--brand-orange)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-red)]">
                Live
              </div>
            </div>

            <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              New leads
            </div>
            <ul className="mt-2 space-y-2">
              {[
                { name: "Joanna R.", note: "Asked about 2BR in Sta. Rosa", tag: "Hot" },
                { name: "Mark D.", note: "Replied to your Cavite ad", tag: "Warm" },
                { name: "Liza P.", note: "Requested a price list", tag: "Warm" },
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
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {l.tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl bg-[color:var(--brand-navy)] p-4 text-white">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Next appointment · Phone call
              </div>
              <div className="mt-1 font-display font-bold">Joanna R. · 3:30 PM</div>
              <div className="mt-1 text-xs text-white/70">
                Booked automatically · Budget confirmed ₱4.2M
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-4 w-4 text-[color:var(--brand-orange)]" />
              Every inquiry replied to in under a minute.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// KEEP — The Honest Truth section, rewritten lightly for new positioning
function Problem() {
  const items = [
    {
      icon: Clock,
      t: "You're doing two full-time jobs",
      d: "Content, ads, Messenger, follow-ups, scheduling — and you're still expected to close. Something always slips.",
    },
    {
      icon: Filter,
      t: "Leads go cold in minutes",
      d: "If a buyer doesn't get a reply fast, they message the next agent. You can't be on Messenger 24/7 — BaMo can.",
    },
    {
      icon: TrendingUp,
      t: "Stitching tools together doesn't work",
      d: "An ads guy here, a VA there, a CRM you barely use. Nothing talks to each other. Nothing actually grows the pipeline.",
    },
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
          Stop doing everything yourself.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          As a real estate agent you're expected to create content, run ads, reply to
          Messenger, follow up, organize leads, schedule appointments — and still close.
          That's two full-time jobs. BaMo takes care of everything except the closing.
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

function Included() {
  const items = [
    {
      icon: Globe,
      eyebrow: "Get found",
      t: "Professional Website",
      d: "Your own branded real estate site with property listings, inquiry forms, lead capture, and a custom domain.",
    },
    {
      icon: Megaphone,
      eyebrow: "Get seen",
      t: "Facebook Ads Management",
      d: "We plan, launch, monitor and optimize your campaigns to bring in qualified buyer inquiries. Ad budget is paid directly by you.",
    },
    {
      icon: Video,
      eyebrow: "Stay active",
      t: "AI Marketing Content",
      d: "Property promotions, social posts, ad creatives, AI promo videos and educational real estate content.",
    },
    {
      icon: Bot,
      eyebrow: "Never miss a lead",
      t: "24/7 AI Sales Assistant",
      d: "Instant replies to every inquiry. Answers questions, qualifies buyers, collects budget and preferences.",
    },
    {
      icon: Database,
      eyebrow: "Own your pipeline",
      t: "Private CRM",
      d: "Every conversation, lead and appointment in one place — from inquiry to closing. Your data always belongs to you.",
    },
    {
      icon: CalendarCheck,
      eyebrow: "Show, don't chase",
      t: "AI Appointment Setting",
      d: "Once a buyer is qualified, BaMo books the appointment — so you spend more time showing properties.",
    },
    {
      icon: ListChecks,
      eyebrow: "Always organized",
      t: "AI Lead Management",
      d: "BaMo prioritizes your hottest prospects, tracks every conversation, sends follow-ups and reminds you when it's time to act.",
    },
    {
      icon: BarChart3,
      eyebrow: "See the results",
      t: "Performance Reports",
      d: "A monthly picture of what your growth team delivered: leads, appointments booked, ad performance and response rates.",
    },
  ];
  return (
    <Section id="included" className="py-20 sm:py-28 bg-secondary/40 rounded-[2rem]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
          Everything included
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          Everything you need to <span className="text-gradient-brand">grow.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          One service. No freelancers to manage, no software to stitch together — every
          outcome below is handled for you.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.06 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] text-white">
                <it.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-red)]">
                {it.eyebrow}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Replaces() {
  const replaced = [
    "Facebook Ads Specialist",
    "Graphic Designer",
    "Video Editor",
    "Website Developer",
    "CRM Software",
    "Appointment Setter",
    "VA for Messenger",
  ];
  const costs = [
    { role: "Website Developer", price: "₱20,000+", note: "setup" },
    { role: "Facebook Ads Manager", price: "₱15,000", note: "/month" },
    { role: "Video Editor", price: "₱8,000", note: "/month" },
    { role: "Graphic Designer", price: "₱8,000", note: "/month" },
    { role: "Virtual Assistant", price: "₱20,000", note: "/month" },
    { role: "CRM Software", price: "₱2,000", note: "/month" },
    { role: "Appointment Setter", price: "₱20,000", note: "/month" },
  ];
  return (
    <Section className="py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-2xl border border-border bg-card p-7"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Replaces
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold">
            What you don't need anymore.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            BaMo replaces all of these — and gets them working together.
          </p>
          <ul className="mt-6 space-y-2">
            {replaced.map((r) => (
              <li
                key={r}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm"
              >
                <X className="h-4 w-4 text-[color:var(--brand-red)]" />
                <span className="line-through decoration-[color:var(--brand-red)]/60 text-muted-foreground">
                  {r}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold">One service replaces them all.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-2xl bg-[color:var(--brand-navy)] p-7 text-white shadow-elegant"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
            The math
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold">
            What it would cost to do this separately.
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Hiring each role on its own adds up fast.
          </p>
          <ul className="mt-6 divide-y divide-white/10">
            {costs.map((c) => (
              <li key={c.role} className="flex items-center justify-between py-3 text-sm">
                <span className="text-white/80">{c.role}</span>
                <span className="font-semibold">
                  {c.price}
                  <span className="text-white/50 font-normal">{c.note}</span>
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between py-4">
              <span className="font-display font-bold">Total</span>
              <span className="font-display text-xl font-extrabold text-[color:var(--brand-orange)]">
                Over ₱70,000/mo
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/50">
            Figures are estimated typical Philippine market rates for hiring each role
            separately.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "You onboard",
      d: "A short setup call. We connect your pages, listings and lead sources.",
    },
    {
      n: "02",
      t: "BaMo runs your growth 24/7",
      d: "Website, ads, content, instant replies, follow-up and booking — all handled.",
    },
    {
      n: "03",
      t: "You step in to close",
      d: "Walk into warm, pre-qualified appointments that are already booked.",
    },
  ];
  return (
    <Section id="how" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
          How it works
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          Onboard once. BaMo handles the rest.
        </h2>
      </motion.div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-7"
          >
            <span className="font-display text-6xl font-extrabold text-gradient-brand">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="mt-14 rounded-2xl border border-border bg-card p-7"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
          Why BaMo is different
        </p>
        <h3 className="mt-3 font-display text-2xl font-extrabold">
          Most platforms stop after generating a lead. BaMo doesn't.
        </h3>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Generate the lead",
            "Respond instantly, 24/7",
            "Qualify the buyer",
            "Follow up automatically",
            "Book the appointment",
            "Track everything in your CRM",
          ].map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-medium"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-muted-foreground">
          You simply <span className="font-semibold text-foreground">show the property and
          close the deal.</span>
        </p>
      </motion.div>
    </Section>
  );
}

function BuiltForPH() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] bg-[color:var(--brand-navy)] p-8 sm:p-14 text-white shadow-elegant">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange)]">
              Built for Philippine Real Estate
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Para sa bawat <span className="text-[color:var(--brand-orange)]">Ahenteng
              Pilipino.</span>
            </h2>
            <p className="mt-4 text-white/70">
              Not a generic CRM or a foreign marketing agency. BaMo was built exclusively
              for Philippine real estate professionals — agents, brokers, teams and
              developers — combining marketing, AI, automation and lead management into
              one complete growth system.
            </p>
            <p className="mt-3 text-sm font-semibold text-white/90">
              Because we deserve better.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid gap-3 sm:grid-cols-2"
          >
            {[
              { t: "Leads Generated", d: "New inquiries from your campaigns" },
              { t: "Appointments Booked", d: "Qualified buyers on your calendar" },
              { t: "Response Time", d: "How fast every lead gets a reply" },
              { t: "Qualified Leads", d: "Buyers with budget and intent" },
              { t: "Cost Per Lead", d: "What each inquiry actually costs" },
              { t: "Sales Pipeline", d: "Deals moving toward closing" },
            ].map((m) => (
              <li
                key={m.t}
                className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <div className="font-display text-sm font-bold text-[color:var(--brand-orange)]">
                  {m.t}
                </div>
                <div className="mt-1 text-xs text-white/70">{m.d}</div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}

function Founding() {
  const perks = [
    "Complete done-for-you setup",
    "Personalized onboarding",
    "Priority support",
    "Direct access to the founders",
    "Founding-client pricing",
    "Early access + lifetime adopter benefits",
  ];
  return (
    <Section id="founding" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
          Founding Client Program
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          Become one of our first <span className="text-gradient-brand">5 founding
          clients.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We're opening BaMo to only 5 founding clients this month — across CALABARZON
          and nationwide. It's a hands-on, done-for-you service, so we keep each cohort
          small.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {perks.map((p) => (
          <div
            key={p}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
          >
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-orange)]" />
            <span className="text-sm">{p}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        Your feedback shapes BaMo's future while your business runs on a dedicated AI
        growth team.
      </p>
    </Section>
  );
}

// KEEP — Reserve my spot CTA + apply form (stubbed handler)
const LEAD_INTAKE_WEBHOOK_URL = "";

function CTA() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (LEAD_INTAKE_WEBHOOK_URL) {
      fetch(LEAD_INTAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
    }
    form.reset();
    alert("Thanks! We'll be in touch within 1 business day.");
  };

  return (
    <Section id="apply" className="py-20 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-elegant sm:p-14"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 -top-32 h-64 bg-gradient-brand opacity-20 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
              Only 5 founding spots
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Ready to grow your real estate business?{" "}
              <span className="text-gradient-brand">Reserve your spot.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Let BaMo handle your website, marketing, ads, content, follow-up and
              appointments — so you can focus on closing more deals.
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              Marketing. AI. Follow-up. Appointments. All handled for you.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <p className="font-display text-lg font-bold">Apply to become a founding client</p>
            <div className="mt-4 grid gap-3">
              <Input name="fullName" required placeholder="Full name" className="h-11" />
              <Input name="email" type="email" required placeholder="Email" className="h-11" />
              <Input name="phone" required placeholder="Phone" className="h-11" />
              <Input name="company" placeholder="Brokerage / company" className="h-11" />
              <Input name="city" placeholder="City / area" className="h-11" />
              <Button
                type="submit"
                size="lg"
                className="mt-2 h-12 w-full rounded-full bg-gradient-brand text-white shadow-glow hover:opacity-95"
              >
                Reserve my spot <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Real estate agents & brokers only · We reply within 1 business day
              </p>
            </div>
          </form>
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
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5" />
          © {new Date().getFullYear()} BayMo · Built for Philippine real estate.
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
        <Included />
        <Replaces />
        <HowItWorks />
        <BuiltForPH />
        <Founding />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
