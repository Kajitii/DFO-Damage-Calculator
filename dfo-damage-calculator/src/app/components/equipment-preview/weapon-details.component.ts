import { Component, Input, OnInit } from '@angular/core';

import { WeaponItem } from '../../models/equipment/weapon-item';
import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'weapon-details',
    templateUrl: './weapon-details.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class WeaponDetails implements OnInit {
    @Input() equip: WeaponItem;
    itemRarities: string[] = this.getItemRarities();
    weaponSpeeds: string[] = this.getWeaponSpeeds();

    constructor() { }

    ngOnInit() {
        
    }

    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
    getWeaponSpeeds(): string[] {
        let speeds: string[] = Utils.getEnumNames(Constants.weaponSpeed);
        return speeds.map(t => t.humanize());
    }
}