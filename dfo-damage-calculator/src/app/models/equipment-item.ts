import { Constants } from '../constants';
import { Utils } from '../utils';

type Amplification = Constants.amplification;
type ItemRarity = Constants.itemRarity;
type ClassCategory = Constants.classCategory;

let qualityStrings = [
    'Inferior',
    'Weak',
    'Ordinary',
    'Exceptional',
    'Superior'
];

let rarityStrings = [
    'Common',
    'Uncommon',
    
]

export class EquipmentItem {

    //Equipment basic properties
    icon:string;
    name:string;
    rarity:ItemRarity;
    quality:number;
    level:number;
    type:string;
    subtype1:string;
    subtype2:string;
    class_category:boolean[];
  
    //Equipment attack stats
    physical_attack:number;
    magical_attack:number;
    independent_attack:number;
  
    //Equipment defense stats
    physical_defense:number;
    magical_defense:number;
  
    //Equipment primary stats
    strength:number;
    intelligence:number;
    vitality:number;
    spirit:number;
  
    //Equipment exorcism
    exorcism:number;
  
    //Equipment secondary stats
    hp_max:number;
    mp_max:number;
    hp_recovery:number; //per minute
    mp_recovery:number; //per minute
    attack_speed:number;
    move_speed:number;
    cast_speed:number;
    jump_strength:number;
    evasion:number;
    physical_crit_chance:number;
    magical_crit_chance:number;
    rear_physical_crit_chance:number;
    rear_magical_crit_chance:number;
    hit_recovery:number;
    hit_rate:number;
    inventory_weight_limit:number;
  
    //Equipment elemental stats
    has_element_mod:boolean; //true if any of the below are not 0 or null
    fire_element:number;
    shadow_element:number;
    water_element:number;
    light_element:number;
    all_element:number;
    inflict_fire:boolean;
    inflict_shadow:boolean;
    inflict_water:boolean;
    inflict_light:boolean;
    fire_resist:number;
    shadow_resist:number;
    water_resist:number;
    light_resist:number;
    all_resist:number;
  
    //Equipment abnormal stats
    has_status_mod:boolean; //true if any of the below are not 0 or null
    poison_level:number;
    shock_level:number;
    bleed_level:number;
    curse_level:number;
    petrify_level:number;
    burning_level:number;
    stun_level:number;
    slow_level:number;
    poison_damage:number;
    shock_damage:number;
    bleed_damage:number;
    burning_damage:number;
    poison_tolerance:number;
    shock_tolerance:number;
    bleed_tolerance:number;
    curse_tolerance:number;
    petrify_tolerance:number;
    burning_tolerance:number;
    stun_tolerance:number;
    slow_tolerance:number;
  
    //Equipment damage modifiers
    skill_attack:number;
    all_attack:number;
    elenore:number;
    smash:number;
    additional_critical_damage:number;
    critical_damage_smash:number;
    primary_stat_mod:number;
    physical_attack_mod:number;
    magical_attack_mod:number;
    independent_attack_mod:number;
  
    //Equipment descriptions
    description:string;
    full_description:string;
    flavor_description:string;
  
    //Equipment boosts
    enchantment:object;
    boost_level:number;
    amplification:Amplification;
    refine_level:number;
    unsealed_options:number; //magic-sealed items
    gems:number; //Insignia
    set_effect_id:number;
  
    //Equipment morphability
    tradable:boolean;
    sealable:boolean;
    compoundable:boolean;
    transcendable:boolean;
    storable:boolean;
    disassemble:boolean;
  
    //Equipment vendor info
    weight:number; //kg
    durability:number;
    price:number;

    zeebarf: string[];

