// Landing-page outbound links, shared by the agent page (/) and the teams page (/teams).

export const LEAD_INTAKE_WEBHOOK_URL = "https://n8n-bahaymo.onrender.com/webhook/bamo-landing-lead";

// BaMo Philippines Facebook page for demos and industry inquiries.
const BAMO_PH_PAGE_ID = "939438402575577";

// `ref` is stored by the CRM Messenger webhook in messenger_referrals, so each
// demo conversation can be traced back to the button that started it.
// Keep refs to letters, digits and underscores.
export type TeamsDemoRef =
  | "teams_nav"
  | "teams_hero"
  | "teams_journey"
  | "teams_scenarios"
  | "teams_close"
  | "teams_form_thanks";

export function messengerDemoUrl(ref: TeamsDemoRef): string {
  return `https://m.me/${BAMO_PH_PAGE_ID}?ref=${ref}`;
}

export type SiteInquiryRef =
  | "agent_demo"
  | "pricing"
  | "summit_updates"
  | "summit_sponsor"
  | "summit_partner"
  | "privacy"
  | "about_partner";

export function messengerInquiryUrl(ref: SiteInquiryRef): string {
  return `https://m.me/${BAMO_PH_PAGE_ID}?ref=${ref}`;
}
