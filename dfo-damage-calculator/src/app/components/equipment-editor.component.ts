import { Component, Input, OnInit } from '@angular/core';
import { EquipmentItem } from '../models/equipment-item';

import { Constants } from '../constants';
import { Utils } from '../utils';

@Component({
    selector: 'equipment-editor',
    templateUrl: './equipment-editor.component.html',
    styleUrls: ['./equipment-editor.component.less', 'forms.less']
})

export class EquipmentEditor implements OnInit {
    @Input() equip: EquipmentItem;
    classCategories: string[] = this.getClassCategories();
    itemRarities: string[] = this.getItemRarities();
    amplificationTypes: string[] = this.getAmplificationTypes();
    weaponSpeeds: string[] = this.getWeaponSpeeds();

    ampType: Constants.amplification;
    ampTypeStored: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    getClassCategories(): string[] {
        let classes: string[] = Utils.getEnumNames(Constants.classCategory);
        return classes.map(c => c.humanize());
    }
    getItemRarities(): string[] {
        return Utils.getEnumNames(Constants.itemRarity);
    }
    getAmplificationTypes(): string[] {
        let types: string[] = Object.keys(Constants.amplification);
        return types;
    }
    getWeaponSpeeds(): string[] {
        let speeds: string[] = Utils.getEnumNames(Constants.weaponSpeed);
        return speeds.map(t => t.humanize());
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
    onLevelChange(): void {
        this.equip.exorcism = this.equip.baseExorcism();
    }

    foobar(): void {
        console.log(this.equip);
    }

    toggleCollapse(event: Event): void {
        console.log(event);
    }
}