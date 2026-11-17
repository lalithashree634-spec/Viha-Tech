import React from 'react';
import './TickerRibbon.scss';

const items = [
  "STATIC WEBSITE CREATION",
  "DYNAMIC WEB PLATFORMS",
  "BUSINESS EMAIL MIGRATION",
  "MICROSOFT 365 ENTERPRISE",
  "GOOGLE WORKSPACE SETUP",
  "CPANEL & LINUX HOSTING",
  "MICROSOFT INTUNE & AUTOPILOT",
  "AZURE CLOUD INFRASTRUCTURE",
  "DEFENDER & THREAT PROTECTION",
  "SIEM & LOG MONITORING",
  "EDR ENDPOINT SECURITY",
  "FULL IT ENVIRONMENT AUDIT"
];

export default function TickerRibbon() {
  return (
    <div className="service-ribbon-container" aria-hidden="true">
      <div className="service-ribbon-track">
        {[...items, ...items, ...items].map((text, i) => (
          <span key={i} className="ribbon-item">
            {text} <span className="ribbon-divider">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
