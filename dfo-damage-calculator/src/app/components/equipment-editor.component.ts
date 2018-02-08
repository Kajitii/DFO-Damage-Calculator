import { Component, Input, OnInit } from '@angular/core';
import { EquipmentItem } from '../models/equipment-item';
import { WeaponItem } from '../models/weapon-item';

import { Constants } from '../constants';
import { Utils } from '../utils';

@Component({
    selector: 'equipment-editor',
    templateUrl: './equipment-editor.component.html',
    styleUrls: ['./equipment-editor.component.less']
})

export class EquipmentEditor implements OnInit {
    @Input() equip: EquipmentItem;
    classCategories: string[] = this.getClassCategories();
    itemRarities: string[] = this.getItemRarities();
    itemTypes: string[] = this.getItemTypes();
    itemSubtypes1: string[] = this.getItemSubtypes();
    amplificationTypes: string[] = this.getAmplificationTypes();

    ampType: Constants.amplification;
    ampTypeStored: boolean = false;

    constructor() { }

    ngOnInit() {
        this.equip = new WeaponItem(Constants.SAVIOR_ZANBATO);
        console.log("Initialize the editor!");
    }

    getClassCategories(): string[] {
        let classes: string[] = Utils.getEnumNames(Constants.classCategory);
        return classes.map(c => c.humanize());
    }
    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
    getItemTypes(): string[] {
        let types: string[] = Object.keys(Constants.equipmentSubType);
        return types.map(t => t.humanize());
    }
    getItemSubtypes(): string[] {
        return [];
    }
    getAmplificationTypes(): string[] {
        let types: string[] = Object.keys(Constants.amplification);
        return types;
    }

    onRarityChange(value: Constants.itemRarity): void {
        if (value == Constants.itemRarity.Common || value == Constants.itemRarity.Uncommon) {
            if (!this.ampTypeStored) {
                this.ampType = this.equip.amplification
            }
            this.ampTypeStored = true;
            this.equip.amplification = Constants.amplification.None;
        }
        else {
            if (this.ampTypeStored) {
                this.equip.amplification = this.ampType || Constants.amplification.None;
            }
            this.ampTypeStored = false;
        }
    }
    toggleCollapse(event: Event): void {
        console.log(event);
    }
}