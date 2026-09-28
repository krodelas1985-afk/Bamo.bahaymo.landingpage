// Landing-page outbound links, shared by the agent page (/) and the teams page (/teams).

export const LEAD_INTAKE_WEBHOOK_URL = "https://n8n-bahaymo.onrender.com/webhook/bamo-landing-lead";

// BaMo Philippines Facebook page. BayMo (the B2B campaign) answers here and books demos.
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
