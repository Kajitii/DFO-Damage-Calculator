import { EquipmentItem } from "./equipment-item";

type WeaponSpeed = 'Very Slow' | 'Slow' | 'Average' | 'Fast' | 'Very Fast';

export class WeaponItem extends EquipmentItem {

    //Weapon skill and attack modifiers
    speed:WeaponSpeed;
    physical_skill_mp:number;
    physical_skill_cooldown:number;
    magical_skill_mp:number;
    magical_skill_cooldown:number;

    constructor(equip: object) {
        super(equip);
    
        //Weapon skill and attack modifiers
        this.speed = equip['speed'] || 'Average';
        this.physical_skill_mp = equip['physical_skill_mp'] || 0;
        this.physical_skill_cooldown = equip['physical_skill_cooldown'] || 0;
        this.magical_skill_mp = equip['magical_skill_mp'] || 0;
        this.magical_skill_cooldown = equip['magical_skill_cooldown'] || 0;
    }

}