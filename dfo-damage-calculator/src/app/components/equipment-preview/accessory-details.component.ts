import { Component, Input, OnInit } from '@angular/core';

import { EquipmentItem } from '../../models/equipment-item';
import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'accessory-details',
    templateUrl: './equipment-details.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class AccessoryDetails implements OnInit {
    @Input() equip: EquipmentItem;
    itemRarities: string[] = this.getItemRarities();

    constructor() { }

    ngOnInit() {
        
    }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
}