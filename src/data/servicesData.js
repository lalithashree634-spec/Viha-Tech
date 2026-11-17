export const categories = [
  "All Services",
  "Web & Digital Infrastructure",
  "Business Email & Collaboration",
  "Cloud & Infrastructure",
  "Endpoint & Device Management",
  "Cybersecurity & Threat Protection",
  "Complete IT Operations"
];

export const servicesData = [
  // 01 Web & Digital Infrastructure
  {
    id: "VIHA-SRV-001",
    shortCode: "SRV · 001",
    iconType: "globe",
    slug: "static-website-creation",
    category: "Web & Digital Infrastructure",
    categoryNumber: "01",
    title: "Static Website Creation",
    kicker: "WEB & DIGITAL INFRASTRUCTURE",
    lead: "Fast, responsive brochure websites and landing pages for businesses.",
    overviewHeadline: "A polished, responsive online presence without unnecessary complexity.",
    overviewBody: "Fast, responsive brochure websites and landing pages for businesses. We build lightweight, semantic, and high-performance digital presence with modern standards.",
    scope: [
      "Responsive business pages and landing pages",
      "Semantic HTML, modern CSS / SCSS and accessible layouts",
      "Brand-aligned design, content structure and calls to action",
      "Domain, DNS, SSL and hosting deployment",
      "Performance, backup and maintenance planning"
    ],
    deliverySteps: [
      { step: "01", title: "Discovery & Structure", desc: "Review brand identity, page requirements, navigation hierarchy and target audience." },
      { step: "02", title: "Design & Markup", desc: "Build responsive, accessible layouts with optimized assets and modern CSS." },
      { step: "03", title: "Domain & DNS Deployment", desc: "Configure DNS records, provision TLS certificates, and deploy to production hosting." },
      { step: "04", title: "Testing & Handover", desc: "Cross-browser validation, mobile testing, page speed verification and backup documentation." }
    ],
    deliverablesList: [
      "Production-ready responsive website files",
      "SSL certificate installation and HTTPS redirection",
      "DNS configuration and domain linkage",
      "Baseline SEO meta tags and social share cards",
      "Full backup archive and maintenance guidelines"
    ],
    aftercarePoints: [
      "Post-launch DNS propagation monitoring",
      "Content update assistance and minor layout tweaks",
      "Annual domain and TLS certificate renewal checks"
    ],
    techStack: ["HTML5", "Modern SCSS", "React / Vite", "Cloudflare DNS", "SSL / TLS"]
  },
  {
    id: "VIHA-SRV-002",
    shortCode: "SRV · 002",
    iconType: "code",
    slug: "dynamic-website-creation",
    category: "Web & Digital Infrastructure",
    categoryNumber: "01",
    title: "Dynamic Website Creation",
    kicker: "WEB & DIGITAL INFRASTRUCTURE",
    lead: "Purpose-built websites with data-driven pages, forms, authentication and administration workflows.",
    overviewHeadline: "Interactive web applications tailored to business operations.",
    overviewBody: "From client portals to data-driven product directories, we engineer dynamic applications with robust server-side processing, secure database integration, and intuitive management workflows.",
    scope: [
      "Requirements mapping and page architecture",
      "Server-side development and database integration",
      "Admin workflows for editing and publishing content",
      "Authentication, input validation and access controls",
      "Deployment, SSL, DNS and backup configuration"
    ],
    deliverySteps: [
      { step: "01", title: "Requirements & Data Schema", desc: "Map business workflows, data models, user roles, and security boundaries." },
      { step: "02", title: "Database & Backend Development", desc: "Build relational database schemas, REST APIs, and authentication mechanisms." },
      { step: "03", title: "Frontend & Admin Interface", desc: "Develop interactive UI, management forms, input validation, and media handling." },
      { step: "04", title: "Security Hardening & Deployment", desc: "SQL injection protection, CSRF mitigation, TLS deployment, and automated backups." }
    ],
    deliverablesList: [
      "Fully functional dynamic web application",
      "Secure administrative management portal",
      "Structured database schema with automated backup scripts",
      "User role permissions and authentication system",
      "System administration documentation"
    ],
    aftercarePoints: [
      "Application monitoring and database optimization",
      "Security patches and runtime environment updates",
      "Feature enhancements and API maintenance"
    ],
    techStack: ["React", "Node.js / PHP", "PostgreSQL / MySQL", "REST APIs", "Role-Based Auth"]
  },
  {
    id: "VIHA-SRV-003",
    shortCode: "SRV · 003",
    iconType: "server",
    slug: "domain-hosting-support",
    category: "Web & Digital Infrastructure",
    categoryNumber: "01",
    title: "Domain & Hosting Support",
    kicker: "WEB & DIGITAL INFRASTRUCTURE",
    lead: "Help with domain purchases, DNS records, hosting plans and production website setup.",
    overviewHeadline: "Dependable domain routing and rock-solid hosting infrastructure.",
    overviewBody: "Ensure your primary online identity is secured, accurately routed, and backed by resilient hosting architecture without downtime or DNS propagation bottlenecks.",
    scope: [
      "Domain purchase and renewal guidance",
      "A, CNAME, MX, TXT, SPF, DKIM and DMARC records",
      "cPanel, PHP runtime, databases and file management",
      "Hosting migration, SSL/TLS and redirects",
      "Availability and email-routing troubleshooting"
    ],
    deliverySteps: [
      { step: "01", title: "DNS & Zone Audit", desc: "Analyze existing DNS records, registrar settings, TTL values, and active delegations." },
      { step: "02", title: "Hosting Plan Provisioning", desc: "Select and configure hosting environment matching application throughput and resource demands." },
      { step: "03", title: "Record Migration & Routing", desc: "Execute zero-downtime DNS cutover for web, email, verification, and subdomains." },
      { step: "04", title: "Verification & Monitoring", desc: "Global DNS propagation checks, SSL handshake testing, and uptime alert configuration." }
    ],
    deliverablesList: [
      "Fully configured and authenticated DNS zone file",
      "Active production hosting account with automated backups",
      "SSL/TLS certificate installed and validated",
      "Email routing continuity (MX, SPF, DKIM)",
      "DNS recovery and registrar access documentation"
    ],
    aftercarePoints: [
      "Registrar renewal alert tracking",
      "Periodic DNS hygiene and unused record cleanup",
      "Nameserver availability monitoring"
    ],
    techStack: ["DNS Management", "Cloudflare", "Route 53", "SSL / TLS", "Registrar Controls"]
  },
  {
    id: "VIHA-SRV-004",
    shortCode: "SRV · 004",
    iconType: "settings",
    slug: "cpanel-web-hosting-management",
    category: "Web & Digital Infrastructure",
    categoryNumber: "01",
    title: "cPanel & Web Hosting Management",
    kicker: "WEB & DIGITAL INFRASTRUCTURE",
    lead: "Practical administration for shared hosting, mailboxes, databases and website files.",
    overviewHeadline: "Hands-on server control panel administration and resource tuning.",
    overviewBody: "Keep your hosting environment secure, fast, and organized. We take care of database configurations, PHP version upgrades, mailboxes, cron schedules, and file security.",
    scope: [
      "cPanel account and resource management",
      "PHP version, extensions and database configuration",
      "File permissions, cron jobs and backup checks",
      "SSL installation and renewal validation",
      "Website migration and troubleshooting"
    ],
    deliverySteps: [
      { step: "01", title: "Environment & Storage Review", desc: "Examine disk utilization, inode count, PHP modules, and database health." },
      { step: "02", title: "Optimization & Security Hardening", desc: "Update PHP version, tune memory limits, set strict file permissions, and configure ModSecurity." },
      { step: "03", title: "Backup Automation", desc: "Configure scheduled off-site or cPanel automated backups and restore drills." },
      { step: "04", title: "Performance Verification", desc: "Audit error logs, slow query logs, and HTTP response times." }
    ],
    deliverablesList: [
      "Optimized and hardened cPanel environment",
      "Scheduled automated backup schedule with verification",
      "PHP runtime configured for performance and security",
      "Automated SSL renewal rules",
      "Resource allocation and troubleshooting guide"
    ],
    aftercarePoints: [
      "Monthly disk and inode consumption checks",
      "PHP deprecation tracking and module upgrades",
      "Log review and spam prevention tuning"
    ],
    techStack: ["cPanel / WHM", "PHP-FPM", "phpMyAdmin", "Cron Scheduler", "ModSecurity"]
  },
  {
    id: "VIHA-SRV-005",
    shortCode: "SRV · 005",
    iconType: "cpu",
    slug: "nginx-linux-server-support",
    category: "Web & Digital Infrastructure",
    categoryNumber: "01",
    title: "Nginx & Linux Server Support",
    kicker: "WEB & DIGITAL INFRASTRUCTURE",
    lead: "Hands-on administration for Linux web servers, reverse proxies, TLS and application availability.",
    overviewHeadline: "Production-grade Linux web infrastructure and reverse proxy engineering.",
    overviewBody: "Hands-on Linux server administration ensuring fast response times, automated certificate renewals, secure reverse proxies, and reliable uptime for custom applications.",
    scope: [
      "Nginx server blocks and reverse proxy configuration",
      "TLS certificates with Certbot and renewal validation",
      "Upstream health, headers, timeouts and load distribution",
      "Linux services, logs, permissions and disk utilisation",
      "502/504, DNS, PHP-FPM and application troubleshooting"
    ],
    deliverySteps: [
      { step: "01", title: "Server & Daemon Inspection", desc: "Assess Linux distribution, systemd services, active ports, firewall rules, and resource load." },
      { step: "02", title: "Nginx Architecture & Optimization", desc: "Configure modular server blocks, gzip/brotli compression, proxy headers, and rate limiting." },
      { step: "03", title: "TLS & Certbot Automation", desc: "Deploy Let's Encrypt certificates with automated systemd timers and OCSP stapling." },
      { step: "04", title: "Stress Test & Health Monitoring", desc: "Simulate concurrent connections, test failover upstream behavior, and configure system monitoring." }
    ],
    deliverablesList: [
      "Hardened Nginx configuration files with security headers",
      "Automated TLS certificate renewal via Certbot",
      "Configured UFW/iptables firewall and fail2ban intrusion defense",
      "Systemd service definition and restart policies",
      "Runbook for log inspection and service recovery"
    ],
    aftercarePoints: [
      "Kernel and package security patch validation",
      "Log rotation and disk space monitoring",
      "Application upstream availability monitoring"
    ],
    techStack: ["Ubuntu / Debian", "Nginx Reverse Proxy", "Certbot / Let's Encrypt", "Systemd", "UFW Firewall"]
  },

  // 02 Business Email & Collaboration
  {
    id: "VIHA-SRV-006",
    shortCode: "SRV · 006",
    iconType: "grid",
    slug: "microsoft-365-setup-management",
    category: "Business Email & Collaboration",
    categoryNumber: "02",
    title: "Microsoft 365 Setup & Management",
    kicker: "BUSINESS EMAIL & COLLABORATION",
    lead: "Tenant configuration, user onboarding, Exchange Online, licensing and collaboration administration.",
    overviewHeadline: "Enterprise collaboration and productivity powered by Microsoft 365.",
    overviewBody: "We configure, license, and maintain your Microsoft 365 tenant to enterprise standards, establishing clear user lifecycles, bulletproof spam filtering, and secure collaboration tools.",
    scope: [
      "Tenant setup, domain verification and licence planning",
      "Exchange Online mailboxes, aliases and shared mailboxes",
      "User lifecycle, groups, roles and mail flow",
      "SPF, DKIM, DMARC and email authentication",
      "Teams, OneDrive and SharePoint administration support"
    ],
    deliverySteps: [
      { step: "01", title: "Tenant Architecture & Domain Linkage", desc: "Initialize Microsoft 365 tenant, verify custom domain records, and plan license tiering." },
      { step: "02", title: "Mailbox & Security Configuration", desc: "Create user mailboxes, shared mailboxes, security groups, and mail routing rules." },
      { step: "03", title: "Email Authentication (SPF/DKIM/DMARC)", desc: "Generate 2048-bit DKIM keys, configure strict SPF records, and enforce DMARC reporting." },
      { step: "04", title: "Client Rollout & User Onboarding", desc: "Configure Outlook, Teams, and mobile profile settings with multi-factor authentication (MFA)." }
    ],
    deliverablesList: [
      "Verified Microsoft 365 tenant linked to custom business domain",
      "Configured Exchange Online mailboxes and distribution lists",
      "100% compliant SPF, DKIM, and DMARC authentication records",
      "Enforced Multi-Factor Authentication (MFA) baseline policy",
      "User onboarding and offboarding standard operating procedure"
    ],
    aftercarePoints: [
      "Quarterly license allocation and cost hygiene audit",
      "Mail flow monitoring and spam filter fine-tuning",
      "Ongoing user provisioning support"
    ],
    techStack: ["Microsoft Entra ID", "Exchange Online", "SharePoint", "Teams Admin", "PowerShell 365"]
  },
  {
    id: "VIHA-SRV-007",
    shortCode: "SRV · 007",
    iconType: "arrow-left-right",
    slug: "business-email-migration",
    category: "Business Email & Collaboration",
    categoryNumber: "02",
    title: "Business Email Migration",
    kicker: "BUSINESS EMAIL & COLLABORATION",
    lead: "Mailbox and collaboration migrations between Google Workspace, Microsoft 365 and cPanel webmail.",
    overviewHeadline: "Zero-data-loss mailbox transitions with zero interruption to business.",
    overviewBody: "Migrate historical emails, folder structures, calendars, and contacts seamlessly across platforms. We handle the entire pre-staging, cutover, and post-migration validation.",
    scope: [
      "Google Workspace to Google Workspace migration",
      "Google Workspace to Microsoft 365 migration",
      "Microsoft 365 tenant-to-tenant mailbox migration",
      "cPanel / IMAP webmail to Google Workspace or Microsoft 365",
      "Mailbox, calendar, contacts and supported data transfer planning",
      "DNS / MX cutover, coexistence checks and post-migration validation"
    ],
    deliverySteps: [
      { step: "01", title: "Migration Assessment & Inventory", desc: "Audit mailboxes, historical storage size, shared calendars, distribution groups, and current DNS TTLs." },
      { step: "02", title: "Pre-Stage Sync", desc: "Replicate historical email archives, folder structures, and contacts in the background." },
      { step: "03", title: "Cutover & MX Switch", desc: "Lower TTLs, update MX/SPF/DKIM records, perform delta sync, and switch live delivery." },
      { step: "04", title: "Post-Migration Verification", desc: "Validate outbound/inbound delivery, assist users with device profiles, and verify data parity." }
    ],
    deliverablesList: [
      "100% verified historical email, folder, contact, and calendar data transfer",
      "Cutover schedule executed with zero email loss",
      "Updated MX and authentication DNS records",
      "Client setup guides for Outlook, Gmail, Apple Mail, and mobile",
      "Post-migration signoff report"
    ],
    aftercarePoints: [
      "72-hour coexistence monitoring and delta synchronization",
      "VIP user device configuration assistance",
      "Decommissioning guidance for legacy mail servers"
    ],
    techStack: ["BitTitan / MigrationWiz", "IMAP Sync", "Exchange Migration Service", "DNS Cutover Automation"]
  },
  {
    id: "VIHA-SRV-008",
    shortCode: "SRV · 008",
    iconType: "mail",
    slug: "google-workspace-setup",
    category: "Business Email & Collaboration",
    categoryNumber: "02",
    title: "Google Workspace Setup",
    kicker: "BUSINESS EMAIL & COLLABORATION",
    lead: "Google Workspace configuration, Gmail delivery, account management and migration support.",
    overviewHeadline: "Enterprise productivity on Gmail, Drive, Docs, and Google Meet.",
    overviewBody: "Get your team collaborating effortlessly with Google Workspace. We set up domain verification, high-reputation email delivery records, organizational units, and administrative controls.",
    scope: [
      "Workspace tenant setup and domain verification",
      "Gmail users, groups, aliases and routing",
      "MX, SPF, DKIM and DMARC records",
      "Drive sharing and administrative controls",
      "Google-to-Microsoft 365 migration assistance"
    ],
    deliverySteps: [
      { step: "01", title: "Domain Verification & Account Provisioning", desc: "Verify domain ownership via TXT/CNAME and initialize Google Workspace admin console." },
      { step: "02", title: "Gmail Delivery Architecture", desc: "Configure Google MX records, generate DKIM authentication keys, and configure SPF records." },
      { step: "03", title: "Organizational Units & Security Policies", desc: "Structure departments, enforce 2-Step Verification, and set Drive external sharing policies." },
      { step: "04", title: "Rollout & User Access", desc: "Provision user accounts, configure aliases and collaborative inboxes, and test email flow." }
    ],
    deliverablesList: [
      "Configured Google Workspace organization on custom domain",
      "High-reputation email delivery records (MX, SPF, DKIM, DMARC)",
      "Organizational units with enforced 2FA security baseline",
      "Shared Drives and permission hierarchy",
      "Admin user management and billing guide"
    ],
    aftercarePoints: [
      "Domain reputation monitoring and deliverability checks",
      "Account onboarding and offboarding support",
      "Google Drive storage and sharing policy audits"
    ],
    techStack: ["Google Admin Console", "Gmail Delivery", "Google Drive", "Google Meet", "Google 2FA / MFA"]
  },
  {
    id: "VIHA-SRV-009",
    shortCode: "SRV · 009",
    iconType: "signature",
    slug: "webmail-email-signature-support",
    category: "Business Email & Collaboration",
    categoryNumber: "02",
    title: "Webmail & Email Signature Support",
    kicker: "BUSINESS EMAIL & COLLABORATION",
    lead: "Professional email identity and dependable access across desktop, mobile and webmail.",
    overviewHeadline: "Consistent corporate identity and flawless cross-device email access.",
    overviewBody: "Ensure your team communicates with a unified brand appearance and reliable mailbox connectivity across Outlook, Apple Mail, smartphones, and webmail clients.",
    scope: [
      "cPanel webmail and mailbox configuration",
      "Outlook, mobile and browser mail profile support",
      "HTML email signature design and rollout guidance",
      "Mailbox quota, forwarding, filters and delivery checks",
      "Email client and authentication troubleshooting"
    ],
    deliverySteps: [
      { step: "01", title: "Identity Design & HTML Signature", desc: "Develop responsive, brand-aligned HTML signatures compatible with all major email clients." },
      { step: "02", title: "Mailbox Configuration & Quotas", desc: "Configure IMAP/SMTP accounts, auto-responders, forwarding rules, and storage quotas." },
      { step: "03", title: "Device Profile Deployment", desc: "Provide automated or step-by-step setup profiles for Outlook, iOS Mail, and Android." },
      { step: "04", title: "Authentication & Delivery Test", desc: "Test message rendering, link tracking, attachment delivery, and spam score compliance." }
    ],
    deliverablesList: [
      "Custom responsive HTML email signature templates with hosted assets",
      "Properly configured IMAP, POP3, and SMTP ports with SSL encryption",
      "Device setup documentation for desktop and mobile clients",
      "Spam score validation and authentication verification",
      "Mailbox quota and maintenance schedule"
    ],
    aftercarePoints: [
      "New employee signature generation",
      "Email client profile troubleshooting",
      "Storage quota adjustment and archiving assistance"
    ],
    techStack: ["Roundcube / Horde", "Outlook Desktop & Mobile", "Apple Mail", "HTML Signatures", "IMAP / SMTP"]
  },

  // 03 Cloud & Infrastructure
  {
    id: "VIHA-SRV-010",
    shortCode: "SRV · 010",
    iconType: "cloud",
    slug: "azure-cloud-support",
    category: "Cloud & Infrastructure",
    categoryNumber: "03",
    title: "Azure Cloud Support",
    kicker: "CLOUD & INFRASTRUCTURE",
    lead: "Administration and troubleshooting across Azure compute, networking, identity and platform services.",
    overviewHeadline: "Dependable, scalable Azure cloud operations and cost optimization.",
    overviewBody: "We architect, configure, and maintain your Azure cloud workloads with a focus on high availability, enterprise security baselines, resilient networking, and cost hygiene.",
    scope: [
      "Azure VMs, disks, snapshots and availability checks",
      "VNets, NSGs, routing, DNS and connectivity",
      "Storage accounts, access controls and lifecycle settings",
      "Managed identities, RBAC and Key Vault integration",
      "Azure Monitor, alerts, backup and cost hygiene"
    ],
    deliverySteps: [
      { step: "01", title: "Architecture & Subscription Audit", desc: "Review resource groups, virtual machines, networking topology, and RBAC assignments." },
      { step: "02", title: "Network Security & NSG Hardening", desc: "Configure Virtual Networks, subnets, Network Security Groups, and remove open management ports." },
      { step: "03", title: "Backup & Recovery Policies", desc: "Deploy Azure Backup vaults with automated snapshot schedules and geo-redundancy." },
      { step: "04", title: "Cost & Alert Optimization", desc: "Set up Azure Monitor metric alerts, budget notifications, and identify idle resources." }
    ],
    deliverablesList: [
      "Hardened Azure network topology and NSG rules",
      "Automated VM snapshot and Azure Backup configuration",
      "Role-Based Access Control (RBAC) and Key Vault integration",
      "Azure Monitor alerts for CPU, disk, and network anomalies",
      "Cost optimization assessment and resource rightsizing recommendations"
    ],
    aftercarePoints: [
      "Monthly Azure consumption and budget reviews",
      "Snapshot backup validation and restore drills",
      "Security center recommendations remediation"
    ],
    techStack: ["Azure Virtual Machines", "Virtual Networks (VNet)", "Network Security Groups", "Azure Backup", "Azure Monitor"]
  },

  // 04 Endpoint & Device Management
  {
    id: "VIHA-SRV-011",
    shortCode: "SRV · 011",
    iconType: "smartphone",
    slug: "microsoft-intune-configuration-management",
    category: "Endpoint & Device Management",
    categoryNumber: "04",
    title: "Microsoft Intune Configuration & Management",
    kicker: "ENDPOINT & DEVICE MANAGEMENT",
    lead: "Modern device management for Windows endpoints, applications, configuration and compliance.",
    overviewHeadline: "Zero-touch device management and enterprise compliance baselines.",
    overviewBody: "Transition to modern endpoint management with Microsoft Intune. We implement Windows Autopilot, deploy business software silently, and enforce strict security baselines across your fleet.",
    scope: [
      "Tenant, enrolment and Windows Autopilot support",
      "Configuration profiles, compliance and security baselines",
      "Win32 app packaging, detection and uninstall rules",
      "Update rings, Defender and endpoint restrictions",
      "Groups, filters, RBAC and policy troubleshooting"
    ],
    deliverySteps: [
      { step: "01", title: "Intune Tenant & Enrolment Configuration", desc: "Configure MDM authority, company portal branding, and Autopilot deployment profiles." },
      { step: "02", title: "Compliance Policies & Baselines", desc: "Deploy BitLocker encryption policies, firewall rules, and password complexity standards." },
      { step: "03", title: "Win32 App Packaging & Deployment", desc: "Package essential business software with custom detection logic and silent install scripts." },
      { step: "04", title: "Windows Update Rings & Verification", desc: "Define rollout rings, quality update deferrals, and monitor fleet compliance status." }
    ],
    deliverablesList: [
      "Configured Microsoft Intune tenant with Autopilot deployment profiles",
      "Standardized endpoint compliance policies and security baselines",
      "Packaged Win32 applications ready for silent automated installation",
      "Configured Windows Update rings for staged patch deployment",
      "Endpoint compliance dashboard and operational playbook"
    ],
    aftercarePoints: [
      "Non-compliant device remediation and investigation",
      "Application package updates and retirement",
      "New hardware procurement and Autopilot hash registration"
    ],
    techStack: ["Microsoft Intune", "Windows Autopilot", "Win32 App Packaging", "Endpoint Security Baselines", "Intune PowerShell"]
  },
  {
    id: "VIHA-SRV-012",
    shortCode: "SRV · 012",
    iconType: "laptop",
    slug: "endpoint-management",
    category: "Endpoint & Device Management",
    categoryNumber: "04",
    title: "Endpoint Management",
    kicker: "ENDPOINT & DEVICE MANAGEMENT",
    lead: "Device lifecycle, configuration and operational support across your business endpoints.",
    overviewHeadline: "Complete operational support across your business workstation fleet.",
    overviewBody: "From initial provisioning to secure retirement, we handle hardware inventory, OS updates, remote troubleshooting, application stability, and device security policies.",
    scope: [
      "Device inventory and enrolment planning",
      "Windows configuration and update management",
      "Application deployment and endpoint configuration",
      "Device compliance and access policy coordination",
      "Troubleshooting, reporting and lifecycle processes"
    ],
    deliverySteps: [
      { step: "01", title: "Fleet Inventory & Health Assessment", desc: "Catalog hardware models, OS builds, warranty statuses, and active software." },
      { step: "02", title: "Standard Operating Environment (SOE)", desc: "Define standard corporate OS build specifications, driver updates, and core software." },
      { step: "03", title: "Patch & Application Cadence", desc: "Schedule regular OS updates, security patches, and application version upgrades." },
      { step: "04", title: "Remote Support & Incident Escalation", desc: "Establish remote desktop support channels, ticket triage, and hardware repair workflows." }
    ],
    deliverablesList: [
      "Centralized hardware and software asset registry",
      "Standardized endpoint configuration baseline",
      "Regular automated patch management cadence",
      "BitLocker recovery key backup and escrow plan",
      "Remote user support channel and troubleshooting SLAs"
    ],
    aftercarePoints: [
      "Routine device health checkups and disk cleanup",
      "Employee onboarding and offboarding hardware wiping",
      "End-of-life hardware replacement recommendations"
    ],
    techStack: ["Hardware Inventory", "Patch Management", "BitLocker Encryption", "Remote Assistance", "Asset Lifecycle"]
  },

  // 05 Cybersecurity & Threat Protection
  {
    id: "VIHA-SRV-013",
    shortCode: "SRV · 013",
    iconType: "shield",
    slug: "microsoft-defender-defender-for-cloud",
    category: "Cybersecurity & Threat Protection",
    categoryNumber: "05",
    title: "Microsoft Defender & Defender for Cloud",
    kicker: "CYBERSECURITY & THREAT PROTECTION",
    lead: "Security configuration and visibility across endpoints, identities and cloud workloads.",
    overviewHeadline: "Integrated threat protection across endpoints, identities, and cloud servers.",
    overviewBody: "Safeguard your organization from ransomware, credential theft, and unauthorized access. We configure Microsoft Defender for Endpoint, Office 365, and Defender for Cloud.",
    scope: [
      "Defender for Endpoint onboarding and policy configuration",
      "Defender for Office 365 and identity protection support",
      "Defender for Cloud recommendations and secure score",
      "Alert review, exposure assessment and incident triage",
      "Cloud workload protection and remediation support"
    ],
    deliverySteps: [
      { step: "01", title: "Endpoint Onboarding & Sensor Activation", desc: "Deploy Defender sensors to Windows endpoints and verify active telemetry reporting." },
      { step: "02", title: "Anti-Phishing & Safe Attachments", desc: "Configure Defender for Office 365 with Safe Links, anti-spoofing, and zero-hour auto purge." },
      { step: "03", title: "Cloud Workload Protection", desc: "Enable Defender for Cloud across Azure subscriptions to monitor virtual machines and storage." },
      { step: "04", title: "Alert Tuning & Incident Playbooks", desc: "Tune alert thresholds, suppress false positives, and document incident response steps." }
    ],
    deliverablesList: [
      "100% onboarded endpoint fleet reporting to Defender Security Center",
      "Active Safe Links, Safe Attachments, and Anti-Phishing policies",
      "Defender for Cloud posture recommendations report and score uplift",
      "Documented threat containment and device isolation procedure",
      "Executive security posture summary"
    ],
    aftercarePoints: [
      "Weekly security alert review and exposure score tracking",
      "Phishing campaign simulation support",
      "Continuous secure score improvement recommendations"
    ],
    techStack: ["Defender for Endpoint (MDE)", "Defender for Office 365 (MDO)", "Microsoft Defender for Cloud", "Threat Analytics"]
  },
  {
    id: "VIHA-SRV-014",
    shortCode: "SRV · 014",
    iconType: "activity",
    slug: "siem-configuration-support",
    category: "Cybersecurity & Threat Protection",
    categoryNumber: "05",
    title: "SIEM Configuration & Support",
    kicker: "CYBERSECURITY & THREAT PROTECTION",
    lead: "Security event collection, alerting and operational workflows designed around your environment.",
    overviewHeadline: "Centralized security visibility and intelligent threat detection.",
    overviewBody: "Unify security logs across firewalls, cloud tenants, endpoints, and identity providers. We deploy SIEM log collectors, write targeted detection rules, and configure real-time alert dispatch.",
    scope: [
      "SIEM requirements and log-source planning",
      "Connector and data-source onboarding",
      "Detection rules, alert tuning and severity mapping",
      "Dashboards, incident workflow and escalation design",
      "Use-case validation and ongoing tuning"
    ],
    deliverySteps: [
      { step: "01", title: "Log Source Architecture & Planning", desc: "Identify critical assets, audit requirements, retention timelines, and data connector protocols." },
      { step: "02", title: "Connector Onboarding", desc: "Connect cloud APIs, syslog forwarders, firewall events, and identity provider audit streams." },
      { step: "03", title: "Analytic Detection Rules", desc: "Build and test KQL/query rules for brute force attempts, impossible travel, and unauthorized privilege escalation." },
      { step: "04", title: "Automated Incident Dispatch", desc: "Configure incident creation, webhook notifications, and security dashboard workbooks." }
    ],
    deliverablesList: [
      "Operational SIEM workspace collecting telemetry from core infrastructure",
      "Custom analytic detection rules mapped to MITRE ATT&CK framework",
      "Real-time operational security dashboards for management overview",
      "Configured incident escalation and notification channels",
      "Log retention policy documentation"
    ],
    aftercarePoints: [
      "Quarterly analytic rule tuning to eliminate alert fatigue",
      "New log source onboarding as infrastructure expands",
      "Log ingestion volume and cost hygiene monitoring"
    ],
    techStack: ["Microsoft Sentinel", "Syslog / CEF", "KQL (Kusto Query Language)", "Automated Playbooks", "Log Analytics"]
  },
  {
    id: "VIHA-SRV-015",
    shortCode: "SRV · 015",
    iconType: "shield-alert",
    slug: "edr-configuration-support",
    category: "Cybersecurity & Threat Protection",
    categoryNumber: "05",
    title: "EDR Configuration & Support",
    kicker: "CYBERSECURITY & THREAT PROTECTION",
    lead: "Endpoint detection and response configuration, health checks and incident support.",
    overviewHeadline: "Proactive endpoint telemetry, behavioral monitoring, and incident containment.",
    overviewBody: "Detect sophisticated cyber threats that bypass traditional antivirus. We implement enterprise EDR sensors, automated isolation capabilities, and rapid incident investigation playbooks.",
    scope: [
      "EDR deployment and endpoint onboarding",
      "Policy configuration, exclusions and sensor health",
      "Alert investigation and containment workflow guidance",
      "Endpoint coverage reporting and posture checks",
      "SIEM and identity control integration"
    ],
    deliverySteps: [
      { step: "01", title: "Sensor Deployment & Compatibility Check", desc: "Deploy lightweight EDR agent across fleet without disrupting user productivity." },
      { step: "02", title: "Behavioral Monitoring & Exclusions", desc: "Configure behavioral blocking, cloud protection, and tune approved business app exclusions." },
      { step: "03", title: "Automated Investigation & Remediation (AIR)", desc: "Enable automated machine-level quarantine, file remediation, and memory inspection." },
      { step: "04", title: "Live Response Drills", desc: "Verify live terminal isolation, network quarantine, and forensic timeline capability." }
    ],
    deliverablesList: [
      "Fully enrolled fleet with healthy EDR sensor telemetry",
      "Tuned exclusion list preventing false positive business disruption",
      "Verified one-click machine isolation capability",
      "Automated Investigation and Remediation (AIR) policies",
      "Incident investigation SOP for internal IT teams"
    ],
    aftercarePoints: [
      "Daily sensor health and coverage checks",
      "High-severity alert investigation support",
      "Behavioral rule updates against emerging zero-day threats"
    ],
    techStack: ["Endpoint Sensors", "Automated Device Isolation", "Automated Investigation & Remediation", "EDR Telemetry"]
  },

  // 06 Complete IT Operations
  {
    id: "VIHA-SRV-016",
    shortCode: "SRV · 016",
    iconType: "check-circle",
    slug: "end-to-end-it-support-it-cleanup",
    category: "Complete IT Operations",
    categoryNumber: "06",
    title: "End-to-End IT Support & IT Cleanup",
    kicker: "COMPLETE IT OPERATIONS",
    lead: "A single point of contact for everyday IT operations, technical projects and environment cleanups.",
    overviewHeadline: "Single-point accountability for your entire business technology environment.",
    overviewBody: "Stop juggling multiple disconnected IT vendors. We provide full lifecycle IT management, emergency troubleshooting, account cleanups, and proactive infrastructure maintenance.",
    scope: [
      "IT environment assessment and account inventory",
      "User onboarding, offboarding and access reviews",
      "Email, endpoint, cloud, network and application support",
      "Patch, backup, security and configuration review",
      "Documentation and prioritised remediation plan",
      "One-time, project-based or continuous support"
    ],
    deliverySteps: [
      { step: "01", title: "Comprehensive Environment Audit", desc: "Map all user accounts, email tenants, DNS zones, endpoints, servers, and subscriptions." },
      { step: "02", title: "Remediation & Hygiene Cleanup", desc: "Revoke stale admin privileges, remove orphaned accounts, fix broken DNS records, and secure backups." },
      { step: "03", title: "Process Standardization", desc: "Implement formal user onboarding checklists, ticket request channels, and hardware standards." },
      { step: "04", title: "Dedicated Support Partnership", desc: "Establish day-to-day help desk access, proactive system monitoring, and periodic review cadences." }
    ],
    deliverablesList: [
      "Complete IT infrastructure topology and credential vault inventory",
      "Prioritized security and operational cleanup report",
      "Standardized user onboarding and offboarding runbook",
      "Dedicated help desk communication channel",
      "Monthly IT operations review and uptime reports"
    ],
    aftercarePoints: [
      "Continuous daily help desk assistance and incident response",
      "Quarterly IT steering meetings and technology roadmap updates",
      "Vendor coordination and licensing renewal management"
    ],
    techStack: ["Central Service Desk", "Identity Lifecycle", "Backup Verification", "Network & VPN", "SLA Incident Response"]
  }
];

