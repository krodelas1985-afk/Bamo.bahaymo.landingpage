import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Handshake, Sparkles } from "lucide-react";
import {
  Action,
  InquiryLink,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";
import { pageHead, SUMMIT_PATH } from "@/lib/site";

export const Route = createFileRoute("/events/innovation-summit-2026")({
  head: () =>
    pageHead(
      "BaMo Real Estate Innovation Summit 2026",
      "Explore the planned BaMo Real Estate Innovation Summit 2026, focused on helping Philippine real estate navigate the AI era. Ask for event updates.",
      SUMMIT_PATH,
      "/og-summit.png",
    ),
  component: Summit,
});

function Summit() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <Section className="bg-[color:var(--brand-navy)] text-white">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="inline-block rounded-full border border-white/25 px-4 py-2 text-xs font-semibold">
                BaMo Innovation · Planned event
              </p>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                BaMo Real Estate Innovation Summit 2026
              </h1>
              <p className="mt-6 text-xl font-semibold text-white/90">
                Helping Philippine Real Estate Navigate the AI Era
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
                A planned gathering for agents, brokers, developers, and industry specialists to
                explore practical technology adoption, digital marketing, and connected sales
                operations.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/20 bg-white/5 p-7">
              <h2 className="font-display text-xl font-bold">Event details are being developed.</h2>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Date & venue", "To be announced"],
                  ["Speakers & agenda", "To be announced"],
                  ["Registration", "Not yet open on this website"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-white/60">{label}</dt>
                    <dd className="mt-1 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7">
                <InquiryLink intent="summit_updates">Ask for Summit Updates</InquiryLink>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-white/70">
                Opens Messenger. Ask the BaMo team about updates. This does not register you,
                subscribe you automatically, or reserve a seat.
              </p>
            </div>
          </div>
        </Section>
        <Section className="bg-white">
          <SectionHeading
            eyebrow="Why BaMo is convening it"
            title="Making innovation accessible—together."
          >
            The Summit is part of BaMo's wider mission: helping Philippine real estate professionals
            use technology, understand what matters, and collaborate as the industry changes.
          </SectionHeading>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Technology alone isn't enough. Practical knowledge, sales experience, marketing
            expertise, and industry relationships help people apply it well. This planned event
            brings those perspectives into the same conversation.
          </p>
          <div className="mt-7">
            <Action href="/about" secondary>
              About BaMo's Mission
            </Action>
          </div>
        </Section>
        <Section className="bg-[color:var(--tint-cream)]">
          <SectionHeading
            eyebrow="Planned discussion areas"
            title="Practical questions. Useful perspectives."
          >
            These areas reflect the Summit's direction, not a confirmed session schedule.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "AI in everyday real estate work",
                body: "How AI can support buyer responses, follow-ups, and sales operations while people remain involved.",
              },
              {
                icon: GraduationCap,
                title: "Digital marketing & technology adoption",
                body: "Understanding the tools and skills that matter, without needing to become an expert in every platform.",
              },
              {
                icon: Handshake,
                title: "Industry collaboration",
                body: "Connecting agents, brokers, developers, marketing specialists, and technology partners around practical challenges.",
              },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl border border-border bg-white p-6">
                <card.icon aria-hidden className="h-7 w-7 text-[color:var(--brand-navy)]" />
                <h3 className="mt-5 font-display text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="Who it is for"
            title="A conversation across Philippine real estate."
          />
          <ul className="mt-8 grid gap-4 text-sm font-medium sm:grid-cols-2">
            {[
              "Individual agents and brokers",
              "Brokerages and realty teams",
              "Developer sales and marketing teams",
              "Sales, marketing, education, and technology specialists",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-border bg-white p-5">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-white p-6">
            <h3 className="font-display text-xl font-bold">Speakers and programme</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Confirmed speakers, session topics, and the event programme will be published here
              when available. No speakers or affiliations are being announced yet.
            </p>
          </div>
        </Section>
        <Section id="partners" className="bg-[color:var(--tint-sky)]">
          <SectionHeading
            eyebrow="Help shape the conversation"
            title="Collaborate with the Summit."
          >
            We welcome inquiries from organizations interested in supporting practical innovation in
            Philippine real estate.
          </SectionHeading>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-display text-2xl font-bold">Sponsorship inquiries</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ask the BaMo team about sponsorship opportunities and the event's current planning
                status. Packages and participation terms will be confirmed directly.
              </p>
              <div className="mt-6">
                <InquiryLink intent="summit_sponsor" secondary>
                  Discuss Summit Sponsorship
                </InquiryLink>
              </div>
            </article>
            <article className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-display text-2xl font-bold">Industry partnerships</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Propose a technology, education, marketing, or industry collaboration. Share your
                organization and the practical contribution you have in mind.
              </p>
              <div className="mt-6">
                <InquiryLink intent="summit_partner" secondary>
                  Propose a Partnership
                </InquiryLink>
              </div>
            </article>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Both inquiry paths open BaMo's Messenger channel. No sponsorship or partnership is
            confirmed by clicking.
          </p>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="Before you plan your attendance"
            title="What is confirmed right now?"
          />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              The event name and theme describe BaMo's planned initiative. Date, venue, format,
              speakers, ticket terms, and registration instructions will be announced when
              confirmed.
            </p>
            <p>
              Any confirmed participation details will be shown here before registration opens.
              Please do not treat an update inquiry as an attendee booking.
            </p>
          </div>
          <div className="mt-7">
            <InquiryLink intent="summit_updates">Ask the BaMo Team for Updates</InquiryLink>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
