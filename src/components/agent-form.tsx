import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LEAD_INTAKE_WEBHOOK_URL, messengerInquiryUrl } from "@/lib/links";

export function AgentForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const inFlight = useRef(false);
  const [kind, setKind] = useState("demo");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    inFlight.current = true;
    setState("sending");
    try {
      const response = await fetch(LEAD_INTAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Preserve the existing agent payload keys for the established intake workflow.
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Lead intake did not accept the request");
      form.reset();
      setState("sent");
    } catch {
      setState("failed");
    } finally {
      inFlight.current = false;
    }
  }

  if (state === "sent")
    return (
      <div role="status" className="rounded-2xl border border-border bg-background p-7 text-center">
        <CheckCircle2 aria-hidden className="mx-auto h-10 w-10 text-[color:var(--brand-navy)]" />
        <h3 className="mt-4 font-display text-xl font-bold">Your request has been received.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A BaMo team member will follow up about your{" "}
          {kind === "founding" ? "founding-client application" : "demo request"}. This is a request,
          not a confirmed booking.
        </p>
        <a
          href={messengerInquiryUrl("agent_demo")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-semibold underline"
        >
          Continue in Messenger →
        </a>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={state === "sending"}
      className="rounded-2xl border border-border bg-background p-6"
    >
      <h3 className="font-display text-xl font-bold">Let's talk about your setup.</h3>
      <div className="mt-5 grid gap-4">
        <div>
          <label htmlFor="agent-intent" className="mb-1.5 block text-sm font-medium">
            I'm interested in
          </label>
          <select
            id="agent-intent"
            name="requestType"
            value={kind}
            disabled={state === "sending"}
            onChange={(e) => setKind(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm"
          >
            <option value="demo">A demo for my business</option>
            <option value="founding">The founding-client program</option>
          </select>
        </div>
        {[
          { name: "fullName", label: "Full name", type: "text", complete: "name", required: true },
          { name: "email", label: "Email", type: "email", complete: "email", required: true },
          { name: "phone", label: "Mobile number", type: "tel", complete: "tel", required: true },
          {
            name: "company",
            label: "Brokerage / company (optional)",
            type: "text",
            complete: "organization",
            required: false,
          },
          {
            name: "city",
            label: "City / area (optional)",
            type: "text",
            complete: "address-level2",
            required: false,
          },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={`agent-${field.name}`} className="mb-1.5 block text-sm font-medium">
              {field.label}
            </label>
            <Input
              id={`agent-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.complete}
              required={field.required}
              className="h-11 bg-white"
            />
          </div>
        ))}
        <p className="text-xs leading-relaxed text-muted-foreground">
          Your details are sent to BaMo to respond to this inquiry.{" "}
          <a href="/privacy" className="font-semibold underline">
            Read the website privacy notice.
          </a>
        </p>
        <Button
          type="submit"
          disabled={state === "sending"}
          className="min-h-12 rounded-full bg-gradient-brand text-white"
        >
          {state === "sending"
            ? "Sending…"
            : kind === "founding"
              ? "Send My Application"
              : "Request a Demo"}
          <ArrowRight aria-hidden size={16} />
        </Button>
        {state === "failed" ? (
          <p role="alert" className="text-sm leading-relaxed text-[color:var(--brand-red)]">
            We couldn't confirm receipt. Your details are still here; please try again. You can also{" "}
            <a
              href={messengerInquiryUrl("agent_demo")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              message BaMo
            </a>
            .
          </p>
        ) : null}
        <p className="text-center text-xs text-muted-foreground">
          For individual agents and brokers.{" "}
          <a href="/teams#demo" className="font-semibold underline">
            Request a team demo →
          </a>
        </p>
      </div>
    </form>
  );
}
