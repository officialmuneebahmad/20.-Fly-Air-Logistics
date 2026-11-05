export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  iconName: string;
  overview: string[];
  features: string[];
  capabilities: ServiceCapability[];
  pakistanGateways: string[];
  globalReach: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "air-freight",
    slug: "air-freight",
    title: "Air Freight Forwarding",
    tagline: "High-Priority Air Cargo from Pakistan to All Major Global Airports",
    shortDescription:
      "Time-critical international air freight solutions with priority airline space, temperature-controlled options, and express customs handling.",
    iconName: "Plane",
    overview: [
      "When business velocity requires accelerated transit, Fly Air Logistics delivers reliable international air cargo services connecting all commercial hubs of Pakistan to major global airports across the Americas, Europe, the Middle East, Africa, and the Asia-Pacific.",
      "Since 2012, backed by foundational logistics roots established in the 1980s, our air operations team partners with premier global carriers—including Emirates SkyCargo, Qatar Airways Cargo, Saudia, Turkish Cargo, and Qatar Airways—ensuring guaranteed block space agreements during peak export seasons."
    ],
    features: [
      "Direct flights and scheduled consolidation options for maximum cost efficiency",
      "Perishable and cold-chain cargo support (fruits, pharmaceuticals, meat)",
      "High-value commodity handling (surgical instruments, leather apparel, textiles)",
      "Express airport-to-airport and door-to-airport clearance solutions",
      "Complete IATA documentation, Master Air Waybill (MAWB), and House Air Waybill (HAWB) issuance"
    ],
    capabilities: [
      {
        title: "Standard & Express Air Cargo",
        description: "Scheduled general cargo departures tailored for regular supply chain distribution or rush production orders."
      },
      {
        title: "Charter & Part-Charter Flights",
        description: "Dedicated aircraft chartering for out-of-gauge equipment, emergency relief cargo, or high-volume seasonal export contracts."
      },
      {
        title: "Perishable & Cold Chain Services",
        description: "Temperature-controlled thermal blankets, dry ice packaging, and rapid apron handling for perishable agricultural and pharma shipments."
      },
      {
        title: "Valuable & Sensitive Cargo",
        description: "Secure, tamper-evident handling protocols for precision surgical tools, electronics, samples, and luxury leather goods."
      }
    ],
    pakistanGateways: [
      "Allama Iqbal International Airport (LHE), Lahore",
      "Jinnah International Airport (KHI), Karachi",
      "Islamabad International Airport (ISB)",
      "Sialkot International Airport (SKT)",
      "Multan International Airport (MUX)",
      "Faisalabad International Airport (LYP)"
    ],
    globalReach: [
      "North America: New York (JFK), Chicago (ORD), Los Angeles (LAX), Toronto (YYZ)",
      "Europe & UK: London Heathrow (LHR), Frankfurt (FRA), Amsterdam (AMS), Milan (MXP)",
      "Middle East & Gulf: Dubai (DXB), Riyadh (RUH), Jeddah (JED), Doha (DOH)",
      "Asia & Oceania: Shanghai (PVG), Singapore (SIN), Sydney (SYD)"
    ],
    faqs: [
      {
        question: "How is chargeable weight calculated for air freight shipments?",
        answer: "Chargeable weight is calculated by taking the higher value between the actual gross weight (in kg) and the volumetric weight. Volumetric weight is calculated using the international IATA standard formula: (Length cm × Width cm × Height cm) / 6000."
      },
      {
        question: "Which airports in Pakistan do you operate out of?",
        answer: "We manage cargo departures and arrivals out of all functional international cargo terminals in Pakistan, including Lahore (LHE), Karachi (KHI), Islamabad (ISB), Sialkot (SKT), Multan (MUX), and Faisalabad (LYP)."
      },
      {
        question: "Can Fly Air Logistics handle perishable cargo like mangoes or citrus?",
        answer: "Yes, we specialize in seasonal Pakistani perishable agricultural exports, coordinating with specialized ground handlers and airlines equipped with temperature-regulated cold rooms and active reefer containers."
      }
    ],
    metaTitle: "International Air Freight Services from Pakistan | Fly Air Logistics",
    metaDescription: "Reliable air cargo forwarding from Lahore, Karachi, Islamabad, and Sialkot to global hubs. Priority space, express transit, and customs support since 2012."
  },
  {
    id: "sea-freight",
    slug: "sea-freight",
    title: "Sea Freight Forwarding",
    tagline: "Ocean Transportation & Container Shipping via Karachi Port & Port Qasim",
    shortDescription:
      "Cost-effective ocean shipping services providing FCL, LCL consolidation, breakbulk, and multimodal feeder connections worldwide.",
    iconName: "Ship",
    overview: [
      "Ocean freight constitutes the backbone of international trade. Fly Air Logistics provides comprehensive maritime shipping solutions connecting Pakistan’s primary seaports—Karachi Port Trust (KPT) and Port Muhammad Bin Qasim (QICT)—with all premier deep-water container terminals worldwide.",
      "Whether you are shipping full container loads of raw cotton, home textiles, and marble tiles or consolidating smaller industrial machinery batches, our long-standing relationships with leading shipping lines ensure secure vessel space, competitive ocean contracts, and dependable sailing schedules."
    ],
    features: [
      "Full Container Load (FCL) 20ft, 40ft Standard, 40ft High Cube, and Open Top equipment",
      "Less than Container Load (LCL) consolidation for cost-effective smaller volumes",
      "Upcountry rail and bonded road transport from Lahore and Sialkot dry ports to Karachi berths",
      "Direct carrier contracts with Maersk, MSC, CMA CGM, Hapag-Lloyd, and COSCO",
      "Port-to-port and door-to-port maritime Bill of Lading management"
    ],
    capabilities: [
      {
        title: "FCL (Full Container Load)",
        description: "Dedicated container space for single-shipper consignments with flexible equipment allocation and direct port call routings."
      },
      {
        title: "LCL (Less-than-Container Load) Consolidation",
        description: "Scheduled consolidation hubs allowing multiple exporters to share container space and lower overall landed freight costs."
      },
      {
        title: "Reefer & Temperature-Regulated Containers",
        description: "Integrated cold-chain container solutions maintaining precise thermal zones for seafood, seasonal fruits, and dairy products."
      },
      {
        title: "Out-of-Gauge (OOG) & Flat Racks",
        description: "Specialized equipment for oversized machinery, industrial tanks, and heavy vehicles unable to load inside dry boxes."
      }
    ],
    pakistanGateways: [
      "Karachi Port Trust (KPT) - East & West Wharves",
      "Port Muhammad Bin Qasim (QICT / FOTCO)",
      "Gwadar Deep Sea Port",
      "Lahore Dry Port (Prem Nagar / Mughalpura)",
      "Sialkot Dry Port Trust (Sambrial)",
      "Faisalabad Dry Port"
    ],
    globalReach: [
      "Europe & Mediterranean: Rotterdam, Hamburg, Antwerp, Felixstowe, Genoa, Valencia",
      "North America: New York / New Jersey, Savannah, Houston, Los Angeles, Vancouver",
      "Middle East & GCC: Jebel Ali (Dubai), Dammam, Jeddah, Shuwaikh, Hamad",
      "Asia-Pacific: Singapore, Port Klang, Busan, Shanghai, Ningbo"
    ],
    faqs: [
      {
        question: "What is the difference between FCL and LCL shipping?",
        answer: "FCL (Full Container Load) means an entire container is reserved exclusively for your goods. LCL (Less than Container Load) pools shipments from multiple shippers into one shared container, allowing you to pay solely for the space (CBM or metric tons) you consume."
      },
      {
        question: "Can I clear customs in Lahore instead of Karachi for sea shipments?",
        answer: "Yes, through Pakistan's network of Inland Container Depots (Dry Ports) such as Lahore Prem Nagar or Mughalpura, your cargo can be bonded, customs-cleared upcountry, and railed or transported under customs seal directly to Karachi ports."
      },
      {
        question: "What are typical ocean transit times from Karachi to Europe or North America?",
        answer: "Direct or single-transshipment container services typically take 20–28 days to key European ports (Rotterdam, Felixstowe) and 30–42 days to North American East and West Coast ports."
      }
    ],
    metaTitle: "Sea Freight Forwarding & Ocean Cargo Pakistan | Fly Air Logistics",
    metaDescription: "FCL and LCL container shipping from Karachi Port Trust and Port Qasim to worldwide ports. Trusted maritime logistics, competitive rates, and reliable sailing schedules."
  },
  {
    id: "land-freight",
    slug: "land-freight",
    title: "Land Freight & Cross-Border Trucking",
    tagline: "Nationwide Inland Drayage & Regional Cross-Border Road Transport",
    shortDescription:
      "Reliable inland highway transport connecting factories, dry ports, and seaports across Pakistan, plus bonded regional trade routes.",
    iconName: "Truck",
    overview: [
      "Inland freight movement is the vital operational bridge connecting manufacturing facilities across Punjab, Khyber Pakhtunkhwa, and Sindh with Pakistan's primary export gateways. Fly Air Logistics operates managed fleets of flatbeds, box trailers, and bonded container chassis.",
      "Our ground transport networks adhere to strict vehicle safety protocols, continuous en-route visibility, and experienced long-haul drivers accustomed to navigating Pakistan's major highway corridors including the M-2, M-3, M-5, and N-5 National Highway arteries."
    ],
    features: [
      "Bonded and non-bonded container drayage between Karachi ports and upcountry dry ports",
      "Factory-to-terminal container pickup and delivery across all major industrial estates",
      "Full Truckload (FTL) and Less Than Truckload (LTL) nationwide distribution",
      "Heavy-haul lowbed trailers for out-of-gauge industrial machinery and plant relocations",
      "24/7 journey management, cargo tracking, and customs-sealed transit security"
    ],
    capabilities: [
      {
        title: "Bonded Inland Transit Drayage",
        description: "Customs-bonded truck movements transferring import/export containers under official seal between coastal seaports and upcountry dry ports."
      },
      {
        title: "Full Truckload (FTL) Highway Transport",
        description: "Dedicated 20ft, 40ft, and 50ft multi-axle trailers transporting heavy manufactured loads without mid-route transfers."
      },
      {
        title: "Less-than-Truckload (LTL) Regional Pickups",
        description: "Cost-effective consolidated road runs for smaller cargo consignments collected directly from factory warehouses."
      },
      {
        title: "Project & Heavy Haulage",
        description: "Multi-axle hydraulic trailers, lowbeds, and escort coordination for extreme heavy-lift generators, turbines, and structural steel."
      }
    ],
    pakistanGateways: [
      "Lahore Industrial Zones (Sundar, Quaid-e-Azam, Brandreth Road, Kot Lakhpat)",
      "Faisalabad & Sheikhupura Industrial Corridors",
      "Sialkot, Gujranwala & Gujrat Export Hubs",
      "Karachi Port Corridors & Port Qasim Industrial Area",
      "Peshawar & Northern Dry Port Connections"
    ],
    globalReach: [
      "Domestic: Nationwide coverage across all four provinces",
      "Cross-Border Transit: Pakistan to Afghanistan, China (via Khunjerab Pass / Karakoram Highway), and Central Asian Republics"
    ],
    faqs: [
      {
        question: "How long does inland container transport take from Lahore to Karachi?",
        answer: "Standard road transit along the M-5 and N-5 highway corridors takes approximately 36 to 48 hours under normal conditions. Express bonded line-haul runs can achieve port gate-in within 30 to 36 hours."
      },
      {
        question: "Are your trucks customs-bonded for sealed transit?",
        answer: "Yes, our bonded carrier operations allow containers to be moved under official Pakistan Customs seal from Karachi seaports to inland dry ports without customs intervention along the highway."
      },
      {
        question: "Do you have lowbed trailers for heavy industrial machinery?",
        answer: "Yes, we deploy specialized low-bed and multi-axle hydraulic trailers designed specifically for oversized machinery, transformers, and industrial boilers."
      }
    ],
    metaTitle: "Land Freight & Container Drayage Pakistan | Fly Air Logistics",
    metaDescription: "Nationwide container transport, bonded road drayage, and heavy haulage connecting Lahore, Karachi, Sialkot, and Faisalabad. Reliable, tracked inland trucking."
  },
  {
    id: "customs-clearance",
    slug: "customs-clearance",
    title: "Customs Brokerage & Clearance",
    tagline: "Licensed Customs Clearance at All Air Cargo & Sea Terminals in Pakistan",
    shortDescription:
      "Licensed customs clearance agents handling WeBOC filing, Pakistan Single Window (PSW), HS code classification, and regulatory compliance.",
    iconName: "FileCheck",
    overview: [
      "Navigating Pakistan's complex customs regulations, tariff structures, and statutory regulatory orders (SROs) requires deep institutional expertise. Fly Air Logistics provides licensed customs clearance brokerage at all major sea terminals, inland dry ports, and air cargo stations.",
      "Our licensed clearing agents oversee end-to-end processing through the Pakistan Single Window (PSW) and WeBOC platforms, conducting thorough document pre-audits to minimize delays, prevent misdeclaration penalties, and secure prompt green or yellow channel clearance."
    ],
    features: [
      "Official representation and filing on Pakistan Single Window (PSW) and WeBOC",
      "Pre-clearance tariff assessment and HS code advisory to ensure compliance",
      "Direct coordination with examining officers, appraisers, and laboratory officials",
      "Management of trade concessions, preferential tariff agreements (CPFTA, SAFTA), and SRO benefits",
      "Rapid resolution of customs holds, examination notices, and post-clearance audits"
    ],
    capabilities: [
      {
        title: "Import Customs Clearance",
        description: "Complete import Goods Declaration (GD) filing, duty calculation, valuation verification, and rapid terminal release."
      },
      {
        title: "Export Customs Brokerage",
        description: "Outbound GD submissions, shipping bill processing, bank Form E reconciliation, and terminal gate-in facilitation."
      },
      {
        title: "Temporary Import & Bond Management",
        description: "Assistance with duty-free temporary imports under Manufacturing Bond regimes, DTRE, and Carnet ATA."
      },
      {
        title: "Regulatory Agency Approvals",
        description: "Liaison with the Department of Plant Protection, PSQCA, PTA, and environmental protection agencies."
      }
    ],
    pakistanGateways: [
      "Karachi Port Trust (KPT) Appraising Collectorates",
      "Port Qasim Collectorate of Customs",
      "Lahore Dry Port (Mughalpura / Prem Nagar)",
      "Air Freight Unit (AFU) Allama Iqbal Airport, Lahore",
      "Air Freight Unit (AFU) Jinnah International Airport, Karachi",
      "Sialkot, Faisalabad, and Multan Collectorates"
    ],
    globalReach: [
      "Full compliance coverage across all international trade corridors originating or terminating in Pakistan."
    ],
    faqs: [
      {
        question: "What documents are required to clear an import shipment in Pakistan?",
        answer: "Mandatory documents include the Commercial Invoice, Packing List, Bill of Lading or Air Waybill, Certificate of Origin, Sales Tax and NTN certificates, and any specific regulatory import permits required for controlled commodities."
      },
      {
        question: "How long does customs clearance typically take?",
        answer: "Shipments assigned to the Green Channel clear automatically within a few hours of duty payment. Yellow Channel documentary reviews take 24–48 hours. Red Channel physical examinations take 48–72 hours depending on port congestion."
      },
      {
        question: "Can Fly Air Logistics assist with HS code classification before we ship?",
        answer: "Yes, we encourage clients to share commercial product specifications prior to shipping so our brokerage team can verify the correct 8-digit Pakistan Customs Tariff (PCT) code and applicable duty percentages."
      }
    ],
    metaTitle: "Customs Clearance & Brokerage Pakistan | Fly Air Logistics",
    metaDescription: "Licensed customs clearing agents in Lahore and Karachi. Expert WeBOC, PSW filing, tariff classification, and speedy terminal release for imports and exports."
  },
  {
    id: "door-to-door",
    slug: "door-to-door",
    title: "Door-to-Door Cargo Delivery",
    tagline: "Frictionless End-to-End International Logistics from Shipper to Consignee",
    shortDescription:
      "Seamless door-to-door freight management handling factory pickup, export clearance, ocean/air freight, destination clearance, and final delivery.",
    iconName: "Truck",
    overview: [
      "Modern international trade demands end-to-end simplicity. Our Door-to-Door logistics service takes full accountability for your cargo journey from the moment it is packed at the manufacturer's facility in Pakistan until it is safely offloaded at the customer’s overseas warehouse.",
      "By unifying domestic trucking, export customs brokerage, international air or ocean carriage, destination import clearance, and final-mile distribution under a single point of contact, Fly Air Logistics eliminates communication silos and unexpected handoff expenses."
    ],
    features: [
      "Single-invoice end-to-end logistics with transparent pricing",
      "DDP (Delivered Duty Paid) and DAP (Delivered at Place) terms execution",
      "Factory pickup and warehouse consolidation across all major industrial clusters",
      "International customs clearance at destination ports via vetted partner networks",
      "Dedicated account manager providing continuous milestone tracking updates"
    ],
    capabilities: [
      {
        title: "DDP (Delivered Duty Paid) Solutions",
        description: "The ultimate white-glove service: we handle origin pickup, freight, destination customs clearance, and duty payments."
      },
      {
        title: "DAP (Delivered at Place)",
        description: "Comprehensive freight and delivery up to the consignee's facility, with import duties and taxes settled by the receiver."
      },
      {
        title: "Commercial Sample & Express Parcels",
        description: "Rapid delivery of high-priority prototypes, textile cuttings, and export samples to international trade buyers."
      },
      {
        title: "Final-Mile Scheduled Distribution",
        description: "Coordination with destination pallet couriers, liftgate trucks, and appointment-based commercial receivers."
      }
    ],
    pakistanGateways: [
      "Door pickups across Lahore, Gujranwala, Sialkot, Faisalabad, Karachi, Rawalpindi, and Peshawar."
    ],
    globalReach: [
      "Direct door deliveries throughout the United States, Canada, United Kingdom, European Union countries, UAE, Saudi Arabia, and Australia."
    ],
    faqs: [
      {
        question: "What is the primary difference between DDP and DAP door-to-door delivery?",
        answer: "Under DDP (Delivered Duty Paid), Fly Air Logistics manages and prepays the destination import duties and local taxes on your behalf. Under DAP (Delivered at Place), we deliver the cargo directly to the recipient's door, but the recipient settles the destination import taxes with local customs."
      },
      {
        question: "Can you pick up cargo directly from our factory in Punjab?",
        answer: "Yes, our local drayage fleet provides scheduled collections directly from production units across Lahore, Sialkot, Faisalabad, Gujranwala, and surrounding industrial zones."
      },
      {
        question: "How do I track my shipment during its door-to-door journey?",
        answer: "Your dedicated Fly Air Logistics coordinator provides regular milestone updates covering pickup, export clearance, departure, arrival at destination port, import release, and final door delivery confirmation."
      }
    ],
    metaTitle: "Door-to-Door International Cargo Delivery | Fly Air Logistics",
    metaDescription: "Frictionless door-to-door cargo shipping from Pakistan to global destinations. We handle factory pickup, ocean/air freight, destination customs, and final delivery."
  },
  {
    id: "warehousing",
    slug: "warehousing",
    title: "Warehousing & Cargo Storage",
    tagline: "Secure Short-Term & Long-Term Storage Solutions in Key Strategic Hubs",
    shortDescription:
      "Modern warehousing, cargo staging, palletizing, shrink-wrapping, and consolidation facilities near key transport arteries.",
    iconName: "Warehouse",
    overview: [
      "Strategic warehousing and cargo staging empower businesses to optimize supply chain timing, consolidate shipments from multiple vendors, and buffer inventory against market volatility. Fly Air Logistics provides secure warehousing and cargo staging solutions near major trade hubs in Lahore and Karachi.",
      "Equipped with modern material handling equipment, 24/7 security surveillance, and trained logistics personnel, our facilities offer flexible short-term transit storage and long-term storage agreements tailored to corporate manufacturing and export demands."
    ],
    features: [
      "24/7 guarded security, CCTV monitoring, and fire-suppression systems",
      "Cargo sorting, segregation, and purchase-order level consolidation",
      "Export palletization (wooden heat-treated ISPM-15 and plastic pallets)",
      "High-durability shrink wrapping, carton labeling, and strapping",
      "Cross-docking and container stuffing/de-stuffing operations"
    ],
    capabilities: [
      {
        title: "Transit & Staging Storage",
        description: "Temporary secure staging for cargo awaiting flight departures, ocean vessel berthing, or final customs paperwork."
      },
      {
        title: "Export Packaging & Palletization",
        description: "Professional palletizing, strapping, corner-board protection, and fumigation marking complying with global phytosanitary rules."
      },
      {
        title: "Cross-Docking Services",
        description: "Immediate transfer of incoming cargo from domestic trucks directly into export containers without prolonged storage expenses."
      },
      {
        title: "Inventory Sorting & Order Kitting",
        description: "Systematic sorting and kitting of multi-vendor textile, apparel, or hardware goods prior to export consolidation."
      }
    ],
    pakistanGateways: [
      "Lahore Warehousing Network (Brandreth Road & Ring Road corridors)",
      "Karachi Port & Industrial Hub Storage Facilities",
      "Sialkot Export Staging Warehouses"
    ],
    globalReach: [
      "Global bonded storage access through trusted international forwarder networks at key transshipment hubs (Dubai, Rotterdam, Singapore)."
    ],
    faqs: [
      {
        question: "Do you offer palletization and export wrapping services at your warehouse?",
        answer: "Yes, we provide full export preparation including ISPM-15 compliant heat-treated wooden pallets, plastic pallets, heavy-duty stretch film wrapping, and steel or polyester strapping."
      },
      {
        question: "Can I consolidate goods from multiple suppliers before shipping?",
        answer: "Absolutely. Multi-vendor consolidation is one of our core specialties. We receive shipments from your various vendors, verify counts, and pack them together into a single cost-effective export consignment."
      },
      {
        question: "Are the storage facilities insured and secure?",
        answer: "Our partner warehousing facilities maintain 24/7 on-site security guards, CCTV surveillance, controlled facility access, and standard warehouse keeper liability coverage."
      }
    ],
    metaTitle: "Warehousing & Cargo Storage Services Pakistan | Fly Air Logistics",
    metaDescription: "Secure cargo staging, palletization, shrink-wrapping, and consolidation warehouses in Lahore and Karachi. Safe short-term and long-term storage solutions."
  },
  {
    id: "cargo-insurance",
    slug: "cargo-insurance",
    title: "Marine & Air Cargo Insurance",
    tagline: "Comprehensive Transit Risk Mitigation for High-Value Consignments",
    shortDescription:
      "All-Risk marine and air cargo insurance shielding your shipments against loss, damage, theft, and General Average casualties.",
    iconName: "Shield",
    overview: [
      "International transit involves physical risks—from adverse oceanic weather and rough handling to container salvage emergencies and geopolitical turbulence. Many shippers mistakenly believe that carrier liability provides adequate protection, only to discover standard carrier compensation limits cover merely a fraction of the invoice value.",
      "Fly Air Logistics facilitates comprehensive Marine and Air Cargo Insurance policies structured under international Institute Cargo Clauses (A), delivering genuine peace of mind and safeguarding your balance sheet against financial loss during global transit."
    ],
    features: [
      "Institute Cargo Clauses (A) 'All-Risk' door-to-door coverage",
      "Protection against physical damage, vessel capsizing, jettison, and total loss",
      "Full coverage for 'General Average' contributions under maritime law",
      "Fast-track claims processing with recognized global loss-adjuster networks",
      "Tailored coverage for single voyages or annual open-cover corporate policies"
    ],
    capabilities: [
      {
        title: "Institute Cargo Clauses (A) - All Risk",
        description: "The broadest maritime and air transit protection, covering all fortuitous risks of physical loss or damage from external causes."
      },
      {
        title: "General Average Protection",
        description: "Guaranteed bond posting and financial indemnification when a shipping master declares General Average during a maritime crisis."
      },
      {
        title: "Warehouse-to-Warehouse Coverage",
        description: "Seamless policy protection extending from the moment cargo leaves the origin factory until it is received at final destination."
      },
      {
        title: "Perishable & Reefer Breakdown Clauses",
        description: "Specialized endorsements protecting against temperature variations and reefer machinery malfunction during transit."
      }
    ],
    pakistanGateways: [
      "Applicable across all air, ocean, and ground freight journeys originating from or arriving into Pakistan."
    ],
    globalReach: [
      "Worldwide insurance validity underwritten by reputable international insurance syndicates."
    ],
    faqs: [
      {
        question: "Doesn't the carrier (airline or shipping line) automatically insure my cargo?",
        answer: "No. Carriers operate under international conventions (such as Hague-Visby or Montreal Convention) that strictly limit their liability to nominal amounts based on weight (e.g., ~$20/kg or $500 per shipping unit), and they exclude 'Acts of God', heavy weather, and General Average."
      },
      {
        question: "What is General Average?",
        answer: "General Average is an ancient maritime principle where all cargo owners aboard a vessel must proportionately share in the financial loss if the captain sacrifices cargo or incurs emergency expenses to save the ship during a catastrophe. Marine cargo insurance pays your required contribution."
      },
      {
        question: "How is the insurance premium calculated?",
        answer: "Premiums are calculated as a small percentage of the total insured value (typically 110% of the commercial invoice value plus freight costs), depending on commodity type, packaging, destination, and transit mode."
      }
    ],
    metaTitle: "Cargo Insurance & Marine Transit Protection | Fly Air Logistics",
    metaDescription: "All-Risk marine and air cargo insurance for international shipments. Protect your exports and imports from damage, theft, and General Average risks."
  },
  {
    id: "documentation",
    slug: "documentation",
    title: "Export & Import Documentation",
    tagline: "Flawless Regulatory Compliance & Commercial Trade Paperwork",
    shortDescription:
      "Expert preparation and authentication of Certificates of Origin, Bills of Lading, Form E, commercial invoices, and consular legalization.",
    iconName: "FileSpreadsheet",
    overview: [
      "In international shipping, paperwork errors are among the most frequent sources of clearance delays, bank Letter of Credit (L/C) rejections, and financial penalties. Fly Air Logistics provides meticulous export and import documentation services, ensuring every manifest, declaration, and certificate aligns seamlessly.",
      "Our trade advisory team reviews and prepares all commercial documentation in accordance with international banking rules (UCP 600) and bilateral trade agreements, protecting exporters from payment discrepancies and import delays."
    ],
    features: [
      "Chamber of Commerce Certificate of Origin (COO) authentication",
      "Master and House Bill of Lading (B/L) and Air Waybill (AWB) issuance",
      "State Bank of Pakistan (SBP) electronic Form E and bank financial endorsements",
      "UCP 600 Letter of Credit (L/C) document review and compliance matching",
      "Consular legalization, apostille services, and embassy attestations"
    ],
    capabilities: [
      {
        title: "Certificate of Origin (COO) Management",
        description: "Authenticating origin certificates through regional Pakistani Chambers to allow buyers to claim tariff exemptions."
      },
      {
        title: "Bank L/C Compliance Audits",
        description: "Pre-checking shipping descriptions, marks, weights, and dates against commercial Letter of Credit requirements."
      },
      {
        title: "Phytosanitary & Fumigation Documentation",
        description: "Coordinating with government quarantine authorities to certify wood-packaging fumigation and agricultural health standards."
      },
      {
        title: "Customs Valuation & Packing Specifications",
        description: "Drafting bilingual or standardized packing lists and proforma invoices matching international border expectations."
      }
    ],
    pakistanGateways: [
      "Direct processing across Lahore Chamber (LCCI), Karachi Chamber (KCCI), Sialkot Chamber (SCCI), and federal agencies."
    ],
    globalReach: [
      "Global compliance alignment with customs authorities across North America, the EU, UK, Middle East, and Asia."
    ],
    faqs: [
      {
        question: "Why is a Certificate of Origin so important for buyers?",
        answer: "A Certificate of Origin proves where the goods were manufactured. Overseas buyers need it to determine import tariff rates and to claim preferential duty-free or reduced-duty treatment under trade pacts like GSP+ or bilateral free trade agreements."
      },
      {
        question: "What is an electronic Form E in Pakistan trade?",
        answer: "Form E is a mandatory electronic foreign exchange document required by the State Bank of Pakistan (SBP) and Pakistan Customs to ensure that export proceeds are realized and repatriated to Pakistan through official banking channels."
      },
      {
        question: "Can Fly Air Logistics assist with documentary discrepancies under Letters of Credit?",
        answer: "Yes, our documentation team scrutinizes your transport documents against L/C clauses prior to carrier submission to eliminate discrepant presentations and avoid bank negotiation delays."
      }
    ],
    metaTitle: "Export & Import Documentation Services | Fly Air Logistics",
    metaDescription: "Flawless trade documentation: Certificate of Origin, Bill of Lading, Form E, and L/C compliance. Avoid delays and ensure smooth international customs clearance."
  },
  {
    id: "lcl-fcl",
    slug: "lcl-fcl",
    title: "LCL & FCL Cargo Consolidation",
    tagline: "Optimized Container Space Utilization for Small and Large Shippers",
    shortDescription:
      "Weekly ocean consolidation boxes (LCL) and competitive full container (FCL) shipping tailored to your shipment volume.",
    iconName: "Boxes",
    overview: [
      "Whether your cargo spans a single pallet or fifty 40ft High Cube containers, Fly Air Logistics provides flexible container freight management. We operate regular Less than Container Load (LCL) consolidation services for smaller consignments, as well as dedicated Full Container Load (FCL) contracts.",
      "By consolidating shipments from multiple reputable exporters, we enable smaller businesses to access competitive ocean freight rates without waiting to accumulate enough cargo for a full container, shortening their order fulfillment cycles."
    ],
    features: [
      "Regular weekly LCL groupage departures to key European, US, and Middle Eastern hubs",
      "Direct FCL bookings with top-tier ocean carriers at locked-in contractual rates",
      "Expert container stuffing and de-stuffing at licensed Container Freight Stations (CFS)",
      "Strict volumetric measurement and weight verification to prevent billing surprises",
      "Buyer's consolidation: merging multiple vendor orders into one dedicated container"
    ],
    capabilities: [
      {
        title: "LCL Groupage Services",
        description: "Shared container space with transparent per-CBM pricing, ideal for shipments between 1 CBM and 15 CBM."
      },
      {
        title: "FCL Dedicated Containers",
        description: "20ft (33 CBM) and 40ft (67 CBM) / 40HC (76 CBM) containers for high-volume single-consignee exports."
      },
      {
        title: "Buyer's Consolidation Program",
        description: "We collect shipments from multiple Pakistani suppliers and pack them into a single FCL container for one overseas buyer."
      },
      {
        title: "CFS Container De-Stuffing",
        description: "Careful unpacking, inspection, and segregation of imported consolidated containers at Pakistani dry ports."
      }
    ],
    pakistanGateways: [
      "Karachi Port Trust (KPT) CFS Terminals",
      "Port Qasim Container Freight Stations",
      "Lahore Dry Port Consolidation Depots",
      "Sialkot Dry Port Trust Consolidation Centers"
    ],
    globalReach: [
      "Direct groupage boxes to Jebel Ali (Dubai), Rotterdam, Hamburg, Felixstowe, New York, Singapore, and Colombo."
    ],
    faqs: [
      {
        question: "When does it make sense to switch from LCL to FCL?",
        answer: "As a general rule, once your shipment volume exceeds 13 to 15 CBM, booking a dedicated 20ft container (FCL) usually becomes more cost-effective than paying cumulative LCL cubic meter charges."
      },
      {
        question: "What is Buyer's Consolidation and how does it save money?",
        answer: "If an overseas buyer purchases goods from multiple manufacturers in Pakistan, Fly Air Logistics collects all orders, consolidates them into a single FCL container, and ships them together. This drastically reduces destination handling and customs clearance costs."
      },
      {
        question: "How is LCL pricing calculated?",
        answer: "LCL ocean freight is calculated per Revenue Ton (w/m), which means 1 Cubic Meter (CBM) or 1,000 Kilograms (1 Metric Ton), whichever yields the higher revenue."
      }
    ],
    metaTitle: "LCL & FCL Cargo Consolidation Pakistan | Fly Air Logistics",
    metaDescription: "Weekly LCL groupage and FCL container shipping from Karachi and Lahore. Maximize cost savings with buyer consolidation and scheduled container departures."
  },
  {
    id: "project-cargo",
    slug: "project-cargo",
    title: "Project Cargo & Heavy Lift",
    tagline: "Engineering-Led Logistics for Oversized, Heavy & Critical Infrastructure Cargo",
    shortDescription:
      "Specialized transport and engineering for out-of-gauge (OOG) machinery, industrial plant relocations, power generation, and infrastructure projects.",
    iconName: "ShieldAlert",
    overview: [
      "Moving oversized, overweight, or mission-critical equipment requires rigorous engineering planning, route surveys, specialized transport hardware, and precision handling. Fly Air Logistics manages project cargo logistics for industrial machinery, energy infrastructure, and manufacturing plant expansions.",
      "From feasibility route studies across Pakistani highways to chartering breakbulk ocean vessels and orchestrating crane lift plans, our experienced project team ensures complex industrial consignments arrive intact, on schedule, and fully compliant with safety codes."
    ],
    features: [
      "Detailed route surveys identifying bridge weight capacities, overhead clearances, and bypasses",
      "Breakbulk vessel chartering, part-charters, and Roll-on/Roll-off (RoRo) services",
      "Deployment of multi-axle hydraulic modular trailers and low-bed carriers",
      "Engineered lifting, lashing, and securing plans meeting international marine standards",
      "On-site project logistics coordinators supervising port offloading and plant placement"
    ],
    capabilities: [
      {
        title: "Breakbulk & Heavy Lift Shipping",
        description: "Direct ocean vessel chartering for massive equipment that cannot fit into standard shipping containers."
      },
      {
        title: "Route & Infrastructure Feasibility Surveys",
        description: "Physical highway surveys measuring overhead power line clearances, turning radiuses, and structural bridge tolerances."
      },
      {
        title: "Out-of-Gauge (OOG) Flat Racks & Open Tops",
        description: "Specialized ocean container equipment for tall, wide, or top-loading industrial machinery."
      },
      {
        title: "Crane Rigging & Plant Installation",
        description: "Heavy crane coordination and hydraulic jacking for positioning machinery directly onto factory foundations."
      }
    ],
    pakistanGateways: [
      "Karachi Port Trust (KPT) Heavy Lift Berths",
      "Port Qasim Specialized Berths",
      "National Highways & Motorways (N-5, M-2, M-5 corridors)",
      "Industrial Plants across Punjab, Sindh, KPK, and Balochistan"
    ],
    globalReach: [
      "Direct project cargo connections linking equipment manufacturers in China, Europe, Japan, and North America to Pakistani project sites."
    ],
    faqs: [
      {
        question: "What defines cargo as 'Project Cargo' or 'Out-of-Gauge'?",
        answer: "Cargo is considered Out-of-Gauge (OOG) or Project Cargo when its dimensions exceed standard container sizes (longer than 12m, wider than 2.33m, or taller than 2.59m) or when its weight exceeds standard highway payload limits (typically >25 tons)."
      },
      {
        question: "Do you conduct physical route surveys before transporting heavy loads?",
        answer: "Yes, our engineering team conducts comprehensive preliminary route surveys to verify bridge weight limits, overhead cable clearances, toll plazas, and turning angles along the entire highway route."
      },
      {
        question: "Can Fly Air Logistics arrange dedicated breakbulk vessel charters?",
        answer: "Yes, for large industrial projects or high-tonnage consignments, we negotiate and charter geared breakbulk vessels and heavy-lift carriers for direct port discharge."
      }
    ],
    metaTitle: "Project Cargo & Heavy Lift Logistics Pakistan | Fly Air Logistics",
    metaDescription: "Expert project cargo, breakbulk shipping, and heavy haulage for industrial machinery, energy infrastructure, and out-of-gauge equipment in Pakistan."
  }
];

export function getAllServices(): ServiceItem[] {
  return servicesData;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

