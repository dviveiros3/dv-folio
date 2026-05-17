export interface TrinityHeroContent {
  headline: string;
  subheadline: string;
  announcement: string;
}

export const trinityHero: TrinityHeroContent = {
  headline: "Applied AI Lab for High-Conviction Founders",
  subheadline: "Where technical engineering taste meets business leverage. We build the systems that redefine unit economics.",
  announcement: "Trinity v0: Now entering public alpha"
};

export interface ThesisPoint {
  title: string;
  description: string;
  type: "positive" | "negative";
}

export const labThesis: ThesisPoint[] = [
  {
    title: "Proprietary Systems",
    description: "We architect core product logic and infrastructure, not shallow LLM wrappers.",
    type: "positive"
  },
  {
    title: "ROI-First R&D",
    description: "We don't chase AGI; we chase measurable business leverage and revenue impact.",
    type: "positive"
  },
  {
    title: "Practitioner-Led",
    description: "Built by operators who have scaled data teams from Series A to exit.",
    type: "positive"
  },
  {
    title: "Not an LLM Wrapper Factory",
    description: "We don't build shallow interfaces for generic ChatGPT workflows.",
    type: "negative"
  },
  {
    title: "Not a 'Prompt Agency'",
    description: "We focus on data pipelines and production-grade implementation, not just text generation.",
    type: "negative"
  },
  {
    title: "Not a Research Lab",
    description: "Our work is grounded in deployment, not theoretical academic exercises.",
    type: "negative"
  }
];

export interface ProductKit {
  id: string;
  title: string;
  description: string;
  status: "Available" | "In Development" | "Internal Alpha";
  features: string[];
}

export const productCatalog: ProductKit[] = [
  {
    id: "growth-kit",
    title: "The Growth Kit",
    description: "End-to-end AI operating module for founder-led B2B companies.",
    status: "Available",
    features: [
      "Autonomous Content Engine",
      "Outbound Prospecting System",
      "ICP & Positioning Precision Skills"
    ]
  },
  {
    id: "executive-kit",
    title: "The Executive Kit",
    description: "Strategic decision-support systems for modern leadership teams.",
    status: "In Development",
    features: [
      "Automated Board Reporting",
      "Revenue Forecast Modeling",
      "Decision Documentation Workflows"
    ]
  },
  {
    id: "pe-intelligence-kit",
    title: "PE Intelligence Kit",
    description: "Modernizing portfolio company data stacks for acquisition readiness.",
    status: "Internal Alpha",
    features: [
      "Due Diligence Automation",
      "Unit Economic Monitoring",
      "Exit Multiplier Optimization"
    ]
  }
];

export interface LabExhibit {
  title: string;
  status: "In-Training" | "Alpha" | "Stable";
  description: string;
  stack: string[];
}

export const labExhibits: LabExhibit[] = [
  {
    title: "Project Zero: Autonomous Context Injection",
    status: "Alpha",
    description: "Exploring RAG architectures that maintain 99%+ accuracy for complex legal and financial documents.",
    stack: ["OpenAI", "Pinecone", "LangChain", "Python"]
  },
  {
    title: "Dynamic Pricing Engine v2",
    status: "In-Training",
    description: "Real-time elasticity modeling using deep learning for high-volume e-commerce environments.",
    stack: ["PyTorch", "AWS Sagemaker", "Snowflake"]
  }
];
