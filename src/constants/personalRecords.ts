import type { PersonalRecord } from "../types/personalRecordType";

export const personalRecords: PersonalRecord[] = [{
    id: 1,
    title: 'Martwy ciąg',
    category: 'Trening siłowy',
    value: '120kg',
    diffValue: '+5kg',
    percentageDiff: '+7%',
    progress: 'positive',
    icon: 'dumbbell',
},
{
    id: 2,
    title: '5 km',
    category: 'Bieganie',
    value: '22m 15s',
    diffValue: '-0:24s',
    percentageDiff: '+0:24s',
    progress: 'positive',
    icon: 'timer',
}
]
