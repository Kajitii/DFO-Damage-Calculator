import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Constants } from '../../constants';
import { Utils } from '../../utils';
import { EquipmentUtils } from './equipment-utils';

import { EquipmentItem } from '../../models/equipment/equipment-item';

type EquipmentCategory = DFO_Constants.EquipmentCategory;

@Component({
    selector: 'equipment-library',
    templateUrl: './equipment-library.component.html',
    styleUrls: ['./equipment-library.component.less', '../forms.less']
})

export class EquipmentLibrary implements OnInit {
    @Output() onCreate: EventEmitter<EquipmentItem> = new EventEmitter<EquipmentItem>();
    @Output() onEquip: EventEmitter<EquipmentItem> = new EventEmitter<EquipmentItem>();

    equipmentLibrary: EquipmentItem[];
    equipmentPreview: EquipmentItem;
    enchantmentLibrary: any;
    setEffectLibrary: any;

    showNewEquipmentForm: boolean = false;
    equipmentName: string;
    equipmentType: EquipmentCategory;
    equipmentSubtype1: EquipmentCategory;
    equipmentSubtype2: EquipmentCategory;

    itemTypes: EquipmentCategory[] = Constants.equipmentSubType;

    constructor() { }

    ngOnInit() {
        this.loadLibrary();
    }

    private loadLibrary(): void {
        let equipLib: Array<EquipmentItem> = [];
        let jsonObj: string = sessionStorage.getItem(Constants.storageNames.EquipmentLibrary);
        if (jsonObj) {
          equipLib = JSON.parse(jsonObj);
        }
        this.equipmentLibrary = new Array<EquipmentItem>();
        for (let equip of equipLib) { 
            this.equipmentLibrary.push(EquipmentUtils.convertInputObjectToEquipment(equip, equip.type));
        }
    }
    private saveLibrary(): void {
        sessionStorage.setItem(Constants.storageNames.EquipmentLibrary, JSON.stringify(this.equipmentLibrary))
    }

    private openNewEquipmentForm(): void {
        this.showNewEquipmentForm = true;
    }
    private cancelNewEquipmentForm(): void {
        this.showNewEquipmentForm = false;
    }

    private onMajorTypeChange(): void {
        this.equipmentSubtype1 = null;
        this.equipmentSubtype2 = null;
    }

    private onSubtypeOneChange(): void {
        this.equipmentSubtype2 = null;
    }


    private createNewEquipment(): void {
        let inputObj: object = {
            name: this.equipmentName,
            type: this.equipmentType.name || this.equipmentType.displayName,
            subtype1: this.equipmentSubtype1.name || this.equipmentSubtype1.displayName || this.equipmentSubtype1,
            subtype2: this.equipmentSubtype2
        };
        let equipmentType = Constants.equipmentType;
        let equipment: EquipmentItem = EquipmentUtils.convertInputObjectToEquipment(inputObj, this.equipmentType.name || this.equipmentType.displayName);
        this.onCreate.emit(equipment);
    }

    private equipEquipment(equip: EquipmentItem): void {
        this.onEquip.emit(equip);
    }

    public addEquipment(equip: EquipmentItem): void {
        this.equipmentLibrary.push(equip);
        this.saveLibrary();
    }
}