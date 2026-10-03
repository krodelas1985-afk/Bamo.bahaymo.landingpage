import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X, Sparkles, GraduationCap, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/baymo-logo.png.asset.json";
import { SUMMIT_PATH } from "@/lib/site";
import { messengerInquiryUrl } from "@/lib/links";

export function Action({
  href,
  children,
  secondary = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <Button
      asChild
      size="lg"
      variant={secondary ? "outline" : "default"}
      className={`min-h-12 h-auto whitespace-normal rounded-full px-6 py-3 text-sm font-semibold ${secondary ? "border-border bg-white text-foreground hover:bg-secondary" : "bg-gradient-brand text-white shadow-glow hover:opacity-95"} ${className}`}
    >
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </a>
    </Button>
  );
}

export function SiteHeader({
  audience,
  demoHref = "/#apply",
}: {
  audience?: "agents" | "teams";
  demoHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#audiences", label: "Solutions" },
    { href: "/#how", label: "How it works" },
    { href: "/#pricing", label: "Pricing" },
    { href: SUMMIT_PATH, label: "Summit 2026" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <a href="/" aria-label="BaMo home" className="shrink-0">
          <img
            src={logo.url}
            alt="BaMo — Real estate made simple"
            width="137"
            height="48"
            className="h-8 w-auto sm:h-10"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-xs font-semibold text-muted-foreground xl:flex"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-border bg-card p-1 text-xs font-semibold sm:flex">
            <a
              href="/#audiences"
              aria-current={audience === "agents" ? "page" : undefined}
              className={`rounded-full px-3 py-2 ${audience === "agents" ? "bg-[color:var(--brand-navy)] text-white" : "text-muted-foreground"}`}
            >
              For Agents
            </a>
            <a
              href="/teams"
              aria-current={audience === "teams" ? "page" : undefined}
              className={`rounded-full px-3 py-2 ${audience === "teams" ? "bg-[color:var(--brand-navy)] text-white" : "text-muted-foreground"}`}
            >
              For Teams
            </a>
          </div>
          <a
            href={demoHref}
            {...(demoHref.startsWith("https:")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label="Request a Demo"
            className="rounded-full bg-[color:var(--brand-navy)] px-4 py-3 text-xs font-semibold text-white hover:opacity-90"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Request a Demo</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border xl:hidden"
          >
            {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-4 xl:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1 sm:grid-cols-2">
            {[
              ...links,
              { href: "/#audiences", label: "For Agents" },
              { href: "/teams", label: "For Brokerages & Developers" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const links = [
    ["For Agents", "/#audiences"],
    ["For Teams", "/teams"],
    ["Pricing", "/#pricing"],
    ["About BaMo", "/about"],
    ["Summit 2026", SUMMIT_PATH],
    ["Request a Demo", "/#apply"],
    ["Privacy", "/privacy"],
  ];
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div>
          <a href="/" aria-label="BaMo home">
            <img src={logo.url} alt="BaMo" width="137" height="48" className="h-10 w-auto" />
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Making innovation accessible to Philippine real estate.
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            © {new Date().getFullYear()} BaMo · Built for Philippine real estate.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 content-start gap-x-6 gap-y-4 text-sm font-medium sm:grid-cols-3"
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:underline">
              {label}
            </a>
          ))}
          <a
            href="https://bahaymo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            BahayMo Marketplace ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-navy)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

const pillars = [
  {
    icon: Sparkles,
    name: "BaMo Technology",
    status: "Current commercial offer",
    title: "Tools for everyday work.",
    body: "Connected lead management, AI-assisted responses, follow-ups, and tools that help real estate professionals manage and grow their business.",
    href: "/#included",
    cta: "Explore the technology",
  },
  {
    icon: GraduationCap,
    name: "BaMo Learning",
    status: "In development",
    title: "Knowledge you can put to use.",
    body: "We're developing practical learning around AI, digital marketing, and technology adoption, so professionals can understand what matters and apply it to their work.",
    href: "/about#learning",
    cta: "See our learning direction",
  },
  {
    icon: Users,
    name: "BaMo Innovation",
    status: "Summit planned",
    title: "Connections that move us forward.",
    body: "Through the planned Innovation Summit and future collaborations, we aim to bring real estate professionals, specialists, and technology partners together.",
    href: SUMMIT_PATH,
    cta: "Explore Summit 2026",
  },
];

export function Pillars() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {pillars.map((p) => (
        <article
          key={p.name}
          className="flex flex-col rounded-2xl border border-border bg-white p-6"
        >
          <div className="flex items-center gap-3">
            <p.icon aria-hidden className="h-6 w-6 text-[color:var(--brand-navy)]" />
            <h3 className="font-display text-lg font-bold">{p.name}</h3>
          </div>
          <p className="mt-4 text-xs font-semibold text-[color:var(--brand-navy)]">{p.status}</p>
          <p className="mt-4 font-semibold">{p.title}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          <a
            href={p.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            {p.cta}
            <ArrowRight aria-hidden size={16} />
          </a>
        </article>
      ))}
    </div>
  );
}

export function MessengerNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
      <MessageSquare aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      {children}
    </p>
  );
}

export function SummitFeature() {
  return (
    <Section id="summit">
      <div className="rounded-[2rem] bg-[color:var(--brand-navy)] p-7 text-white sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
              BaMo Innovation · Planned event
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              BaMo Real Estate Innovation Summit 2026
            </h2>
            <p className="mt-5 text-lg font-semibold text-white">
              Helping Philippine Real Estate Navigate the AI Era
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
              A planned gathering for agents, brokers, developers, and industry partners to explore
              practical uses of AI, marketing technology, and connected sales tools.
            </p>
          </div>
          <div>
            <p className="mb-5 text-sm text-white/75">
              Date, venue, speakers, and registration details will be announced when confirmed.
            </p>
            <Action href={SUMMIT_PATH}>View Summit Details</Action>
            <a
              href={`${SUMMIT_PATH}#partners`}
              className="mt-5 block text-sm font-semibold underline underline-offset-4"
            >
              Partner with the Summit →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function InquiryLink({
  intent,
  children,
  secondary = false,
}: {
  intent: Parameters<typeof messengerInquiryUrl>[0];
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Action href={messengerInquiryUrl(intent)} external secondary={secondary}>
      {children}
    </Action>
  );
}
