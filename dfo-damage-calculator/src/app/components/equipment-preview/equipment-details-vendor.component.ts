import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment/equipment-item';

@Component({
    selector: 'equipment-details-vendor',
    templateUrl: './equipment-details-vendor.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsVendor {
    @Input() equip: EquipmentItem;

    constructor() { }
}