    constructor(equip:object) {

        this.icon = equip['icon'];
        this.name = equip['name'];
        this.rarity = equip['rarity'] || 'Common';
        this.quality = equip['quality'];
        this.level = equip['level'];
        this.type = equip['type'];
        this.subtype1 = equip['subtype1'];
        this.subtype2 = equip['subtype2'];
        this.class_category = this.initializeClassCategory(equip['class_category']);
    
        //Equipment attack stats
        this.physical_attack = equip['physical_attack'] || 0;
        this.magical_attack = equip['magical_attack'] || 0;
        this.independent_attack = equip['independent_attack'] || 0;
    
        //Equipment defense stats
        this.physical_defense = equip['physical_defense'] || 0;
        this.magical_defense = equip['magical_defense'] || 0;
    
        //Equipment primary stats
        this.strength = equip['strength'] || 0;
        this.intelligence = equip['intelligence'] || 0;
        this.vitality = equip['vitality'] || 0;
        this.spirit = equip['spirit'] || 0;
    
        //Equipment exorcism
        this.exorcism = equip['exorcism'] || this.baseExorcism();
    
        //Equipment secondary stats
        this.hp_max = equip['hp_max'] || 0;
        this.mp_max = equip['mp_max'] || 0;
        this.hp_recovery = equip['hp_recovery'] || 0;
        this.mp_recovery = equip['mp_recovery'] || 0;
        this.attack_speed = equip['attack_speed'] || 0;
        this.move_speed = equip['move_speed'] || 0;
        this.cast_speed = equip['cast_speed'] || 0;
        this.jump_strength = equip['jump_strength'] || 0;
        this.evasion = equip['evasion'] || 0;
        this.physical_crit_chance = equip['physical_crit_chance'] || 0;
        this.magical_crit_chance = equip['magical_crit_chance'] || 0;
        this.rear_physical_crit_chance = equip['rear_physical_crit_chance'] || 0;
        this.rear_magical_crit_chance = equip['rear_magical_crit_chance'] || 0;
        this.hit_recovery = equip['hit_recovery'] || 0;
        this.hit_rate = equip['hit_rate'] || 0;
        this.inventory_weight_limit = equip['inventory_weight_limit'] || 0;
    
        //Equipment elemental stats
        this.fire_element = equip['fire_element'] || 0;
        this.shadow_element = equip['shadow_element'] || 0;
        this.water_element = equip['water_element'] || 0;
        this.light_element = equip['light_element'] || 0;
        this.all_element = equip['all_element'] || 0;
        this.inflict_fire = equip['inflict_fire'] || 0;
        this.inflict_shadow = equip['inflict_shadow'] || 0;
        this.inflict_water = equip['inflict_water'] || 0;
        this.inflict_light = equip['inflict_light'] || 0;
        this.fire_resist = equip['fire_resist'] || 0;
        this.shadow_resist = equip['shadow_resist'] || 0;
        this.water_resist = equip['water_resist'] || 0;
        this.light_resist = equip['light_resist'] || 0;
        this.all_resist = equip['all_resist'] || 0;
    
        //Equipment abnormal stats
        this.poison_level = equip['poison_level'] || 0;
        this.shock_level = equip['shock_level'] || 0;
        this.bleed_level = equip['bleed_level'] || 0;
        this.curse_level = equip['curse_level'] || 0;
        this.petrify_level = equip['petrify_level'] || 0;
        this.burning_level = equip['burning_level'] || 0;
        this.stun_level = equip['stun_level'] || 0;
        this.slow_level = equip['slow_level'] || 0;
        this.poison_damage = equip['poison_damage'] || 0;
        this.shock_damage = equip['shock_damage'] || 0;
        this.bleed_damage = equip['bleed_damage'] || 0;
        this.burning_damage = equip['burning_damage'] || 0;
        this.poison_tolerance = equip['poison_tolerance'] || 0;
        this.shock_tolerance = equip['shock_tolerance'] || 0;
        this.bleed_tolerance = equip['bleed_tolerance'] || 0;
        this.curse_tolerance = equip['curse_tolerance'] || 0;
        this.petrify_tolerance = equip['petrify_tolerance'] || 0;
        this.burning_tolerance = equip['burning_tolerance'] || 0;
        this.stun_tolerance = equip['stun_tolerance'] || 0;
        this.slow_tolerance = equip['slow_tolerance'] || 0;
    
        //Equipment damage modifiers
        this.skill_attack = equip['skill_attack'] || 0;
        this.all_attack = equip['all_attack'] || 0;
        this.elenore = equip['elenore'] || 0;
        this.smash = equip['smash'] || 0;
        this.additional_critical_damage = equip['additional_critical_damage'] || 0;
        this.critical_damage_smash = equip['critical_damage_smash'] || 0;
        this.primary_stat_mod = equip['primary_stat_mod'] || 0;
        this.physical_attack_mod = equip['physical_attack_mod'] || 0;
        this.magical_attack_mod = equip['magical_attack_mod'] || 0;
        this.independent_attack_mod = equip['independent_attack_mod'] || 0;
    
        //Equipment descriptions
        this.description = equip['description'];
        this.full_description = equip['full_description'];
        this.flavor_description = equip['flavor_description'];
    
        //Equipment boosts
        this.enchantment = equip['enchantment'];
        this.boost_level = equip['boost_level'] || 0;
        this.amplification = equip['amplification'] || 'None';
        this.refine_level = equip['refine_level'] || 0;
        this.set_effect_id = equip['set_effect_id'];
    
        //Equipment morphability
        this.tradable = equip['tradable'] || true;
        this.sealable = equip['sealable'] || true;
        this.compoundable = equip['compoundable'] || true;
        this.transcendable = equip['transcendable'] || true;
        this.storable = equip['storable'] || true;
        this.disassemble = equip['disassemble'] || true;
    
        //Equipment vendor info
        this.weight = equip['weight'] || 0;
        this.durability = equip['durability'] || 0;
        this.price = equip['price'] || 0;
    }


