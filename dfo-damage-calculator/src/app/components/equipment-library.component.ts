import { Component, Input, OnInit } from '@angular/core';

import { Constants } from '../constants';
import { EquipmentItem } from '../models/equipment-item';
import { WeaponItem } from '../models/weapon-item';
import { ArmorItem } from '../models/armor-item';
import { AccessoryItem } from '../models/accessory-item';
import { SpecialAccessoryItem } from '../models/special-accessory-item';

type EquipmentCategory = DFO_Constants.EquipmentCategory;

@Component({
    selector: 'equipment-library',
    templateUrl: './equipment-library.component.html',
    styleUrls: ['./equipment-library.component.less', 'forms.less']
})

export class EquipmentLibrary implements OnInit {
    equipmentLibrary: EquipmentItem[] = [];
    equipment: EquipmentItem;

    equipmentName: string;
    equipmentType: EquipmentCategory;
    equipmentSubtype1: EquipmentCategory;
    equipmentSubtype2: EquipmentCategory;

    itemTypes: EquipmentCategory[] = Constants.equipmentSubType;

    constructor() { }

    ngOnInit() {
        this.equipment = new WeaponItem(Constants.SAVIOR_ZANBATO);
    }

    onCreate(): void {
        let equip: object = {
            name: this.equipmentName,
            type: this.equipmentType.name || this.equipmentType.displayName,
            subtype1: this.equipmentSubtype1.name || this.equipmentSubtype1.displayName || this.equipmentSubtype1,
            subtype2: this.equipmentSubtype2
        };
        switch (this.equipmentType.name || this.equipmentType.displayName) {
            case 'Weapon':
                this.equipment = new WeaponItem(equip);
                break;
            case 'Armor':
                this.equipment = new ArmorItem(equip);
                break;
            case 'Accessory':
                this.equipment = new AccessoryItem(equip);
                break;
            case 'Special Accessory':
                this.equipment = new SpecialAccessoryItem(equip);
                break;
            default:
                this.equipment = new EquipmentItem(equip);
        }
    }

    onMajorTypeChange(): void {
        this.equipmentSubtype1 = null;
        this.equipmentSubtype2 = null;
    }

    onSubtypeOneChange(): void {
        this.equipmentSubtype2 = null;
    }

    onSave(equip: EquipmentItem): void {
        console.log("Received an event:");
        console.log(equip);
    }
}