import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';

@Component({
    selector: 'equipment-details-exorcism',
    template: `
        <div *ngIf="equip.exorcism" class="exorcism-text">Exorcism {{equip.exorcism | number: '1.0-0' | signednumber}}</div>
        <div *ngIf="equip.refine_level && equip.isRefinedMoreThanBoost()" class="refined-text">{{equip.refine_level | signednumber}} Refining: Exorcism {{equip.bonusExorcism() | roundnumber | signednumber}}</div>
        <div *ngIf="equip.boost_level && !equip.isRefinedMoreThanBoost()" class="boost-text">{{equip.boost_level | signednumber}} Reinforcement: Exorcism {{equip.bonusExorcism() | roundnumber | signednumber}}</div>
    `,
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsExorcism {
    @Input() equip: EquipmentItem;

    constructor() { }
}