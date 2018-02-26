import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';
import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'equipment-details-summary',
    templateUrl: './equipment-details-summary.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsSummary {
    @Input() equip: EquipmentItem;
    itemRarities: string[] = this.getItemRarities();

    constructor() { }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
}