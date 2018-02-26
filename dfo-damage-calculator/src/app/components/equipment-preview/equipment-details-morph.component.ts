import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';

@Component({
    selector: 'equipment-details-morph',
    template: `
        <div class="quick-info-text info-text">View Quick Info. (I)</div>
        <br />
        <div *ngIf="!equip.compoundable" class="highlight-negative-text">Unable to synthesize</div>
        <div *ngIf="!equip.transcendable" class="highlight-negative-text">Cannot be transcended</div>
        <div *ngIf="!equip.disassemble" class="highlight-negative-text">Cannot be disassembled</div>
        <div *ngIf="!equip.storable" class="highlight-negative-text">Cannot be stored in safe</div>
    `,
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsMorph {
    @Input() equip: EquipmentItem;

    constructor() { }
}