export type PersonalRecord = {
    id: number;
    title: string;
    category: string;
    value: string;
    diffValue: string;
    percentageDiff: string;
    progress: 'positive' | 'negative' | 'neutral',
    icon: 'dumbbell' | 'timer';
}