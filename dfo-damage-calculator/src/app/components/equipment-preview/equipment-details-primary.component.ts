import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';

@Component({
    selector: 'equipment-details-primary',
    templateUrl: './equipment-details-primary.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsPrimary {
    @Input() equip: EquipmentItem;

    constructor() { }
}