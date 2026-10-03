import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Database,
  Flag,
  Globe,
  Handshake,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Action,
  InquiryLink,
  Pillars,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  SummitFeature,
} from "@/components/site";
import { AgentForm } from "@/components/agent-form";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "BaMo | AI Growth Tools for Philippine Real Estate",
      "Manage real estate leads, AI-assisted responses, follow-ups, and marketing with BaMo. Built for Philippine agents, brokers, and developer teams.",
      "/",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BaMo",
          url: "https://bamo.bahaymo.com",
          logo: "https://bamo.bahaymo.com/baymo-logo.png",
          description:
            "Philippine-built technology and growth platform for real estate professionals.",
        }),
      },
    ],
  }),
  component: Landing,
});

function ProductPreview() {
  return (
    <div className="relative min-w-0 rounded-[2rem] border border-border bg-white p-5 shadow-elegant sm:p-7">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] font-display font-extrabold text-white">
            B
          </div>
          <div>
            <p className="font-display font-bold">BaMo</p>
            <p className="text-xs text-muted-foreground">A connected sales workflow</p>
          </div>
        </div>
        <Sparkles aria-hidden className="h-5 w-5 shrink-0 text-[color:var(--brand-navy)]" />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Know who needs your attention
      </p>
      <ul className="mt-4 space-y-3">
        {[
          {
            name: "Joanna R.",
            text: "Asked about a 2BR in Sta. Rosa",
            next: "Arrange a viewing",
            tag: "Hot",
          },
          {
            name: "Mark D.",
            text: "Replied to your Cavite campaign",
            next: "Follow up on preferences",
            tag: "Warm",
          },
          {
            name: "Liza P.",
            text: "Requested a price list",
            next: "Share project details",
            tag: "Warm",
          },
        ].map((lead) => (
          <li key={lead.name} className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold">{lead.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{lead.text}</p>
              </div>
              <span className="rounded-full bg-[color:var(--tint-cream)] px-2.5 py-1 text-xs font-semibold text-[color:var(--brand-navy)]">
                {lead.tag}
              </span>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs font-medium">
              <ArrowRight aria-hidden size={13} />
              {lead.next}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-xl bg-[color:var(--brand-navy)] p-4 text-white">
        <p className="text-xs text-white/70">Your team stays in the process</p>
        <p className="mt-2 text-sm font-semibold">
          AI supports the first response.
          <br />
          People build the buyer relationship.
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Illustrative workflow · Sample data · Not a live dashboard
      </p>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <Section id="top" className="bg-hero pt-12 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-[color:var(--brand-navy)]">
                <Flag aria-hidden size={14} />
                Built for Philippine real estate
              </p>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
                Your <span className="text-gradient-brand">AI Growth Team</span> for Real Estate.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                BaMo brings lead management, AI-assisted responses, follow-ups, and marketing
                support into one connected system—so you and your team can spend more time working
                with buyers and growing your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Action href="#apply">Request a Demo</Action>
                <Action href="#how" secondary>
                  See How It Works
                </Action>
              </div>
              <ul className="mt-7 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  "Organize your leads",
                  "Support buyer conversations",
                  "Keep follow-ups moving",
                  "Give teams clear visibility",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <CheckCircle2
                      aria-hidden
                      size={16}
                      className="shrink-0 text-[color:var(--brand-navy)]"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <ProductPreview />
          </div>
        </Section>

        <Section id="audiences" className="bg-white">
          <SectionHeading
            eyebrow="For the way you work"
            title="Built for the way you sell real estate."
          >
            Whether you work independently, lead a brokerage, or manage a developer sales team, BaMo
            helps keep inquiries, follow-ups, and people connected.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Users,
                name: "Individual agents & brokers",
                body: "Keep leads organized, support buyer conversations, and know who to follow up with next.",
                href: "#included",
                cta: "Explore BaMo for Agents",
              },
              {
                icon: Handshake,
                name: "Brokerages & realty teams",
                body: "Give each lead an owner and see how your agents are following through.",
                href: "/teams",
                cta: "Explore BaMo for Teams",
              },
              {
                icon: Building2,
                name: "Developer sales teams",
                body: "Connect project inquiries with the people handling them and understand what happens next.",
                href: "/teams#scenarios",
                cta: "Explore the Developer Workflow",
              },
            ].map((card) => (
              <article
                key={card.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <card.icon aria-hidden className="h-7 w-7 text-[color:var(--brand-navy)]" />
                <h3 className="mt-5 font-display text-xl font-bold">{card.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
                <a href={card.href} className="mt-6 text-sm font-semibold hover:underline">
                  {card.cta} →
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section className="bg-[color:var(--tint-cream)]">
          <SectionHeading
            eyebrow="More room for the work that matters"
            title="Stop doing everything yourself."
          >
            Inquiries arrive while you're in meetings, follow-ups pile up, and buyer details get
            scattered across messages and spreadsheets. BaMo helps organize the routine work so you
            can focus on conversations that need your attention.
          </SectionHeading>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              [
                "Slow first responses",
                "Buyers reach out while you're showing properties or meeting clients. Support the first conversation without losing sight of the person behind it.",
              ],
              [
                "Scattered lead details",
                "Keep buyer information and conversations together instead of piecing the story together from separate inboxes.",
              ],
              [
                "Missed follow-ups",
                "Know which prospects need a next step, with lead organization and follow-up support.",
              ],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <a href="#how" className="mt-7 inline-block text-sm font-semibold hover:underline">
            See the connected workflow →
          </a>
        </Section>

        <Section id="how">
          <SectionHeading
            eyebrow="Capture → respond → organize → act"
            title="From first inquiry to the next sales conversation."
          >
            Capture the inquiry, support the first response, organize buyer details, and keep the
            next action visible. Agents stay involved in advice, viewings, and the sales
            relationship.
          </SectionHeading>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Capture the inquiry", "Start with your connected Facebook page and lead sources."],
              [
                "Support the response",
                "AI-assisted replies help gather buyer questions, budget, and preferences.",
              ],
              [
                "Organize and follow up",
                "Keep details in your CRM and identify prospects who need attention.",
              ],
              [
                "Act and review",
                "People handle the next conversation, viewing, and sales decision.",
              ],
            ].map(([title, body], i) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--brand-navy)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Action href="#apply">See BaMo in Action</Action>
            <a href="/teams#journey" className="text-sm font-semibold hover:underline">
              See how a lead moves through a team →
            </a>
          </div>
        </Section>

        <Section id="included" className="bg-[color:var(--tint-sky)]">
          <SectionHeading
            eyebrow="Connected technology. Human expertise."
            title="Your tools and team, working together."
          >
            BaMo brings technology, automation, marketing, and lead management into one connected
            system so real estate professionals and their teams can work more efficiently. Keep the
            specialists and relationships that help your business grow.
          </SectionHeading>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Database,
                title: "Manage your leads",
                body: "CRM, lead prioritization, conversation history, and follow-up support help you keep the next action clear.",
                tag: "Technology",
              },
              {
                icon: Bot,
                title: "Support sales conversations",
                body: "AI-assisted responses and appointment workflows help move inquiries toward conversations with your team.",
                tag: "Technology",
              },
              {
                icon: Globe,
                title: "Grow your presence",
                body: "Property websites, marketing content, and Facebook ads management are part of BaMo's growth offer. Confirm the services included in your setup.",
                tag: "Tools & managed services",
              },
              {
                icon: Building2,
                title: "Coordinate your team",
                body: "Lead assignments, agent tools, and management visibility connect the work from inquiry to follow-through.",
                tag: "Team setup",
              },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center gap-3">
                  <card.icon aria-hidden className="h-6 w-6 text-[color:var(--brand-navy)]" />
                  <p className="text-xs font-semibold text-muted-foreground">{card.tag}</p>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display font-bold">Connected to BahayMo Marketplace</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Property discovery and listings at bahaymo.com. Ask about listing access in your
                BaMo offer.
              </p>
            </div>
            <a
              href="https://bahaymo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold hover:underline"
            >
              Explore BahayMo ↗
            </a>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Software, onboarding, and managed services have different scopes. We'll explain what is
            included before you commit. Advertising spend is paid separately by you.
          </p>
          <a href="#pricing" className="mt-5 inline-block text-sm font-semibold hover:underline">
            Find the right setup →
          </a>
        </Section>

        <Section>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Philippine-built"
                title="Built for Philippine real estate. Grounded in everyday work."
              >
                Facebook inquiries, buyer follow-ups, agent coordination, and sales visibility: BaMo
                focuses on the practical work behind the relationships.
              </SectionHeading>
              <p className="mt-6 font-display text-xl font-bold text-[color:var(--brand-navy)]">
                Para sa bawat Ahenteng Pilipino.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Technology should help people do their work well. Explore the tools, how your team
                fits in, and what setup looks like.
              </p>
              <div className="mt-7">
                <Action href="/teams#proof" secondary>
                  See Client Response Results
                </Action>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Published individual-agent results, with dates and limitations. Results vary.
              </p>
            </div>
            <img
              src="/images/teams/hero-team-mobile.jpg"
              alt="A real estate team reviewing project information together"
              width="1074"
              height="887"
              loading="lazy"
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
        </Section>

        <Section id="pricing" className="bg-[color:var(--tint-cream)]">
          <SectionHeading
            eyebrow="Offer, onboarding & pricing"
            title="Find the right BaMo setup for your business."
          >
            Understand the tools and support included in your offer, how onboarding works, and any
            services or advertising costs charged separately.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Agents & brokers
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Support for your everyday sales work.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Discuss the technology and growth services relevant to your business, with
                personalized onboarding. Ask for current pricing and what your offer includes.
              </p>
              <div className="mt-6">
                <InquiryLink intent="pricing" secondary>
                  Request Current Pricing
                </InquiryLink>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Opens Messenger. Ask the BaMo team about your setup.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Brokerages & developers
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold">
                A connected process for your team.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Team pricing depends on your team size and setup. Walk through lead sources,
                assignments, and management visibility in a team demo.
              </p>
              <div className="mt-6">
                <Action href="/teams#demo">Request a Team Demo</Action>
              </div>
            </article>
          </div>
          <div
            id="founding"
            className="mt-6 scroll-mt-24 rounded-2xl border border-border bg-white p-6"
          >
            <h3 className="font-display text-lg font-bold">
              Interested in the Founding Client Program?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              You can still inquire through the application form. The BaMo team will confirm current
              availability, pricing, and benefits before you commit.
            </p>
            <a href="#apply" className="mt-4 inline-block text-sm font-semibold hover:underline">
              Apply to Become a Founding Client →
            </a>
          </div>
        </Section>

        <Section id="vision" className="bg-[color:var(--tint-mint)]">
          <SectionHeading
            eyebrow="Technology. Knowledge. Collaboration."
            title="Helping Philippine Real Estate Move Forward in the AI Era."
          >
            Technology is changing how properties are marketed, how buyers communicate, and how real
            estate teams work. Keeping up can feel like another full-time job.
          </SectionHeading>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Agents, brokers, and developer teams should not have to become technology experts to
              stay competitive. BaMo helps make that change practical—with connected tools for
              everyday work and a growing focus on the knowledge people need to use them well.
            </p>
            <p>
              Our mission is to make innovation accessible to Philippine real estate. That means
              helping professionals manage leads and follow-ups today, while creating opportunities
              to understand new technology, learn from specialists, and collaborate across the
              industry.
            </p>
          </div>
          <Pillars />
          <a href="/about" className="mt-7 inline-block text-sm font-semibold hover:underline">
            Learn about BaMo's direction →
          </a>
          <details className="mt-8 rounded-2xl border border-border bg-white p-5">
            <summary className="cursor-pointer text-sm font-semibold">
              Our brand film: Powered by AI, Led by People
            </summary>
            <video
              controls
              playsInline
              preload="none"
              poster="/images/teams/hero-team.jpg"
              aria-label="BaMo brand film, powered by AI and led by people"
              className="mt-4 w-full rounded-xl"
            >
              <source src="/videos/hero-desktop.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <p className="mt-3 text-xs text-muted-foreground">
              A visual brand film. Explore the product workflow above for details of how BaMo
              supports your business.
            </p>
          </details>
        </Section>
        <SummitFeature />

        <Section id="faq" className="bg-white">
          <SectionHeading eyebrow="Before you start" title="A few things you may be wondering." />
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border px-5 sm:px-7">
            {[
              [
                "Is BaMo software or a managed service?",
                "BaMo is a technology and growth platform. The current offer also includes onboarding and growth services such as marketing support. Confirm the tools and services included in your specific offer before you commit.",
              ],
              [
                "Can we keep working with our ad agency?",
                "Yes. BaMo works on the inquiries your current ads produce. Discuss your existing process with the team; you do not need to stop working with your specialists.",
              ],
              [
                "Which channels do you start with?",
                "Facebook Messenger and Facebook ads are the starting point described in our teams workflow. We'll review your lead sources and supported connections during your demo.",
              ],
              [
                "What remains with me and my team?",
                "Your expertise, buyer relationships, advice, viewings, and sales decisions remain central. BaMo supports responses, organization, follow-ups, and visibility around that work.",
              ],
              [
                "How much does it cost?",
                "Ask for current pricing and the exact scope of your setup. Team pricing depends on team size and requirements. Advertising spend is paid separately by you.",
              ],
              [
                "Are Academy programs and Summit registration available?",
                "Learning initiatives are in development, and the Innovation Summit is planned. Dates, speakers, and registration details will be published when confirmed. Summit inquiries currently open Messenger; they do not reserve a seat.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="py-5">
                <summary className="cursor-pointer font-display text-base font-bold">{q}</summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="apply">
          <div className="grid items-center gap-8 rounded-[2rem] border border-border bg-white p-6 shadow-elegant sm:p-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Start with your business
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                See how BaMo fits your real estate business.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Tell us how you handle inquiries today. We'll walk through the tools, support, and
                setup relevant to your work.
              </p>
              <div className="mt-7">
                <InquiryLink intent="agent_demo" secondary>
                  Message BaMo
                </InquiryLink>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Opens Messenger. The BaMo team will help arrange your next step.
              </p>
            </div>
            <AgentForm />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
