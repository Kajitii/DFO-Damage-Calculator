import { Component, Input, OnInit } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';
import { AvatarItem } from '../../models/avatar/avatar-item';
import { PetItem } from '../../models/pet/pet-item';
import { ArtifactItem } from '../../models/pet/artifact-item';
import { InsigniaItem } from '../../models/insignia/insignia-item';

import { Constants } from '../../constants';
import { Utils } from '../../utils';

@Component({
    selector: 'equipment-loadout',
    templateUrl: 'equipment-loadout.component.html',
    styleUrls: ['./equipment-loadout.component.less']
})

export class EquipmentLoadout implements OnInit {
    equipmentLoadout: EquipmentItem[];
    avatarLoadout: AvatarItem[];
    petLoadout: PetItem;
    artifactLoadout: ArtifactItem[];
    insigniaLoadout: InsigniaItem;

    equipmentSlot = Constants.equipmentSlot;
    avatarSlot = Constants.avatarSlot;
    creatureSlot = Constants.creatureSlot;
    insigniaSlot = Constants.insigniaSlot;

    constructor() { }

    ngOnInit() {
        this.equipmentLoadout = new Array(Utils.getEnumLength(this.equipmentSlot));
        this.avatarLoadout = new Array(Utils.getEnumLength(this.avatarSlot));
    }

    public equipEquipment(equip: EquipmentItem): void {
        let equipmentLoadoutIndex: number = this.equipmentSlot[equip.getEquipmentSlot()];
        if (typeof(equipmentLoadoutIndex) === 'number') {
            this.equipmentLoadout[equipmentLoadoutIndex] = equip;
        }
        else {
            console.error("The equipment " + equip.name + " could not be used due to an unrecognized type reported as " + equip.getEquipmentSlot());
        }
    }

}