export const supportModels = [
  {
    number: "01",
    tag: "ONE-TIME FIXES",
    title: "One-time fixes",
    desc: "Resolve an issue, configure a service, troubleshoot a fault or complete a focused task without long-term commitments.",
    idealFor: "Rapid emergency troubleshooting, DNS fix, email bounce resolution, server repair.",
    actionText: "Request a quick fix"
  },
  {
    number: "02",
    tag: "PROJECT DELIVERY",
    title: "Planned projects",
    desc: "Website builds, migrations, tenant setup, security uplift and infrastructure improvements delivered on time and within scope.",
    idealFor: "Tenant-to-tenant email migrations, complete web infrastructure redesign, compliance audits.",
    actionText: "Scope a project"
  },
  {
    number: "03",
    tag: "ONGOING SUPPORT",
    title: "Ongoing IT support",
    desc: "Periodic or continuous assistance for maintenance, administration and operational support from one accountable partner.",
    idealFor: "SMEs wanting an accountable IT team without the overhead of full-time internal IT staff.",
    actionText: "Partner with VIHA"
  }
];

export const cleanupChecklist = [
  "User accounts, access and administrator review",
  "Microsoft 365 and Google Workspace configuration",
  "Endpoint, Intune and security policy checks",
  "Domains, DNS, cPanel, hosting and email flow",
  "Azure, Linux server, backup and monitoring review",
  "Prioritised cleanup actions and documentation"
];
