import { Constants } from '../../constants';
import { BaseStatisticsBlock } from '../base-statistics-block';
import { Utils } from '../../utils';

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

export class EquipmentItem extends BaseStatisticsBlock {

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
  
    //Equipment exorcism
    exorcism:number;
  
    //Equipment descriptions
    description:string;
    full_description:string;
    flavor_description:string;
  
    //Equipment boosts
    enchantment:object;
    boost_level:number;
    amplification:Amplification;
    bonus_dimensional_stat:number;
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

    constructor(equip:object) {
        super(equip);

        this.icon = equip['icon'];
        this.name = equip['name'];
        this.rarity = equip['rarity'] || Constants.itemRarity.Common;
        this.quality = equip['quality'];
        this.level = equip['level'];
        this.type = equip['type'];
        this.subtype1 = equip['subtype1'];
        this.subtype2 = equip['subtype2'];
        this.class_category = this.initializeClassCategory(equip['class_category']);
    
        //Equipment exorcism
        this.exorcism = equip['exorcism'] || this.baseExorcism();
    
        //Equipment descriptions
        this.description = equip['description'];
        this.full_description = equip['full_description'];
        this.flavor_description = equip['flavor_description'];
    
        //Equipment boosts
        this.enchantment = equip['enchantment'];
        this.boost_level = equip['boost_level'] || 0;
        this.amplification = equip['amplification'] || 'None';
        this.bonus_dimensional_stat = equip['bonus_dimensional_stat'] || 0;
        this.refine_level = equip['refine_level'] || 0;
        this.set_effect_id = equip['set_effect_id'];
    
        //Equipment morphability
        this.tradable = this.initializeBooleanValue(equip['tradable'], this.baseTradability.bind(this));
        this.sealable = this.initializeBooleanValue(equip['sealable'], this.baseSealability.bind(this));
        this.compoundable = this.initializeBooleanValue(equip['compoundable'], this.baseCompoundability.bind(this));
        this.transcendable = this.initializeBooleanValue(equip['transcendable'], function() { return true });
        this.storable = this.initializeBooleanValue(equip['storable'], function() { return true });
        this.disassemble = this.initializeBooleanValue(equip['disassemble'], function() { return true });
    
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
        return a;
    }

