import { createFileRoute } from "@tanstack/react-router";
import { InquiryLink, Section, SiteFooter, SiteHeader } from "@/components/site";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Website Inquiry Privacy Notice | BaMo",
      "Understand the information requested by BaMo's website forms and how to contact BaMo about your inquiry details.",
      "/privacy",
    ),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <Section>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Website forms and inquiry links
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold">
              Website inquiry privacy notice
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              This notice describes the information requested by this marketing website. It is not a
              statement about all BaMo product or account data.
            </p>
            <div className="mt-9 space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Information in your request
                </h2>
                <p className="mt-3">
                  The agent form asks for your name, email, mobile number, inquiry type, and
                  optional company and area. The team form asks for your name, company, organization
                  type, team-size range, email or mobile number, and an optional description of your
                  challenge.
                </p>
              </section>
              <section>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Where the details go
                </h2>
                <p className="mt-3">
                  Submitting a form sends these details to BaMo's existing lead-intake workflow,
                  hosted at n8n-bahaymo.onrender.com, so the team can respond to your inquiry.
                  Please avoid including buyer records, passwords, or other sensitive information in
                  an inquiry.
                </p>
              </section>
              <section>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Messenger and external destinations
                </h2>
                <p className="mt-3">
                  Messenger links open Meta's Messenger service. They include a referral identifying
                  the website button you used. Information you send there is also handled within
                  that service. Marketplace links open bahaymo.com. This website also loads fonts
                  from Google Fonts.
                </p>
              </section>
              <section>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Questions about your information
                </h2>
                <p className="mt-3">
                  Contact the BaMo team to ask about your inquiry details, their handling and
                  retention, or a correction or deletion request. This website does not publish a
                  confirmed retention period. Ask the team for any additional privacy information
                  relevant to your setup.
                </p>
                <div className="mt-5">
                  <InquiryLink intent="privacy" secondary>
                    Contact BaMo about Privacy
                  </InquiryLink>
                </div>
                <p className="mt-3 text-xs">Opens Messenger.</p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
