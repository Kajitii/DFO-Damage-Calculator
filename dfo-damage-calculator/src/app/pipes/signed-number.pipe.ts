import { Pipe, PipeTransform } from '@angular/core';
/* 
 * Displays the number with a sign in front.
 * Usage:
 *      value | signednumber
 * Example:
 *      {{ 54 | signednumber }}
 *      formats to: +54
 */
@Pipe({name: 'signednumber'})
export class SignedNumberPipe implements PipeTransform {
    transform(value: number | string): string {
        return value >= 0 ? '+' + value : '' + value;
    }
}