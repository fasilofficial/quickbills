export const guidesData = [
  {
    slug: "how-to-create-an-invoice",
    title: "How to Create an Invoice: A Step-by-Step Guide for Small Businesses & Freelancers",
    summary:
      "Learn how to create professional, legally sound invoices that ensure prompt payment. Step-by-step instructions from gathering details to sending and tracking.",
    readTime: "6 min read",
    category: "Invoicing Basics",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Introduction: Why Proper Invoicing Matters",
        paragraphs: [
          "An invoice is more than a simple request for payment—it is a legal record of transaction, an accounting document, and a direct reflection of your business's professionalism. When an invoice is clear, accurate, and itemized, clients process payments faster and with fewer disputes.",
          "According to business banking studies, over 40% of late payments stem from administrative errors, missing purchase order numbers, or vague line item descriptions. Following a structured invoicing process eliminates these friction points."
        ]
      },
      {
        heading: "Step 1: Gather Key Business and Customer Information",
        paragraphs: [
          "Before drafting the document, ensure you have verified contact information for both parties. Incomplete contact records frequently cause payments to get routed to the wrong department.",
          "Your invoice header must prominently state:"
        ],
        bulletPoints: [
          "Your business or legal trading name, physical address, email, phone number, and tax registration number (such as EIN, VAT, or GST ID where applicable).",
          "The client's complete billing details, including their legal company name, designated contact person, billing address, and email.",
          "Any client-supplied purchase order (PO) number or internal project code required by their accounts payable department."
        ]
      },
      {
        heading: "Step 2: Assign a Unique Invoice Number and Key Dates",
        paragraphs: [
          "Every invoice must carry an identifier that distinguishes it from every other document you issue. This prevents duplicate payments and satisfies auditing standards.",
          "Next, establish two distinct dates:",
          "1. Invoice Issue Date: The exact date you create and dispatch the invoice.",
          "2. Due Date: The explicit calendar date by which payment must reach your account (for example, 'Net 14' or 'Net 30' from the issue date). Avoid ambiguous phrases like 'payable upon receipt' whenever possible, as finance departments schedule payment batches based on calendar dates."
        ]
      },
      {
        heading: "Step 3: Itemize Products and Services Clearly",
        paragraphs: [
          "Vague descriptions such as 'Consulting services' or 'Design work' frequently trigger review holds in enterprise accounting teams. Instead, list each deliverable or task on its own line.",
          "For each item, include:"
        ],
        bulletPoints: [
          "Item Name & Description: Specific milestone, deliverable, or task performed.",
          "Quantity / Hours: Units delivered or hours logged.",
          "Unit Rate: Price per unit or hourly rate.",
          "Line Total: Product of quantity multiplied by unit rate."
        ]
      },
      {
        heading: "Step 4: Calculate Subtotals, Discounts, and Taxes",
        paragraphs: [
          "Perform calculations step by step to maintain transparency for both you and your client:"
        ],
        table: {
          headers: ["Calculation Step", "Formula", "Example ($)"],
          rows: [
            ["Subtotal", "Sum of all line item amounts", "$1,000.00"],
            ["Discount (if applicable)", "Subtotal × Discount %", "- $100.00 (10%)"],
            ["Taxable Amount", "Subtotal - Discount", "$900.00"],
            ["Tax (e.g., 8%)", "Taxable Amount × Tax %", "+ $72.00"],
            ["Total Amount Due", "Taxable Amount + Tax", "$972.00"]
          ]
        }
      },
      {
        heading: "Step 5: Specify Payment Terms and Instructions",
        paragraphs: [
          "Clients cannot pay you promptly if they do not know how to send funds. Conclude your invoice with transparent payment methods:",
          "• Direct Bank Transfer (ACH / SEPA / Wire): Include Account Holder Name, Bank Name, Routing Number/Sort Code, Account Number, and Swift/BIC code.",
          "• Online Payment Links: Note accepted credit cards or payment portal URLs.",
          "• Late Fee Policy: A polite note stating payment terms (e.g., '1.5% monthly interest on balances past 30 days') encourages on-time processing."
        ]
      }
    ],
    faqs: [
      {
        q: "Can I issue an invoice before delivering the work?",
        a: "Yes. Invoicing upfront for an agreed deposit (such as 30% or 50% retainer) is standard practice for custom commissions, creative projects, and contracted construction work. Label the line item 'Upfront Project Deposit' and reference the master agreement."
      },
      {
        q: "What should I do if a client requests revisions to an invoice?",
        a: "Never overwrite an existing invoice number. Reissue the document with a clear revision indicator (e.g., INV-1002-R1) and state in the notes which line items were amended for bookkeeping clarity."
      }
    ],
    relatedGuides: ["what-should-an-invoice-include", "invoice-payment-terms", "how-to-number-invoices"],
    relatedTemplates: ["simple-invoice", "freelance-invoice"]
  },
  {
    slug: "what-should-an-invoice-include",
    title: "What Should an Invoice Include? 10 Essential Elements",
    summary:
      "A complete checklist of mandatory and recommended fields every invoice must feature to be legally compliant and easily processed by accounts payable.",
    readTime: "5 min read",
    category: "Invoicing Standards",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "The Core Anatomy of a Commercial Invoice",
        paragraphs: [
          "Whether you are billing for custom software development, landscaping services, or wholesale goods, an invoice serves as an official accounting voucher. Omitting critical data points can invalidate the document for corporate tax deduction or delay your compensation.",
          "Here is the breakdown of the essential components that belong on every invoice you generate."
        ]
      },
      {
        heading: "1. The Word 'Invoice' Clearly Displayed",
        paragraphs: [
          "State the word 'Invoice' clearly at the top of the page. This distinguishes it from quotes, estimates, pro-forma declarations, and purchase orders."
        ]
      },
      {
        heading: "2. Your Business Information (Seller / Issuer)",
        paragraphs: [
          "Provide full contact credentials so the payer's finance team can verify your vendor record:",
          "• Full legal company name or DBA / sole proprietorship name.",
          "• Complete physical mailing address.",
          "• Direct phone number and billing email address.",
          "• Tax Identification Number (EIN, VAT, GST, or National Business Number)."
        ]
      },
      {
        heading: "3. Customer Information (Buyer / Client)",
        paragraphs: [
          "Specify the exact entity responsible for settling the charge:",
          "• Client company legal name or individual client name.",
          "• Billing contact person (e.g., 'Attention: Jane Doe, Head of Marketing').",
          "• Client billing address and registered email address.",
          "• Client VAT or tax registration number (crucial for cross-border B2B transactions)."
        ]
      },
      {
        heading: "4. Unique Invoice Identifier & Chronology",
        paragraphs: [
          "A systematic identifier (such as INV-2026-0042) paired with two vital dates: the date of issue (creation) and the precise payment due date."
        ]
      },
      {
        heading: "5. Comprehensive Itemization Table",
        paragraphs: [
          "A structured grid with columns for item description, quantity or hours, unit rate, and total line amount. Transparency here prevents back-and-forth email disputes."
        ]
      },
      {
        heading: "6. Summary of Totals: Subtotal, Deductions, and Tax",
        paragraphs: [
          "Clearly demarcate the gross subtotal, any negotiated volume or early-payment discount, statutory sales tax or VAT, and the final bolded net balance payable."
        ]
      },
      {
        heading: "7. Payment Instructions & Terms",
        paragraphs: [
          "Provide concrete instructions: bank wire coordinates (IBAN/SWIFT), account numbers, check mailing instructions, or online payment links, accompanied by terms (e.g., Net 30)."
        ]
      }
    ],
    faqs: [
      {
        q: "Is a physical handwritten signature required on a digital invoice?",
        a: "In the vast majority of commercial jurisdictions, a physical signature is not required on standard commercial invoices. Clear electronic transmission with complete seller and buyer credentials is fully legally recognized."
      },
      {
        q: "Do I have to list individual hourly entries or can I provide a summary?",
        a: "While a summary total is mathematically valid, corporate accounts payable teams often delay approval for summary charges without context. Providing task-level descriptions significantly speeds up payment release."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "how-to-calculate-invoice-tax", "invoice-payment-terms"],
    relatedTemplates: ["simple-invoice", "small-business-invoice"]
  },
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs. Receipt: Key Differences, Timelines, and Legal Uses",
    summary:
      "Understand the fundamental differences between an invoice and a receipt. Learn when each document is issued, who needs it, and why bookkeeping requires both.",
    readTime: "4 min read",
    category: "Accounting 101",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Understanding the Difference",
        paragraphs: [
          "While both invoices and receipts document financial transactions between a seller and a buyer, they represent opposite stages of the billing lifecycle. Using the terms interchangeably is common, but in business law and accounting, confusing the two can lead to duplicate payments or disorganized books.",
          "In short: an invoice is a request for payment issued before money changes hands, while a receipt is proof of payment issued after funds have been received."
        ]
      },
      {
        heading: "Side-by-Side Comparison",
        paragraphs: [
          "Here is how invoices and receipts compare across key operational criteria:"
        ],
        table: {
          headers: ["Attribute", "Invoice", "Receipt"],
          rows: [
            ["Timing", "Sent before payment is made", "Issued after payment is received"],
            ["Primary Purpose", "Requests payment & itemizes debts", "Confirms receipt of funds & settles balance"],
            ["Key Contents", "Due date, payment methods, terms", "Payment method used, amount paid, balance zero"],
            ["Accounting Role", "Recorded in Accounts Receivable (A/R)", "Recorded as settled cash in bank reconciliation"],
            ["Issued by", "Seller, contractor, or vendor", "Seller, retailer, or vendor post-settlement"]
          ]
        }
      },
      {
        heading: "When to Issue an Invoice",
        paragraphs: [
          "You should issue an invoice whenever you deliver products or perform services on credit or with agreed payment terms. Common examples include:",
          "• Freelance creative, programming, or consulting work delivered under milestone or monthly agreements.",
          "• B2B wholesale purchases where buyers pay on 15-, 30-, or 60-day terms.",
          "• Commercial services such as legal counsel, architectural drafting, or equipment maintenance."
        ]
      },
      {
        heading: "When to Issue a Receipt",
        paragraphs: [
          "A receipt should be provided the moment payment clears. It documents the exact date the money was received, the payment channel (e.g., 'Paid via Wire Transfer on Sept 15, 2026'), and confirms that the outstanding account balance for that specific transaction is now zero."
        ]
      }
    ],
    faqs: [
      {
        q: "Can an invoice serve as a receipt if stamped or labeled 'PAID'?",
        a: "Yes. Many businesses take the original invoice, mark it with a prominent 'PAID' stamp along with the date and payment method, and send it as a receipt. This is standard accounting practice."
      },
      {
        q: "Which document do tax authorities require for expense deductions?",
        a: "Most corporate tax authorities require both: the invoice establishes what was purchased and the agreed terms, while the receipt (or bank statement transaction) proves that money actually changed hands."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "invoice-payment-terms"],
    relatedTemplates: ["service-invoice", "simple-invoice"]
  },
  {
    slug: "how-to-number-invoices",
    title: "How to Number Invoices: Best Practices & Numbering Systems",
    summary:
      "Explore reliable invoice numbering systems, from sequential and chronological to client-coded schemas. Avoid duplicate numbers and maintain audit-ready records.",
    readTime: "5 min read",
    category: "Bookkeeping",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Why Systematic Invoice Numbering is Critical",
        paragraphs: [
          "Tax authorities, corporate auditors, and accounts payable teams require invoices to follow a coherent, non-repeating numbering scheme. Sequential numbering ensures you can easily trace uncollected receivables, prevent missing invoices in tax filings, and avoid billing confusion with recurring clients."
        ]
      },
      {
        heading: "Popular Invoice Numbering Schemes",
        paragraphs: [
          "Depending on your transaction volume and business type, choose one of these proven numbering methodologies:"
        ]
      },
      {
        heading: "1. Sequential Numbering (Simple & Universal)",
        paragraphs: [
          "The simplest method: start at a baseline number and increment by one with each document. Instead of starting at '1' (which might make your business look brand new), consider starting at 1001 or 00101.",
          "Examples: INV-1001, INV-1002, INV-1003."
        ]
      },
      {
        heading: "2. Date-Based / Chronological Numbering",
        paragraphs: [
          "Incorporate the year and month into the sequence. This scheme instantly reveals when the invoice was generated and automatically resets annually or monthly.",
          "Examples: INV-2026-001, INV-2026-002; or monthly format: INV-2609-01 (Year 2026, September, 1st invoice)."
        ]
      },
      {
        heading: "3. Client-Code or Project-Code Numbering",
        paragraphs: [
          "Assign unique initials or account identifiers to specific clients, followed by sequential numbers. This is helpful for agencies, consultants, and contractors managing multiple projects simultaneously.",
          "Examples: ACME-001, ACME-002, GLOBEX-001."
        ]
      },
      {
        heading: "Four Rules for Numbering Invoices",
        bulletPoints: [
          "Never reuse an invoice number, even if a client cancels an order or you reissue a corrected invoice (use revision suffix like INV-1001-R1).",
          "Keep number formats consistent across all documents to prevent software parsing errors.",
          "Use zero-padding (e.g., 001 instead of 1) so database queries and folder listings sort correctly.",
          "Log every invoice number in your central accounts ledger to guarantee no skipped gaps."
        ]
      }
    ],
    faqs: [
      {
        q: "What should I do if I accidentally skip an invoice number?",
        a: "Create an entry in your bookkeeping ledger marking that skipped number as 'Void / Unused' with a brief memo explaining the gap. Never alter previously issued numbers to fill the gap, as this could disrupt prior tax filings."
      },
      {
        q: "Is it acceptable to start my invoice numbers at 1001 instead of 1?",
        a: "Yes. Many independent consultants and new businesses start at 1001 or 5001 to maintain professional presentation and avoid displaying that a client is their very first customer."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "what-should-an-invoice-include"],
    relatedTemplates: ["simple-invoice", "small-business-invoice"]
  },
  {
    slug: "how-to-calculate-invoice-tax",
    title: "How to Calculate Invoice Tax: Sales Tax, VAT, and GST Explained",
    summary:
      "A practical guide to calculating sales tax, Value Added Tax (VAT), and Goods and Services Tax (GST) on invoices, including tax-exclusive vs. tax-inclusive pricing.",
    readTime: "6 min read",
    category: "Tax & Compliance",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Understanding Tax Obligations on Commercial Invoices",
        paragraphs: [
          "In many jurisdictions, businesses registered for indirect taxes (such as US State Sales Tax, European VAT, or Canadian/Australian GST) are legally obligated to itemize taxes on sales invoices. Charging and reporting tax accurately avoids compliance penalties and guarantees your customers can claim input tax credits where applicable."
        ]
      },
      {
        heading: "Tax-Exclusive vs. Tax-Inclusive Invoicing",
        paragraphs: [
          "B2B invoices are almost universally calculated on a tax-exclusive basis, meaning tax is computed on top of the subtotal. Consumer retail transactions are often presented tax-inclusive.",
          "QuickBills utilizes the standard tax-exclusive model used by corporate accounting software worldwide."
        ]
      },
      {
        heading: "Formulas for Calculating Invoice Tax",
        paragraphs: [
          "When discounts are involved, tax should generally be calculated on the discounted net amount (unless local tax codes state otherwise). Here is the standard calculation path:"
        ],
        table: {
          headers: ["Step", "Formula", "Calculation Example"],
          rows: [
            ["1. Net Subtotal", "Sum(Qty × Unit Price)", "2 items @ $150 = $300.00"],
            ["2. Deduct Discount", "Subtotal × Discount %", "$300.00 × 10% = $30.00"],
            ["3. Taxable Base", "Subtotal - Discount", "$300.00 - $30.00 = $270.00"],
            ["4. Apply Tax Rate", "Taxable Base × Tax Rate %", "$270.00 × 7.5% = $20.25"],
            ["5. Final Total", "Taxable Base + Tax Amount", "$270.00 + $20.25 = $290.25"]
          ]
        }
      },
      {
        heading: "Essential Tax Details to Display on the Invoice",
        paragraphs: [
          "When billing with tax, always ensure the following elements are present:",
          "• Your registered Tax Registration Number (e.g., EIN, VAT ID, ABN, GSTIN).",
          "• The explicit percentage tax rate applied (e.g., 'Tax (8.25%)').",
          "• The exact currency amount charged as tax.",
          "• If products have different tax rates or exemptions, note exempt line items clearly."
        ]
      }
    ],
    faqs: [
      {
        q: "Is sales tax applied before or after deducting a discount?",
        a: "In standard commercial practice, tax is calculated on the discounted net subtotal. Because the client is paying less money, tax is only due on the actual gross amount collected."
      },
      {
        q: "Can I collect sales tax or VAT if I am not registered with tax authorities?",
        a: "No. You cannot legally charge or collect tax from customers unless you have an active, registered tax identification number from your government or state tax authority."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "what-should-an-invoice-include"],
    relatedTemplates: ["small-business-invoice", "service-invoice"]
  },
  {
    slug: "invoice-payment-terms",
    title: "Invoice Payment Terms: Net 30, Net 15, and Due Upon Receipt Explained",
    summary:
      "A comprehensive guide to selecting the right payment terms for your business. Compare Net 10, Net 30, milestones, advance deposits, and late payment fee structures.",
    readTime: "5 min read",
    category: "Cash Flow",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Why Payment Terms Dictate Your Cash Flow",
        paragraphs: [
          "Payment terms determine when your business receives compensation for delivered goods and services. Ambiguous payment terms are one of the leading causes of unpaid invoices among freelancers and small service agencies. Stating your expectations in clear commercial terms eliminates ambiguity."
        ]
      },
      {
        heading: "Common Payment Terms Defined",
        paragraphs: [
          "Here is an overview of the industry-standard payment term terms:"
        ],
        table: {
          headers: ["Term", "Meaning", "Best Used For"],
          rows: [
            ["Due Upon Receipt", "Payment expected immediately upon receipt", "One-off services, urgent work, small projects"],
            ["Net 7 or Net 10", "Payment due within 7 to 10 calendar days", "Short-term gigs, contractors, weekly billables"],
            ["Net 14 or Net 15", "Payment due within 14 to 15 calendar days", "Freelancers, creative services, bi-weekly billing"],
            ["Net 30", "Payment due within 30 calendar days", "Standard B2B commercial transactions & corporate clients"],
            ["Net 60 / Net 90", "Payment due in 60 to 90 calendar days", "Large enterprise procurement (requires strong working capital)"],
            ["Milestone / Deposit", "Partial upfront deposit (e.g. 50%), balance on delivery", "Custom software, design projects, construction"]
          ]
        }
      },
      {
        heading: "Strategies to Encourage On-Time Payments",
        paragraphs: [
          "To minimize delays and maintain steady cash flow:",
          "1. Always communicate payment terms in writing before beginning work.",
          "2. Offer early payment incentives where appropriate (e.g., '2/10 Net 30' offers a 2% discount if paid within 10 days).",
          "3. Include a polite late payment notice stating applicable statutory interest for accounts past due."
        ]
      }
    ],
    faqs: [
      {
        q: "What does Net 30 mean in practical calendar days?",
        a: "Net 30 means the client has exactly 30 calendar days from the invoice issue date to deliver payment. If an invoice is issued on October 1st, payment must be received on or before October 31st."
      },
      {
        q: "Can small businesses enforce late payment interest fees?",
        a: "Yes, provided the late fee policy was clearly stated in your original contract or agreed statement of work. Many countries also have statutory interest rates for overdue commercial debts."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "invoice-for-freelancers"],
    relatedTemplates: ["freelance-invoice", "simple-invoice"]
  },
  {
    slug: "invoice-for-freelancers",
    title: "Invoicing for Freelancers & Contractors: Best Practices for Getting Paid Faster",
    summary:
      "Practical invoicing strategies for independent contractors, consultants, and creative freelancers. Learn how to structure hourly, flat-rate, and milestone billing.",
    readTime: "6 min read",
    category: "Freelancing",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "The Freelancer's Invoicing Dilemma",
        paragraphs: [
          "As an independent freelancer, cash flow is your lifeline. Unlike salaried employees, you bear responsibility for tracking deliverables, issuing billing notices, and following up on overdue receivables. A polished, professional invoice commands respect and ensures corporate finance teams take your payment requests seriously."
        ]
      },
      {
        heading: "Structuring Freelance Invoices by Billing Model",
        paragraphs: [
          "Adapt your line items to match the agreement made with your client:"
        ]
      },
      {
        heading: "1. Hourly Rate Invoicing",
        paragraphs: [
          "When billing hourly, list each work phase or task with exact hour breakdowns and rates (e.g., 'Front-end React Development - 24.5 hrs @ $85.00/hr'). Attach or reference a time-log summary to avoid questioning."
        ]
      },
      {
        heading: "2. Flat-Rate Deliverable / Milestone Invoicing",
        paragraphs: [
          "For fixed-scope engagements, tie invoices directly to accepted deliverables. For example, 'Milestone 2: Completion of User Experience Wireframes & Style Guide - $2,500.00'. Reference the original contract or statement of work date."
        ]
      },
      {
        heading: "3. Retainer Invoicing",
        paragraphs: [
          "Monthly retainer invoices should be issued at the start of the agreed billing cycle (e.g., 'Monthly SEO & Content Advisory Retainer: October 2026 - $1,500.00')."
        ]
      },
      {
        heading: "Freelance Invoicing Checklist",
        bulletPoints: [
          "Send the invoice to the designated accounts payable contact, not just your project manager.",
          "Include your complete banking details or digital payout instructions directly on the PDF.",
          "Establish short payment windows (Net 14 is ideal for independent contractors).",
          "Keep automated digital copies of every invoice for tax filing and quarterly estimates."
        ]
      }
    ],
    faqs: [
      {
        q: "Should freelancers request an upfront deposit from new clients?",
        a: "Yes. Requesting a 30% to 50% upfront deposit before starting work protects you against non-payment and qualifies the client's seriousness. Balance payments can be tied to milestone completion."
      },
      {
        q: "How should I follow up on an overdue freelance invoice?",
        a: "Send a polite follow-up email 2 business days after the due date with the original invoice PDF attached. Reference the project milestone and provide clear bank transfer links to make settlement effortless."
      }
    ],
    relatedGuides: ["how-to-create-an-invoice", "invoice-payment-terms", "invoice-vs-receipt"],
    relatedTemplates: ["freelance-invoice", "simple-invoice"]
  },
  {
    slug: "invoice-for-small-business",
    title: "Small Business Invoicing: Systems, Recordkeeping, and Cash Flow Management",
    summary:
      "A complete guide to scaling your small business billing workflow, maintaining accurate audit trails, managing recurring clients, and preventing cash flow gaps.",
    readTime: "7 min read",
    category: "Small Business",
    updatedDate: "Updated September 2026",
    sections: [
      {
        heading: "Professional Invoicing as an Engine of Growth",
        paragraphs: [
          "For growing small businesses, invoicing is the operational bridge between customer satisfaction and financial viability. Developing consistent billing habits protects working capital, eliminates bad debt write-offs, and simplifies end-of-year tax preparation."
        ]
      },
      {
        heading: "Key Operational Best Practices for Small Businesses",
        paragraphs: [
          "Implement these operational standards to streamline your billing pipeline:"
        ],
        bulletPoints: [
          "Invoice Promptly: Send invoices immediately upon order fulfillment or project completion. Delaying invoice dispatch signals to clients that payment is not urgent.",
          "Maintain Standardized Product Codes or Descriptions: Consistency across repeat orders prevents customer confusion.",
          "Implement Internal Verification: Ensure rates and line items match signed estimates, purchase orders, or master service agreements.",
          "Establish Clear Collections Procedures: Send automated polite reminders 3 days before due date, on the due date, and at 7/14 days overdue."
        ]
      },
      {
        heading: "Essential Recordkeeping & Audit Trails",
        paragraphs: [
          "Tax authorities generally require commercial entities to preserve sales invoices and billing records for 3 to 7 years depending on national jurisdiction. Maintain centralized, indexed digital archives of all issued invoices and matched bank deposits to facilitate effortless tax audits."
        ]
      }
    ],
    faqs: [
      {
        q: "How long are small businesses legally required to retain sales invoices?",
        a: "In the United States, the IRS recommends keeping records for at least 3 to 7 years. In the UK (HMRC) and EU countries, statutory retention periods for commercial records typically range from 6 to 10 years."
      },
      {
        q: "How can small businesses prevent bad debt and unpaid invoices?",
        a: "Implement clear written credit terms prior to order fulfillment, require purchase order documentation, run credit checks on large corporate accounts, and offer modest early payment discounts (e.g., 2% Net 10)."
      }
    ],
    relatedGuides: ["how-to-calculate-invoice-tax", "how-to-number-invoices", "what-should-an-invoice-include"],
    relatedTemplates: ["small-business-invoice", "service-invoice"]
  }
];
