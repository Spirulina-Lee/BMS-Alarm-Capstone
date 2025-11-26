import { BMSAlarm, AlarmPriority, AlarmStatus } from './types';

export const MOCK_ALARMS: BMSAlarm[] = [
  {
    id: 'ALM-1024',
    timestamp: new Date().toISOString(),
    equipment: 'AHU-1 (Science Lab)',
    description: 'Supply Air Static Pressure High',
    priority: AlarmPriority.CRITICAL,
    status: AlarmStatus.ACTIVE,
    value: '2.5 in.wc',
    location: 'Building 17',
    occupancyStatus: true,
    scheduleActive: true
  },
  {
    id: 'ALM-1025',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    equipment: 'VAV-204 (Conf Room)',
    description: 'Zone Temperature Deviation',
    priority: AlarmPriority.WARNING,
    status: AlarmStatus.ACTIVE,
    value: '76.5°F (SP: 72°F)',
    location: 'Building 24',
    occupancyStatus: false,
    scheduleActive: false
  },
  {
    id: 'ALM-1026',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    equipment: 'FCU-101 (Hallway)',
    description: 'Filter Differential Pressure Alert',
    priority: AlarmPriority.SUPPRESSED,
    status: AlarmStatus.ACTIVE,
    value: '0.9 in.wc',
    location: 'Building 17',
    occupancyStatus: true,
    scheduleActive: true
  },
  {
    id: 'ALM-1027',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    equipment: 'Chiller-2',
    description: 'Communication Loss - Modbus Gateway',
    priority: AlarmPriority.CRITICAL,
    status: AlarmStatus.ACKNOWLEDGED,
    value: 'N/A',
    location: 'Central Plant',
    occupancyStatus: true,
    scheduleActive: true
  },
  {
    id: 'ALM-1028',
    timestamp: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    equipment: 'Boiler-1',
    description: 'Burner Lockout',
    priority: AlarmPriority.CRITICAL,
    status: AlarmStatus.CLEARED,
    value: 'Error Code 33',
    location: 'Central Plant',
    occupancyStatus: true,
    scheduleActive: true
  }
];

export const CHART_DATA = [
  { name: '08:00', total: 45, suppressed: 12 },
  { name: '10:00', total: 88, suppressed: 40 },
  { name: '12:00', total: 65, suppressed: 25 },
  { name: '14:00', total: 90, suppressed: 50 },
  { name: '16:00', total: 55, suppressed: 15 },
  { name: '18:00', total: 30, suppressed: 5 },
];