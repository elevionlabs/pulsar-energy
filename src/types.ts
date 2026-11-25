export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  deliverables: string[];
  iconName: string;
  image: string;
}

export interface CaseStudy {
  industry: string;
  companyType: string;
  challenge: string;
  solution: string;
  results: {
    energyReduction: string;
    annualSavings: string;
    paybackMonths: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    plant: string;
  };
}

export interface IndustrySimulation {
  name: string;
  avgWastePercent: number;
  typicalPaybackMonths: number;
  keyDrivers: string[];
}
