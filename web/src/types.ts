export interface Project {
  id: string;
  name: string;
  oem: string;
  component: string;
  documentCount: number;
  currentStage: number; // 0=upload, 1-4=stages
  stageStatus: 'idle' | 'processing' | 'awaiting' | 'completed';
  progress: number; // 0-100
  lastUpdated: string;
  documents: UploadedDoc[];
  stage1?: Stage1Data;
  stage2?: Stage2Data;
  stage3?: Stage3Data;
  stage4?: Stage4Data;
}

export interface UploadedDoc {
  name: string;
  pages: number;
  status: 'uploading' | 'ready' | 'parsed';
}

export interface Stage1Data {
  documents: DocEntry[];
  conflicts: Conflict[];
  missingDocs: MissingDoc[];
}

export interface DocEntry {
  name: string;
  type: string;
  level: string;
  language: string;
  pages: number;
  description: string;
}

export interface Conflict {
  id: number;
  parameter: string;
  docA: string;
  valueA: string;
  docB: string;
  valueB: string;
  decision: 'a' | 'b' | 'tbd' | null;
}

export interface MissingDoc {
  id: number;
  name: string;
  referencedIn: string;
  impact: 'high' | 'medium' | 'low';
  decision: 'supplement' | 'skip' | null;
}

export interface CharacteristicRow {
  id: string;
  category: string;
  name: string;
  targetValue: string;
  originalText: string;
  classification: 'C' | 'A';
  source: string;
  section: string;
  hasConflict: boolean;
  note: string;
}

export interface Stage2Data {
  characteristics: CharacteristicRow[];
  gapCount: number;
  conflictCount: number;
}

export interface PartCharacteristicRow {
  id: string;
  partName: string;
  characteristic: string;
  targetValue: string;
  linkedL1: string[];
  source: string;
  note: string;
}

export interface Stage3Data {
  characteristics: PartCharacteristicRow[];
  gapCount: number;
}

export interface QfdCell {
  l1Id: string;
  l2Id: string;
  strength: '◎' | '○' | '△' | '';
}

export interface Stage4Data {
  l1Ids: string[];
  l2Ids: string[];
  l2Names: string[];
  l2Parts: string[];
  matrix: QfdCell[];
  emptyL1: string[];
  emptyL2: string[];
  criticalParts: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}
