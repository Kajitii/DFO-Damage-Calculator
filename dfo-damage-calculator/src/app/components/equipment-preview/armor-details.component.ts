import { Component, Input, OnInit } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';
import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'armor-details',
    templateUrl: './equipment-details.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class ArmorDetails implements OnInit {
    @Input() equip: EquipmentItem;
    itemRarities: string[] = this.getItemRarities();

    constructor() { }

    ngOnInit() {
        
    }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
}