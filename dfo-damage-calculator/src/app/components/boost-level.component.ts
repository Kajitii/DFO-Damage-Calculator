import { Component, Input } from '@angular/core';

@Component({
    selector: 'boost-level',
    template: `
    <span>+{{level}}</span>
    `
})
export class BoostLevel{
    @Input() level: number;
}