// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
        seconds: number;
    }

    export function pad(s:number): string;
}
