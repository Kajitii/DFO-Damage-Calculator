import { Component, Input, OnInit } from '@angular/core';

import { WeaponItem } from '../models/weapon-item';
import { Constants } from '../constants';
import { Utils } from '../utils';

@Component({
    selector: 'weapon-details',
    templateUrl: './weapon-details.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class WeaponDetails implements OnInit {
    @Input() equip: WeaponItem;
    itemRarities: string[] = this.getItemRarities();

    constructor() { }

    ngOnInit() {
        console.log("Initialize the facts window!");
    }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
}