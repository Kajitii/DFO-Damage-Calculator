import { Component, OnInit, ViewChild } from "@angular/core";

import { EquipmentItem } from "../../models/equipment/equipment-item";
import { WeaponItem } from "../../models/equipment/weapon-item";

import { Constants } from "../../constants";
import { EquipmentLibrary } from "./equipment-library.component";
import { EquipmentEditor } from "./equipment-editor.component";
import { EquipmentLoadout } from "./equipment-loadout.component";

@Component({
    selector: 'equipment-pane',
    templateUrl: 'equipment-pane.component.html'
})

export class EquipmentPaneComponent implements OnInit {
    @ViewChild(EquipmentLibrary)
    private libraryComponent: EquipmentLibrary;
    @ViewChild(EquipmentEditor)
    private editorComponent: EquipmentEditor;
    @ViewChild(EquipmentLoadout)
    private loadoutComponent: EquipmentLoadout;

    equipment: EquipmentItem;

    constructor() { }

    ngOnInit() {
        this.equipment = new WeaponItem(Constants.SAVIOR_ZANBATO);
    }
    
    onEquipmentCreate(equip: EquipmentItem): void {
        this.equipment = equip;
    }
    onEquipmentEquip(equip: EquipmentItem): void {
        console.log(equip);
        this.loadoutComponent.equipEquipment(equip);
    }
    onEquipmentSave(equip: EquipmentItem): void {
        console.log("Equipment saved:");
        console.log(equip);
        this.libraryComponent.addEquipment(equip);
    }

}