    private initializeClassCategory(values: number[] = []): boolean[] {
        let a: boolean[] = [];
        for (let classCategory in Utils.getEnumValues(Constants.classCategory)) {
            if (values && values.indexOf(Number(classCategory)) !== -1) {
                a.push(true);
            }
            else {
                a.push(false);
            }
        }
        console.log(a);
        return a;
    }

    public restrictedClasses(): string {
        if (!this.class_category) {
            return '';
        }
        let index: number = this.class_category.indexOf(true);
        if (index == -1) {
            return '';
        }

        let s: string = '';
        for (let item in Utils.getEnumValues(Constants.classCategory)) {
            if (this.class_category[item]) {
                let cl: string = Constants.classCategory[item];
                cl = cl.humanize();
                s += s.length == 0 ? cl : ', ' + cl;
            }
        }
        return s;
    }

    public hasClassRestriction(): boolean {
        return !this.class_category.reduce(
            function(prevVal: boolean, currVal: boolean, index: number, ar: boolean[]): boolean {
                return ar[0] === currVal && (index <= 1 || prevVal) ? true : false;
            }
        );
    }

    public qualityDescription(): string {
        let n: number = Math.floor((this.quality - 1) / 20);
        return qualityStrings[n];
    }

    public canBeAmplified(): boolean {
        return this.rarity != Constants.itemRarity.Common && this.rarity != Constants.itemRarity.Uncommon;
    }

    /**************************
     * Form functions
     **************************/

    /**************************
     * Base stat calculations
     **************************/

    public baseExorcism(level: number = this.level): number {
        let exoConstants = Constants.baseExorcismVariables;
        let base: number = exoConstants.constCategory[this.type.computerize()];
        let ceRarity: number = exoConstants.ceRarity[Constants.itemRarity[this.rarity].computerize()];
        return base * (ceRarity + level / 5);
    }

    /**************************
     * Bonus stat calculations
     **************************/

    public isRefinedMoreThanBoost(): boolean {
        if (this.type !== Constants.equipmentType.Weapon) {
            return false;
        }
        let boostLevelEquivalent: number = Constants.bonusExorcismVariables.refinement.reinforcementLevelEquivalent[this.refine_level];
        return boostLevelEquivalent >= this.boost_level;
    }

    public bonusExorcism(): number {
        let exoConstants = Constants.bonusExorcismVariables;
        let ceRarity: number = exoConstants.reinforcement.ceRarity[Constants.itemRarity[this.rarity].computerize()];
        let ceCategory: number = exoConstants.reinforcement.ceCategory[Constants.equipmentType[this.type].computerize()];
        let level: number = this.isRefinedMoreThanBoost() ? exoConstants.refinement.reinforcementLevelEquivalent[this.refine_level] : this.boost_level;
        return level * ceRarity * ceCategory;
    }

    //TODO
    public bonusPhysicalAttack(): number {
        return 679;
    }

    //TODO
    public bonusMagicalAttack(): number {
        return 661;
    }

    //TODO
    public bonusIndependentAttack(): number {
        return 449;
    }

    //TODO
    public bonusAbnormalAttack(): number {
        return 91.6;
    }

    /**************************
     * Total stat calculations
     **************************/

    public totalPhysicalAttack(): number {
        let c: number = 1 + this.strength / 250;
        let n: number = this.physical_attack + this.bonusPhysicalAttack();
        return n * c;
    }

    public totalMagicalAttack(): number {
        let c: number = 1 + this.intelligence / 250;
        let n: number = this.magical_attack + this.bonusMagicalAttack();
        return n * c;
    }

    public totalIndependentAttack(): number {
        return this.independent_attack + this.bonusIndependentAttack();
    }

    //TODO
    public totalPhysicalDefense(): number {
        return this.physical_defense;
    }

    //TODO
    public totalMagicalDefense(): number {
        return this.magical_defense;
    }

    public totalMaxHP(vitality: number = this.vitality): number {
        return (1 + vitality / 250) * this.hp_max;
    }

    //TODO
    public totalHPRecovery(vitality: number = this.vitality): number {
        return (1 + vitality / 250) * this.hp_recovery;
    }

    //TODO
    public totalMaxMP(spirit: number = this.spirit): number {
        return (1 + spirit / 250) * this.mp_max;
    }

    //TODO
    public totalMPRecovery(spirit: number = this.spirit): number {
        return (1 + spirit / 250) * this.mp_recovery;
    }

}