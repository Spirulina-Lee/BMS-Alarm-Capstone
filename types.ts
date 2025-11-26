export enum AlarmPriority {
  CRITICAL = 'Critical',
  WARNING = 'Warning',
  INFO = 'Info',
  SUPPRESSED = 'Suppressed'
}

export enum AlarmStatus {
  ACTIVE = 'Active',
  ACKNOWLEDGED = 'Acknowledged',
  CLEARED = 'Cleared'
}

export interface BMSAlarm {
  id: string;
  timestamp: string;
  equipment: string;
  description: string;
  priority: AlarmPriority;
  status: AlarmStatus;
  value: string;
  location: string;
  occupancyStatus?: boolean; // Contextual awareness
  scheduleActive?: boolean; // Contextual awareness
}

export interface AlarmAnalysis {
  summary: string;
  rootCause: string;
  recommendation: string;
  confidenceScore: number;
}