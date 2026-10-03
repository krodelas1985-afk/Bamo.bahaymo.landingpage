import { createFileRoute } from "@tanstack/react-router";
import {
  Action,
  InquiryLink,
  Pillars,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";
import { pageHead, SUMMIT_PATH } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About BaMo | Philippine Real Estate Technology",
      "BaMo is a Philippine-built technology and growth platform making innovation accessible through tools, learning, and industry collaboration.",
      "/about",
    ),
  component: About,
});

function About() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <Section className="bg-hero">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                About BaMo
              </p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Making innovation accessible to{" "}
                <span className="text-gradient-brand">Philippine real estate.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Real estate is built on relationships. Useful technology should make the work around
                those relationships easier.
              </p>
              <div className="mt-8">
                <Action href="/#apply">See BaMo in Action</Action>
              </div>
            </div>
            <img
              src="/images/teams/hero-team-mobile.jpg"
              alt="Real estate professionals discussing project details"
              width="1074"
              height="887"
              className="rounded-[2rem]"
            />
          </div>
        </Section>
        <Section className="bg-white">
          <SectionHeading
            eyebrow="The work behind the relationships"
            title="Practical tools for a changing industry."
          >
            Inquiries arrive across digital channels, buyers expect quick responses, and teams need
            a clearer view of what happens next.
          </SectionHeading>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              BaMo is a Philippine-built technology and growth platform for real estate
              professionals. We help agents, brokers, and developer teams connect lead management,
              AI-assisted communication, follow-ups, marketing, and day-to-day sales operations.
            </p>
            <p>
              Our goal is practical: make useful technology easier to adopt and apply. Real estate
              professionals should be able to spend more time understanding buyers and building
              their businesses, without having to master every new tool themselves.
            </p>
            <p>
              We see AI as support for people and their work. Sales expertise, local knowledge,
              creative skill, and trusted relationships remain essential. BaMo's role is to help
              connect those strengths with tools and knowledge that make everyday work easier.
            </p>
          </div>
        </Section>
        <Section id="learning" className="bg-[color:var(--tint-mint)]">
          <SectionHeading
            eyebrow="Today and what comes next"
            title="Technology. Knowledge. Collaboration."
          >
            Our current commercial offer starts with technology and growth support. Learning
            initiatives and industry collaborations are developing around that foundation.
          </SectionHeading>
          <Pillars />
          <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            BaMo Learning is in development. Our direction includes practical AI education, digital
            marketing, and technology adoption. A course catalogue, Academy enrollment, and
            community membership are not yet being offered here.
          </p>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="BaMo Innovation"
            title="Helping the industry navigate the AI era."
          >
            Through the planned BaMo Real Estate Innovation Summit 2026, we aim to bring
            professionals, specialists, and partners together to explore practical ways forward.
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action href={SUMMIT_PATH}>Explore the Summit</Action>
            <InquiryLink intent="about_partner" secondary>
              Discuss a Partnership
            </InquiryLink>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Partnership inquiries open BaMo's Messenger channel.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
