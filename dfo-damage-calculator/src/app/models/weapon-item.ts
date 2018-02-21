import { Constants } from '../constants';
import { EquipmentItem } from "./equipment-item";

type WeaponSpeed = Constants.weaponSpeed;

export class WeaponItem extends EquipmentItem {

    //Weapon skill and attack modifiers
    speed:WeaponSpeed;
    physical_skill_mp:number;
    physical_skill_cooldown:number;
    magical_skill_mp:number;
    magical_skill_cooldown:number;

    //Weapon bonuses from reinforcement/amplification
    bonus_physical_attack:number;
    bonus_magical_attack:number;
    bonus_independent_attack:number;
    bonus_abnormal_status_attack:number;

    constructor(equip: object) {
        super(equip);

        this.quality = this.quality || 100;
    
        //Weapon skill and attack modifiers
        this.speed = equip['speed'] || Constants.weaponSpeed.Average;
        this.physical_skill_mp = equip['physical_skill_mp'] || 0;
        this.physical_skill_cooldown = equip['physical_skill_cooldown'] || 0;
        this.magical_skill_mp = equip['magical_skill_mp'] || 0;
        this.magical_skill_cooldown = equip['magical_skill_cooldown'] || 0;

        //Weapon bonuses from reinforcement/amplification
        this.bonus_physical_attack = equip['bonus_physical_attack'] || 0;
        this.bonus_magical_attack = equip['bonus_magical_attack'] || 0;
        this.bonus_independent_attack = equip['bonus_independent_attack'] || 0;
        this.bonus_abnormal_status_attack = equip['bonus_abnormal_status_attack'] || 0;
    }

    public getType1(): string {
        return this.subtype2;
    }

    public getType2(): string {
        return this.type;
    }

    public preferAttackStats(): boolean {
        return true;
    }
    
    public totalPhysicalAttack(): number {
        let c: number = 1 + this.strength / 250;
        let n: number = this.physical_attack + this.bonus_physical_attack;
        return n * c;
    }

    public totalMagicalAttack(): number {
        let c: number = 1 + this.intelligence / 250;
        let n: number = this.magical_attack + this.bonus_magical_attack;
        return n * c;
    }

    public totalIndependentAttack(): number {
        return this.independent_attack + this.bonus_independent_attack;
    }

}