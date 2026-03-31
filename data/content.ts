export interface HeroContent {
  headline: string
  subheadline: string
  valueProp: string
  bridgeLine: string
  credentials: string[]
}

export const heroContent: HeroContent = {
  headline: "Turn Your Data Team Into a Revenue Engine",
  subheadline: "Strategic data leadership for founders who need answers, not just dashboards.",
  valueProp: "I build the metrics, team, and culture that turn data into revenue. From board decks to self-service analytics, I help Series A-C startups make data their competitive advantage.",
  bridgeLine: "Start with a Data Strategy Audit — a 2-week engagement that gives you a clear roadmap for turning data into growth.",
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
    title: "Data Strategy Audit",
    description: "A comprehensive assessment of your data stack, team, and processes. You get a clear roadmap for turning data into a growth engine.",
    differentiator: "Best for: Companies preparing for fundraising or board meetings",
    deliverables: [
      "Full stack assessment (warehouse, pipeline, tooling)",
      "Team capability gap analysis",
      "Priority-ranked action items",
      "Board-ready executive summary"
    ]
  },
  {
    title: "AI Readiness Assessment",
    description: "Determine if your organization is ready for AI/ML initiatives, and what foundation you need to build first.",
    differentiator: "Best for: Leadership considering AI investments",
    deliverables: [
      "Data quality & infrastructure evaluation",
      "Use case prioritization framework",
      "Build vs. buy recommendations",
      "90-day implementation roadmap"
    ]
  },
  {
    title: "Fractional Data Leadership",
    description: "Ongoing strategic guidance without the full-time cost. I work with your team 10-20 hours per month to ensure execution stays on track.",
    differentiator: "Best for: Companies that have completed an audit and need ongoing guidance",
    deliverables: [
      "Weekly leadership syncs",
      "Hiring and team development",
      "Vendor and tool selection",
      "Board and stakeholder communication"
    ]
  }
]

export interface ProblemSolved {
  problem: string
  solution: string
}

export const problemsSolved: ProblemSolved[] = [
  {
    problem: "Dashboards everywhere, but no clear answers",
    solution: "I identify the 3-5 metrics that actually drive your business and ensure they're measured accurately and accessible to leadership."
  },
  {
    problem: "Data team is overwhelmed and underperforming",
    solution: "I assess your team's capabilities, identify critical gaps, and build processes that scale without burning out your people."
  },
  {
    problem: "Investors asking questions you can't answer confidently",
    solution: "I build the board deck metrics and self-serve analytics that give you clarity in fundraising and board meetings."
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
    name: "Data Strategy + AI Readiness Audit",
    price: "$20,000",
    description: "A comprehensive 2-week engagement that gives you a clear, actionable path forward.",
    timeline: [
      {
        week: "Week 1",
        activities: [
          "Stakeholder interviews (founder, head of data, key operators)",
          "Current state assessment: stack, processes, team capabilities",
          "Data quality and infrastructure review"
        ]
      },
      {
        week: "Week 2",
        activities: [
          "Gap analysis and opportunity mapping",
          "Priority-ranked 90-day implementation roadmap",
          "Executive presentation to leadership team"
        ]
      }
    ],
    features: [
      "Full data stack assessment (warehouse, pipelines, tooling)",
      "Team capability and gap analysis",
      "AI readiness evaluation with use case prioritization",
      "Detailed 90-day implementation roadmap",
      "Board-ready executive presentation",
      "Two follow-up sessions for implementation support"
    ],
    outcomes: [
      "Clarity on what's working, what's broken, and what to prioritize",
      "A roadmap your team can execute immediately",
      "Metrics and narratives ready for board and investor conversations"
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
    question: "How is this different from hiring a data consultant?",
    answer: "Consultants typically deliver a report and leave. I deliver a strategy your team can actually execute, with follow-up sessions to ensure implementation stays on track. My focus is on building your internal capabilities, not creating dependency on me."
  },
  {
    question: "What happens after the audit?",
    answer: "You get a detailed roadmap and executive presentation. Most clients use this to: (1) prioritize their data investments, (2) hire the right people, or (3) engage me for fractional leadership to guide implementation. The choice is yours."
  },
  {
    question: "What company stage is this best suited for?",
    answer: "Series A through C startups with at least one person focused on data. You've outspread spreadsheets but haven't built the infrastructure and processes to make data a strategic asset. If you're unsure, book a call and I'll tell you honestly if I'm the right fit."
  },
  {
    question: "Do you do hands-on implementation?",
    answer: "No. I focus on strategy and leadership. If you need hands-on implementation, I'll help you hire the right people or connect you with trusted partners. This ensures I'm not creating a dependency on me for execution."
  },
  {
    question: "What if we already have a Head of Data?",
    answer: "Great — they're often my best advocates. I work with existing data leaders to provide strategic guidance, stakeholder alignment, and an outside perspective. Think of me as a strategic advisor to your data leadership, not a replacement."
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
