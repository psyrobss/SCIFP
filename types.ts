
export interface Inventory {
  id: number;
  acronym: string;
  name: string;
  icon: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  inventories: Inventory[];
}

// New types for the form mocks
export interface ResponseOption {
  value: number;
  label: string;
}

export interface Question {
  id: number;
  text: string;
  isReversed?: boolean;
}

export interface Domain {
  id: string;
  name: string;
  icon: string;
  description: string;
  interpretationLabels?: {
    level_1: string; // avg score 0 - 0.9
    level_2: string; // avg score 1 - 1.9
    level_3: string; // avg score 2 - 2.9
    level_4: string; // avg score 3 - 4
  };
  questions: Question[];
}

export interface InterpretationRange {
  min: number;
  max: number;
  label: string;
  description: string;
}

export interface Scoring {
  type: 'sum' | 'average';
  description: string;
  ranges: InterpretationRange[];
  notes?: string[];
  subScoresDescription?: string;
}

export interface InventoryForm {
  id:string;
  acronym: string;
  name: string;
  objective: string;
  instructions: string;
  responseScale: ResponseOption[];
  domains: Domain[];
  scoring?: Scoring;
}
