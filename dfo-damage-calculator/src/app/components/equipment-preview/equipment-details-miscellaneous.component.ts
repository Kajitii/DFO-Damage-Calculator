import { Component, Input } from '@angular/core';

import { EquipmentItem } from '../../models/equipment-item';

@Component({
    selector: 'equipment-details-miscellaneous',
    templateUrl: './equipment-details-miscellaneous.component.html',
    styleUrls: ['./equipment-details.component.less']
})

export class EquipmentDetailsMiscellaneous {
    @Input() equip: EquipmentItem;

    constructor() { }
}