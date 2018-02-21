import { Constants } from '../constants';
import { EquipmentItem } from './equipment-item';

export class ArmorItem extends EquipmentItem {

    //Armor bonuses from reinforcement/amplification
    bonus_flat_physical_reduction:number;
    bonus_percent_physical_reduction:number;

    constructor(equip: object) {
        super(equip);

        this.quality = this.quality || 100;

        this.bonus_flat_physical_reduction = equip['bonus_flat_physical_reduction'] || 0;
        this.bonus_percent_physical_reduction = equip['bonus_percent_physical_reduction'] || 0;
    }

    public getType1(): string {
        return this.subtype1;
    }

    public getType2(): string {
        return this.subtype2;
    }

    public preferAttackStats(): boolean {
        return false;
    }

}