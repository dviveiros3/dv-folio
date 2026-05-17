export interface HeroContent {
  headline: string
  subheadline: string
  valueProp: string
  bridgeLine: string
  credentials: string[]
}

export const heroContent: HeroContent = {
  headline: "Architecting the AI-Powered Growth Engine",
  subheadline: "Applied AI leadership for founders who need operational leverage, not just prompts.",
  valueProp: "I am an Applied AI operator and implementation strategist. I bridge the gap between raw data and business leverage, building the systems that turn AI from experimental chatter into functional revenue engines.",
  bridgeLine: "Start with an Applied AI Systems & Strategy Audit — a 2-week engagement to roadmap your transition from data to AI-powered growth.",
  credentials: ["MIT MicroMasters", "Harvard Executive Program"]
}

export interface Service {
  title: string
  description: string
  deliverables: string[]
  differentiator: string
}

export const services: Service[] = [
  {
    title: "Applied AI Systems & Strategy Audit",
    description: "A comprehensive assessment of your data foundations and AI potential. You get a clear roadmap for building productized AI workflows aimed at reducing operational overhead.",
    differentiator: "Best for: Companies preparing for AI transition or fundraising",
    deliverables: [
      "Data foundation & AI readiness assessment",
      "AI workflow opportunity mapping",
      "Priority-ranked implementation roadmap",
      "Board-ready executive summary"
    ]
  },
  {
    title: "AI Implementation Strategy",
    description: "Strategic guidance on building and deploying functional AI products that impact the P&L, moving beyond dead pilots to production leverage.",
    differentiator: "Best for: Leadership considering significant AI investments",
    deliverables: [
      "Use case prioritization framework (P&L impact focus)",
      "Build vs. buy AI architecture recommendations",
      "90-day AI implementation roadmap",
      "Technical leadership & oversight for AI builds"
    ]
  },
  {
    title: "Fractional AI Leadership",
    description: "Ongoing strategic guidance as an Applied AI partner. I work with your team to ensure AI implementation stays on track and drives business leverage.",
    differentiator: "Best for: Companies that need technical AI leadership without the full-time cost",
    deliverables: [
      "Weekly AI strategy & implementation syncs",
      "AI team development & hiring guidance",
      "Vendor and LLM stack selection",
      "Board-level AI roadmap communication"
    ]
  }
]

export interface ProblemSolved {
  problem: string
  solution: string
}

export const problemsSolved: ProblemSolved[] = [
  {
    problem: "Experimental AI chatter with zero P&L impact",
    solution: "I identify the AI workflows that actually drive unit economics and ensure they move from pilot to production leverage."
  },
  {
    problem: "Data foundations that aren't ready for AI",
    solution: "I assess and architect the data infrastructure required to support high-conviction AI builds, ensuring accuracy and scale."
  },
  {
    problem: "Technical teams building 'cool' tech instead of business value",
    solution: "I provide the strategic leadership to align engineering efforts with founder-led growth goals and operational efficiency."
  }
]

export interface ImpactMetric {
  metric: string
  description: string
  year: string
  category: string
}

export const impactData: ImpactMetric[] = [
  {
    metric: "$4.2M",
    description: "New ARR from high-LTV customer segmentation",
    year: "2024",
    category: "Revenue"
  },
  {
    metric: "40%",
    description: "CAC reduction through attribution modeling",
    year: "2023",
    category: "Efficiency"
  },
  {
    metric: "Series B",
    description: "Led data due diligence for successful raise",
    year: "2023",
    category: "Capital"
  },
  {
    metric: "150+",
    description: "Business users enabled with self-serve analytics",
    year: "2022",
    category: "Scale"
  }
]

export interface PricingTier {
  name: string
  price: string
  description: string
  timeline: { week: string; activities: string[] }[]
  features: string[]
  outcomes: string[]
  cta: string
  highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Applied AI Systems & Strategy Audit",
    price: "$20,000",
    description: "A comprehensive 2-week engagement that gives you a clear, actionable path from data to AI leverage.",
    timeline: [
      {
        week: "Week 1",
        activities: [
          "Stakeholder interviews (founder, key operators)",
          "Data infrastructure & quality assessment",
          "AI workflow opportunity mapping"
        ]
      },
      {
        week: "Week 2",
        activities: [
          "Gap analysis for AI readiness",
          "Priority-ranked 90-day implementation roadmap",
          "Executive presentation: The AI Growth Roadmap"
        ]
      }
    ],
    features: [
      "Full data foundation assessment for AI readiness",
      "Applied AI workflow opportunity audit",
      "Build vs. buy recommendation matrix",
      "Detailed 90-day implementation roadmap",
      "Board-ready executive presentation",
      "Two follow-up strategy sessions"
    ],
    outcomes: [
      "Clarity on which AI workflows will drive the most leverage",
      "A technical roadmap your team can execute immediately",
      "Strategic alignment between AI investment and P&L impact"
    ],
    cta: "Book Discovery Call",
    highlighted: true
  }
]

export interface ClientProof {
  company: string
  context: string
  outcome: string
  metric: string
}

export const clientProof: ClientProof[] = [
  {
    company: "Connected Dealer Services",
    context: "Automotive fintech, Series A",
    outcome: "Built ML-powered financial analytics from scratch",
    metric: "$2.1M revenue optimization identified through anomaly detection"
  },
  {
    company: "Tenth Avenue Commerce",
    context: "E-commerce portfolio company",
    outcome: "Replaced manual reporting with self-serve analytics",
    metric: "10 → 150+ business users enabled, 65% reduction in reporting time"
  },
  {
    company: "Trajectory Tutors",
    context: "EdTech startup (founded)",
    outcome: "Built AI-enhanced tutoring platform from concept",
    metric: "Curriculum matching system with 94% student satisfaction"
  }
]

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: "How is this different from an AI agency?",
    answer: "Most agencies sell 'prompts' and 'wrappers'. I focus on Applied AI systems—the infrastructure, data pipelines, and core product logic that create long-term business leverage. I am a practitioner, not a middleman."
  },
  {
    question: "What happens after the audit?",
    answer: "You get a detailed roadmap and executive presentation. You can use this to (1) execute with your internal team, (2) hire specifically for the roadmap, or (3) engage me for fractional AI leadership to oversee the implementation."
  },
  {
    question: "What company stage is this best suited for?",
    answer: "Series A through C startups who have the data but haven't yet converted it into operational AI leverage. If you're looking to scale without linear headcount growth, this is for you."
  },
  {
    question: "Do you do hands-on implementation?",
    answer: "No. I focus on strategy, architecture, and leadership. If you need hands-on engineering, I help you hire the right talent or coordinate with your existing team to ensure the build follows the strategic roadmap."
  },
  {
    question: "What if we already have a CTO or Head of Data?",
    answer: "I work alongside them. I provide the 'AI operator' lens that bridges technical capability with founder-led business goals, helping your leadership team prioritize high-conviction AI builds over experimental distractions."
  }
]

export const educationCredentials = [
  {
    institution: "Massachusetts Institute of Technology",
    degree: "MicroMasters in Data, Economics, and Policy",
    year: "2024"
  },
  {
    institution: "Harvard University",
    degree: "Executive Management Program",
    year: "2021"
  }
]
