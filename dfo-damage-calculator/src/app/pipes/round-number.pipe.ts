import { Pipe, PipeTransform } from '@angular/core';
/* 
 * Displays the number with a sign in front.
 * Usage:
 *      value | roundnumber: precision
 * Example:
 *      {{ 1234.567 | roundnumber }}
 *      formats to: 1234
 *      {{ 1234.567 | roundnumber: 1 }}
 *      formats to: 1234.6
 *      {{ 1234.567 | roundnumber: -1 }}
 *      formats to: 1230
 */
@Pipe({name: 'roundnumber'})
export class RoundNumberPipe implements PipeTransform {
    transform(value: number, precision: number = 0): number {
        let offset: number = Math.pow(10, precision);
        return Math.round(value * offset + 0.000000000001) / offset;
    }
}