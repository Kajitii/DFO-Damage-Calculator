import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment-item';

@Component({
    selector: 'equipment-details-description',
    template: `
        <div *ngIf="equip.description || equip.full_description" class="advanced-miscellaneous-info">
            <br />
            <div class="detailed-description-text line-break">{{equip.full_description || equip.description}}</div>
        </div>
        <div *ngIf="equip.flavor_description" class="flavor-info">
            <hr />
            <div class="faded-text line-break">{{equip.flavor_description}}</div>
        </div>
    `,
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsDescription {
    @Input() equip: EquipmentItem;

    constructor() { }
}