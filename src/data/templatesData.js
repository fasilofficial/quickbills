export const templatesData = [
  {
    slug: "simple-invoice",
    title: "Simple Invoice Template",
    badge: "Most Popular",
    shortDescription:
      "A clean, straightforward invoice layout suitable for general goods, one-off jobs, and quick client billing without complex overhead.",
    fullDescription:
      "The Simple Invoice Template is engineered for maximum clarity and speed. It strips away complicated multi-tier tax structures and enterprise clutter, leaving a clean, readable billing document that displays who is charging whom, what was provided, and the net total payable. Perfect for straightforward sales and single-deliverable services.",
    suitableFor: [
      "Sole proprietors and independent tradespeople",
      "One-time project billings and simple transactions",
      "Local service providers needing quick PDF invoices",
      "Businesses billing for products or hourly tasks without complex terms"
    ],
    recommendedFields: [
      "Seller contact information & billing address",
      "Customer contact name & email address",
      "Sequential invoice number and issue date",
      "Itemized description of products or services",
      "Quantity, unit rate, and total price",
      "Payment instructions and due date"
    ],
    bestPractices: [
      "Keep descriptions concise and specific so accounts payable can process without inquiries.",
      "Specify payment method details (e.g., bank transfer details or PayPal address) directly in the notes field.",
      "Issue the invoice within 24 hours of deliverable acceptance to speed up payment turnaround."
    ],
    prefillData: {
      billFrom: "Acme Creative Studio",
      billFromEmail: "billing@acmestudio.example",
      billFromAddress: "123 Market Street, Suite 400, Austin, TX 78701",
      billTo: "Pinnacle Retail Partners",
      billToEmail: "ap@pinnacleretail.example",
      billToAddress: "850 Commerce Blvd, New York, NY 10001",
      notes: "Payment is requested within 14 days of invoice date. Please transfer funds to Bank of America, Routing #123456789, Account #987654321.",
      taxRate: "0",
      discountRate: "0",
      currency: "$",
      items: [
        {
          id: "item-1",
          name: "Website Redesign & Frontend Assembly",
          description: "Completed homepage, product listing, and responsive mobile optimization",
          price: "1500.00",
          quantity: 1
        },
        {
          id: "item-2",
          name: "Design Asset Preparation",
          description: "High-resolution icon exports, logo variations, and typography tokens",
          price: "350.00",
          quantity: 1
        }
      ]
    },
    relatedGuides: ["how-to-create-an-invoice", "what-should-an-invoice-include", "invoice-payment-terms"]
  },
  {
    slug: "freelance-invoice",
    title: "Freelance Invoice Template",
    badge: "For Contractors & Creators",
    shortDescription:
      "Tailored specifically for independent freelancers, contractors, and consultants billing hourly, by milestone, or on retainer.",
    fullDescription:
      "The Freelance Invoice Template is structured around the unique needs of independent professionals. It provides dedicated itemization for project phases, hourly logs, and milestone deliverables, alongside clear fields for net payment terms, deposit reconciliations, and direct digital payout instructions.",
    suitableFor: [
      "Freelance software developers, engineers, and QA testers",
      "Graphic designers, copywriters, and content creators",
      "Marketing specialists and digital campaign managers",
      "Independent business consultants and strategists"
    ],
    recommendedFields: [
      "Freelancer legal name / business name and tax identification",
      "Client point of contact and billing email",
      "Detailed project phase or hour breakdown",
      "Agreed milestone descriptions or task rates",
      "Explicit payment terms (e.g., Net 15 or Net 30)",
      "Direct bank routing details or digital payment links"
    ],
    bestPractices: [
      "Always reference the client's internal project name or statement of work (SOW) number.",
      "If billing hourly, list the date range covered and break down hours by task or milestone.",
      "Clarify acceptable digital payment channels (ACH, Wise, wire transfer) to avoid checks delayed in postal transit."
    ],
    prefillData: {
      billFrom: "Elena Vance | Digital Design & UI/UX",
      billFromEmail: "elena@vancedesign.example",
      billFromAddress: "450 Pine St, Apt 3B, Seattle, WA 98101",
      billTo: "OmniTech Solutions Inc.",
      billToEmail: "finance@omnitech.example",
      billToAddress: "100 Innovation Way, San Francisco, CA 94107",
      notes: "Payment terms: Net 15. Electronic transfer preferred: ACH Routing #021000021, Account #883920192. Thank you for your partnership!",
      taxRate: "0",
      discountRate: "0",
      currency: "$",
      items: [
        {
          id: "item-f1",
          name: "UI/UX Design Systems Sprint",
          description: "Component library, design tokens, and Figma auto-layout components (30 hrs @ $85/hr)",
          price: "2550.00",
          quantity: 1
        },
        {
          id: "item-f2",
          name: "User Research & Usability Testing",
          description: "Conducted 6 remote customer interviews and compiled actionable synthesis report",
          price: "950.00",
          quantity: 1
        }
      ]
    },
    relatedGuides: ["invoice-for-freelancers", "invoice-payment-terms", "how-to-number-invoices"]
  },
  {
    slug: "small-business-invoice",
    title: "Small Business Invoice Template",
    badge: "Commercial & B2B",
    shortDescription:
      "A formal commercial invoice template featuring tax calculation, customer PO references, discount lines, and formal payment terms.",
    fullDescription:
      "The Small Business Invoice Template provides the comprehensive structure required for corporate B2B transactions. Designed to satisfy corporate accounts payable and tax accounting requirements, it features clear line-item tax breakdowns, customer purchase order numbers, multi-item invoicing, and formal billing terms.",
    suitableFor: [
      "Registered small businesses, LLCs, and corporate vendors",
      "Retailers and wholesalers selling products in volume",
      "B2B service providers operating under master service agreements",
      "Companies with sales tax, VAT, or GST collection requirements"
    ],
    recommendedFields: [
      "Full registered corporate entity name and registered office",
      "Tax Registration Number (EIN, VAT, GSTIN)",
      "Client accounts payable department and PO reference",
      "Itemized product SKUs, descriptions, and quantities",
      "Separate subtotal, discount, and statutory tax calculations",
      "Formal commercial payment terms (e.g., 2/10 Net 30)"
    ],
    bestPractices: [
      "Ensure your corporate tax registration number is clearly visible in the issuer header.",
      "Always include the customer's purchase order (PO) number to avoid corporate accounting delays.",
      "Itemize discounts and taxes transparently so the buyer can claim applicable input tax deductions."
    ],
    prefillData: {
      billFrom: "Apex Logistics & Supply Co.",
      billFromEmail: "invoicing@apexlogistics.example",
      billFromAddress: "2200 Distribution Way, Atlanta, GA 30331",
      billTo: "Metro Manufacturing Group",
      billToEmail: "accounts.payable@metromanuf.example",
      billToAddress: "500 Industrial Parkway, Chicago, IL 60607",
      notes: "Terms: Net 30. Please reference Invoice # and PO #MM-9481 on remittance advice. Remit to: Chase Bank, Account #449201948.",
      taxRate: "8.25",
      discountRate: "5",
      currency: "$",
      items: [
        {
          id: "item-sb1",
          name: "Heavy-Duty Pallet Racks (Model PR-40)",
          description: "Industrial steel storage units with reinforced cross-bracing",
          price: "420.00",
          quantity: 4
        },
        {
          id: "item-sb2",
          name: "On-Site Installation & Assembly",
          description: "Certified field technician inspection and floor anchoring",
          price: "650.00",
          quantity: 1
        }
      ]
    },
    relatedGuides: ["invoice-for-small-business", "how-to-calculate-invoice-tax", "what-should-an-invoice-include"]
  },
  {
    slug: "service-invoice",
    title: "Service Business Invoice Template",
    badge: "Agencies & Maintenance",
    shortDescription:
      "A versatile invoice template crafted for professional service providers, agencies, repair contractors, and maintenance teams.",
    fullDescription:
      "The Service Business Invoice Template is optimized for billing labor, expertise, and service packages. It features detailed space for describing the scope of work, date ranges of service performance, parts or materials provided, and specific warranty or follow-up service terms.",
    suitableFor: [
      "Digital agencies, marketing firms, and PR consultancies",
      "Maintenance, HVAC, electrical, and plumbing contractors",
      "Legal, accounting, and bookkeeping professionals",
      "IT managed service providers (MSPs) and tech support teams"
    ],
    recommendedFields: [
      "Service provider license or trade certification details",
      "Dates during which services were rendered",
      "Itemized service tiers, hourly rates, or task-based fees",
      "Materials, parts, or travel fees itemized separately",
      "Net balance due with clear calculation of discounts or credits",
      "Scope completion sign-off notes or warranty policy"
    ],
    bestPractices: [
      "Differentiate labor charges from equipment/parts charges for complete transparency.",
      "Mention any warranty period or guarantee terms in the notes section.",
      "Send the invoice immediately following completion of the service visit or billing period."
    ],
    prefillData: {
      billFrom: "Cascade Systems & IT Solutions",
      billFromEmail: "support-billing@cascadesystems.example",
      billFromAddress: "720 Columbia Street, Portland, OR 97201",
      billTo: "Summit Financial Advisory",
      billToEmail: "office@summitfinancial.example",
      billToAddress: "1200 5th Avenue, Suite 1400, Seattle, WA 98101",
      notes: "Thank you for trusting Cascade Systems. All hardware installations carry a 12-month warranty. Balance payable within 21 days.",
      taxRate: "6.5",
      discountRate: "0",
      currency: "$",
      items: [
        {
          id: "item-srv1",
          name: "Monthly Managed IT & Network Security",
          description: "Firewall monitoring, cloud backup verification, and endpoint protection for 25 workstations",
          price: "1250.00",
          quantity: 1
        },
        {
          id: "item-srv2",
          name: "On-Site Server Hardware Maintenance",
          description: "Replaced redundant power supply and updated RAID controller firmware",
          price: "450.00",
          quantity: 1
        }
      ]
    },
    relatedGuides: ["invoice-payment-terms", "invoice-vs-receipt", "how-to-create-an-invoice"]
  }
];
