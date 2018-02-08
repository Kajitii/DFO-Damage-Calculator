import { Pipe, PipeTransform } from '@angular/core';
/*
 * Displays the string in proper capital casing.
 * Usage:
 *      value | propercase
 * Example:
 *      {{ "i like trains" | propercase }}
 *      formats to: "I Like Trains"
 */
@Pipe({name: 'propercase'})
export class ProperCasePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\w\S*/g, function(s: string): string {
            return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
        });
    }
}