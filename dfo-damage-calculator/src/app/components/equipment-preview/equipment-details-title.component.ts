import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';
import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'equipment-details-title',
    template: `
        <div class="equipment-details-title">
            <div class="dfo-icon float-left"></div>
            <span class="rarity-{{(itemRarities[equip.rarity] || 'none') | lowercase}}-text"><span *ngIf="equip.boost_level">{{equip.boost_level | signednumber}} </span>{{equip.name}}</span>
        </div>
    `,
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsTitle {
    @Input() equip: EquipmentItem;
    itemRarities: string[] = this.getItemRarities();

    constructor() { }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
}