// Sample-data recreations of the BaMo CRM and agent app for the /teams page.
// Coded (not screenshots) so they stay crisp at every width and carry no real lead data.
import {
  BellRing,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  UserCheck,
  Users,
} from "lucide-react";

export function SampleTag({ label = "Sample data" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
  );
}

function Temp({ t }: { t: "Hot" | "Warm" | "New" }) {
  const cls =
    t === "Hot"
      ? "bg-gradient-brand text-white"
      : t === "Warm"
        ? "bg-[color:var(--tint-peach)] text-[color:var(--brand-red)]"
        : "bg-secondary text-secondary-foreground";
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cls}`}
    >
      {t}
    </span>
  );
}

/** Manager dashboard preview: the hero visual and the "Visibility" section. */
export function DashboardMock({ compact = false }: { compact?: boolean }) {
  const stats = [
    { label: "New inquiries", value: "148", note: "this week" },
    { label: "Unassigned", value: "6", note: "needs an owner", warn: true },
    { label: "BaMo first reply", value: "0:42", note: "median, min:sec" },
    { label: "Stalled leads", value: "9", note: "no contact in 14 days", warn: true },
  ];
  const agents = [
    { name: "Agent R.", open: 18, follow: "12m", viewings: 5 },
    { name: "Agent M.", open: 15, follow: "25m", viewings: 4 },
    { name: "Agent J.", open: 21, follow: "3h", viewings: 2, slow: true },
    { name: "Agent L.", open: 12, follow: "18m", viewings: 6 },
  ];
  const stages = [
    { name: "New", n: 41 },
    { name: "In contact", n: 58 },
    { name: "Qualified", n: 27 },
    { name: "Viewing", n: 14 },
    { name: "Negotiating", n: 6 },
  ];
  return (
    <div className="relative rounded-3xl border border-border bg-card p-4 shadow-elegant sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <div>
          <div className="font-display text-sm font-bold text-foreground">Team overview</div>
          <div className="text-xs text-muted-foreground">All projects · This week</div>
        </div>
        <SampleTag />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background p-3">
            <div className="text-[11px] font-medium text-muted-foreground">{s.label}</div>
            <div
              className={`mt-1 font-display text-2xl font-extrabold ${
                s.warn ? "text-[color:var(--brand-red)]" : "text-[color:var(--brand-navy)]"
              }`}
            >
              {s.value}
            </div>
            <div className="text-[10px] text-muted-foreground">{s.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background p-3">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Leads by agent</span>
          <span className="hidden sm:inline">Open · Agent follow-up · Viewings</span>
        </div>
        <ul className="mt-2 divide-y divide-border">
          {agents.map((a) => (
            <li key={a.name} className="flex items-center justify-between py-2 text-sm">
              <span className="flex items-center gap-2 font-medium text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--brand-navy)] text-[10px] font-bold text-white">
                  {a.name.split(" ")[1]?.[0]}
                </span>
                {a.name}
              </span>
              <span className="flex items-center gap-3 text-xs text-muted-foreground sm:gap-5">
                <span className="w-6 text-right font-semibold text-foreground">{a.open}</span>
                <span
                  className={`w-8 text-right font-semibold ${
                    a.slow ? "text-[color:var(--brand-red)]" : "text-foreground"
                  }`}
                >
                  {a.follow}
                </span>
                <span className="w-6 text-right font-semibold text-foreground">{a.viewings}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {!compact && (
        <div className="mt-4 rounded-xl border border-border bg-background p-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Pipeline by stage
          </div>
          <ul className="mt-2 space-y-2">
            {stages.map((p) => (
              <li key={p.name} className="text-xs">
                <div className="flex justify-between text-foreground">
                  <span className="font-medium">{p.name}</span>
                  <span className="font-semibold">{p.n}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-gradient-brand"
                    style={{ width: `${Math.round((p.n / 58) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** The agent's daily list in the BaMo mobile app. */
export function AgentPhoneMock() {
  const clients = [
    {
      name: "Buyer C.",
      note: "2BR, ₱4.5M budget · Pag-IBIG",
      next: "Call today",
      icon: Phone,
      t: "Hot" as const,
    },
    {
      name: "Buyer D.",
      note: "Asked for Project A price list",
      next: "Send sample computation",
      icon: MessageSquare,
      t: "Warm" as const,
    },
    {
      name: "Buyer E.",
      note: "Tripping requested",
      next: "Viewing Sat · 10:00 AM",
      icon: CalendarCheck,
      t: "Warm" as const,
    },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[300px] rounded-[2.2rem] border-[6px] border-[color:var(--brand-navy)] bg-background p-3 shadow-elegant">
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[color:var(--brand-navy)]/20" />
      <div className="rounded-2xl bg-[color:var(--brand-navy)] p-4 text-white">
        <div className="text-xs text-white/70">Magandang umaga,</div>
        <div className="font-display text-lg font-bold">Agent R.</div>
        <div className="mt-2 text-xs text-white/80">
          <span className="font-bold text-[color:var(--brand-orange)]">3 clients</span> need you
          today · <span className="font-bold text-[color:var(--brand-orange)]">1 viewing</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          My clients today
        </span>
        <SampleTag />
      </div>
      <ul className="mt-2 space-y-2">
        {clients.map((c) => (
          <li key={c.name} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{c.name}</span>
              <Temp t={c.t} />
            </div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">{c.note}</div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[color:var(--brand-navy)]">
              <c.icon className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
              {c.next}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center gap-2 rounded-xl bg-[color:var(--tint-cream)] p-2.5 text-[11px] text-foreground">
        <BellRing className="h-3.5 w-3.5 flex-shrink-0 text-[color:var(--brand-orange)]" />
        Project A brochure & price list ready to send
      </div>
    </div>
  );
}

/** Small cards used in the six-step lead journey. */
export const journeyCards = {
  inquiry: (
    <div className="rounded-xl bg-secondary p-3 text-xs text-foreground">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Messenger · from your ad
      </div>
      <p className="mt-1">"Hi! Available pa po ba ang 2BR sa Project A? Magkano monthly?"</p>
    </div>
  ),
  reply: (
    <div className="rounded-xl bg-[color:var(--brand-navy)] p-3 text-xs text-white">
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/60">
        <span>Reply sent</span>
        <span className="flex items-center gap-1 text-[color:var(--brand-orange)]">
          <Clock className="h-3 w-3" /> 0:35
        </span>
      </div>
      <p className="mt-1">
        "Hello po! Yes, available pa. Para ma-compute ko, cash, bank or Pag-IBIG po?"
      </p>
    </div>
  ),
  tagged: (
    <div className="rounded-xl border border-border bg-background p-3 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">Buyer C.</span>
        <Temp t="Warm" />
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["Project A", "FB ad · 2BR promo", "Pag-IBIG"].map((c) => (
          <span
            key={c}
            className="rounded-full bg-[color:var(--tint-sky)] px-2 py-0.5 text-[10px] font-medium text-[color:var(--brand-navy)]"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  ),
  assigned: (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-3 text-xs">
      <UserCheck className="h-4 w-4 text-[color:var(--brand-orange)]" />
      <span className="text-foreground">
        Assigned to <span className="font-semibold">Agent R.</span>
      </span>
    </div>
  ),
  agent: (
    <div className="rounded-xl border border-border bg-background p-3 text-xs">
      <div className="font-semibold text-foreground">Next step</div>
      <div className="mt-1 flex items-center gap-1.5 text-[color:var(--brand-navy)]">
        <Phone className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" /> Call today · wants Sat
        viewing
      </div>
    </div>
  ),
  visible: (
    <div className="rounded-xl border border-border bg-background p-3 text-xs">
      <div className="flex items-center gap-1.5 font-semibold text-foreground">
        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Viewing booked · Sat 10:00 AM
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-muted-foreground">
        <Users className="h-3.5 w-3.5" /> Visible to the sales manager
      </div>
    </div>
  ),
};
