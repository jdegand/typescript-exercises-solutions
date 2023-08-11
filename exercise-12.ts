declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;

    export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
    export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;
    export function getMedianIndex<T>(input: T[], comparator: Comparator<T>): number;

    export function getMaxElement<T>(input: T[], comparator: Comparator<T>): T | null;
    export function getMinElement<T>(input: T[], comparator: Comparator<T>): T | null;
    export function getMedianElement<T>(input: T[], comparator: Comparator<T>): T | null;

    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
}
