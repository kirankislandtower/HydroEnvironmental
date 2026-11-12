import { company } from "@/lib/content";

export function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.47 3.5 1.36 5.02L2 22l5.1-1.33A10.03 10.03 0 0 0 12.04 22C17.58 22 22 17.52 22 12S17.58 2 12.04 2zm0 18.3c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.03.79.81-2.95-.2-.3A8.25 8.25 0 0 1 3.74 12c0-4.57 3.73-8.3 8.3-8.3 4.56 0 8.25 3.73 8.25 8.3s-3.69 8.3-8.25 8.3z" />
    </svg>
  );
}

export function PhoneIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// Floating Call + WhatsApp buttons, bottom-right (used on the Contact page).
// Plain links — no JS. The label slides out on hover (desktop); on phones only the round icons show.
export default function QuickContact() {
  return (
    <div className="qc" aria-label="Quick contact">
      <a className="qc-btn qc-wa" href={company.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp: ${company.phone}`}>
        <span className="qc-label">WhatsApp us</span>
        <span className="qc-ico">
          <WhatsAppIcon />
        </span>
      </a>
      <a className="qc-btn qc-call" href={company.phoneHref} aria-label={`Call ${company.phone}`}>
        <span className="qc-label">{company.phone}</span>
        <span className="qc-ico">
          <PhoneIcon />
        </span>
      </a>
    </div>
  );
}
