import { Constants } from '../../constants';
import { EquipmentItem } from './equipment-item';

export class SpecialAccessoryItem extends EquipmentItem {

    //Special Accessory bonuses from reinforcement/amplification
    bonus_primary_stats:number; // Sub Equipment and Magic Stone
    bonus_attack_stats:number; // Earring

    constructor(equip: object) {
        super(equip);

        this.quality = this.quality || 100;

        this.bonus_primary_stats = equip['bonus_primary_stats'] || 0;
        this.bonus_attack_stats = equip['bonus_attack_stats'] || 0;
    }

    public getType1(): string {
        return this.subtype1;
    }

    public getEquipmentSlot(): string {
        return this.subtype1.replace(' ', '');
    }

}