    private initializeBooleanValue(value: boolean, defaultFn: () => boolean): boolean {
        if (value !== undefined) {
            return value;
        }
        return defaultFn();
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

    public isWeapon(): boolean {
        return this.type === 'Weapon';
    }

    public isArmor(): boolean {
        return this.type === 'Armor';
    }

    public isAccessory(): boolean {
        return this.type === 'Accessory';
    }

    public isSpecialAccessory(): boolean {
        return this.type === 'Special Accessory';
    }

    public isAmplified(): boolean {
        return this.amplification !== Constants.amplification.None;
    }

    //Top type description line.  Depends on equipment type.
    public getType1(): string {
        return this.subtype1;
    }

    //Bottom type description line.  Depends on equipment type.
    public getType2(): string {
        return null;
    }

    //Reports the equipment slot this equipment belongs to.
    public getEquipmentSlot(): string {
        return this.type;
    }

    //Whether attack stats are displayed in the summary, and before defense stats.
    public preferAttackStats(): boolean {
        return this.physical_attack > 0 || this.magical_attack > 0 || this.independent_attack > 0;
    }

    /**************************
     * Base stat calculations
     **************************/

    /* Determines the default exorcism value of the equipment.
     *
     * Variables that influence exorcism are item type, rarity, and level.
     */
    public baseExorcism(): number {
        let exoConstants = Constants.baseExorcismVariables;
        let base: number = exoConstants.constCategory[this.type.computerize()];
        let ceRarity: number = exoConstants.ceRarity[Constants.itemRarity[this.rarity].computerize()];
        return base * (ceRarity + this.level / 5);
    }

    /* Determines the default tradability of the equipment.
     *
     * Generally speaking, chronicle and epic rarity equipment are not tradable.
     * Exceptions do exist elsewhere, which must be determined on a case-by-case
     * basis.
     */
    public baseTradability(): boolean {
        return this.rarity !== Constants.itemRarity.Chronicle && this.rarity !== Constants.itemRarity.Epic;
    }

    /* Determines the default sealability of the equipment.  Sealable equipment,
     * once equipped, is bound to the character and cannot be traded.  This can
     * be undone using Golden Candles.
     * 
     * Untradable equipment cannot be sealed.
     * 
     * Unique and most legendary rarity equipment are sealable.
     */
    public baseSealability(): boolean {
        return this.baseTradability() && (this.rarity === Constants.itemRarity.Unique || this.rarity === Constants.itemRarity.Legendary);
    }

    /* Determines the default compoundability of the equipment.
     * 
     * Generally speaking, rare, most unique, and tradable legendary equipment
     * can be used to compound for new items.
     */
    public baseCompoundability(): boolean {
        return this.rarity === Constants.itemRarity.Rare || this.rarity === Constants.itemRarity.Unique || this.rarity === Constants.itemRarity.Legendary;
    }

    /* Determines the default transcendability of the equipment.  Transcendence
     * allows players to trade items between their own characters, but not to
     * other players.
     * 
     * Only raid exclusive rewards are definitively not transcendable.  Other
     * exceptions exist, and must be determined on a case-by-case basis.
     */
    public baseTranscendability(): boolean {
        return true;
    }

    /* Determines the default storability of the equipment.
     *
     * This must be determined on a case-by-case basis.
     */
    public baseStorability(): boolean {
        return true;
    }

    /* Determines the default grindability of the equipment.
     *
     * This must be determined on a case-by-case basis.
     */
    public baseGrindability(): boolean {
        return true;
    }

    /**************************
     * Bonus stat calculations
     **************************/

    /* Determines whether exorcism resulting from refinement is more than
     * reinforcement/amplification.  Refinement takes precedence.
     * 
     * Refinement 8 has the same exorcism as boost 13.
     */
    public isRefinedMoreThanBoost(): boolean {
        if (this.type !== Constants.equipmentType.Weapon) {
            return false;
        }
        let boostLevelEquivalent: number = Constants.bonusExorcismVariables.refinement.reinforcementLevelEquivalent[this.refine_level];
        return boostLevelEquivalent >= this.boost_level;
    }

    /* Calculates bonus exorcism as a result of the higher of refinement
     * or boost.
     * 
     * Variables that influence bonus exorcism include the strength of
     * refinement/boost, equipment type, and rarity.
     */
    public bonusExorcism(): number {
        let exoConstants = Constants.bonusExorcismVariables;
        let ceRarity: number = exoConstants.reinforcement.ceRarity[Constants.itemRarity[this.rarity].computerize()];
        let ceCategory: number = exoConstants.reinforcement.ceCategory[this.type.computerize()];
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
        return (1 + this.strength * Constants.strDamageCoefficient) * this.physical_attack;
    }

    public totalMagicalAttack(): number {
        return (1 + this.intelligence * Constants.intDamageCoefficient) * this.magical_attack;
    }

    public totalIndependentAttack(): number {
        return this.independent_attack;
    }

    public totalPhysicalDefense(): number {
        return this.physical_defense + this.vitality * Constants.vitDefenseCoefficient;
    }

    public totalMagicalDefense(): number {
        return this.magical_defense + this.spirit * Constants.sprDefenseCoefficient;
    }

    public totalMaxHP(vitality: number = this.vitality): number {
        return (1 + vitality * Constants.vitHPMaxCoefficient) * this.hp_max;
    }

    public totalHPRecovery(vitality: number = this.vitality): number {
        return (1 + vitality * Constants.vitHPRegenCoefficient) * this.hp_recovery;
    }

    //TODO
    public totalMaxMP(spirit: number = this.spirit): number {
        return (1 + spirit * Constants.sprMPMaxCoefficient) * this.mp_max;
    }

    //TODO
    public totalMPRecovery(spirit: number = this.spirit): number {
        return (1 + spirit * Constants.sprMPRegenCoefficient) * this.mp_recovery;
    }

}