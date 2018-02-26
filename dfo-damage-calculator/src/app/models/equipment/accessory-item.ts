import { Constants } from '../../constants';
import { EquipmentItem } from './equipment-item';

export class AccessoryItem extends EquipmentItem {

    //Accessory bonuses from reinforcement/amplification
    bonus_flat_magical_reduction:number;
    bonus_percent_magical_reduction:number;

    constructor(equip: object) {
        super(equip);

        this.quality = this.quality || 100;

        this.bonus_flat_magical_reduction = equip['bonus_flat_magical_reduction'] || 0;
        this.bonus_percent_magical_reduction = equip['bonus_percent_magical_reduction'] || 0;
    }

    public getType1(): string {
        return this.subtype1;
    }

    public preferAttackSummary(): boolean {
        return false;
    }

}