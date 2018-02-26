import { BaseStatisticsBlock } from "./base-statistics-block";
import { EquipmentItem } from "./equipment/equipment-item";

export class SetEffects {

    equipment_set:EquipmentItem[];
    set_effects:SetEffect[];

}

class SetEffect extends BaseStatisticsBlock {

    //Number of items from the set required to earn set effect bonuses
    item_requirement:number;

    constructor (setEffect:object) {
        super(setEffect);
    }

}