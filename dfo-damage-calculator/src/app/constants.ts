/// <reference path="constants.d.ts" />

export namespace Constants {

    // The percentage of physical damage increased per point of strength.
    export const strDamageCoefficient: number = 1 / 250;

    // The percentage of magical damage increased per point of intelligence.
    export const intDamageCoefficient: number = 1 / 250;

    // The amount of physical defense increased per point of vitality.
    export const vitDefenseCoefficient: number = 5;

    // The percentage of HP maximum increased per point of vitality.
    export const vitHPMaxCoefficient: number = 1 / 250;

    // The percentage of HP regeneration increased per point of vitality.
    export const vitHPRegenCoefficient: number = 1 / 250;

    // The amount of magical defense increased per point of spirit.
    export const sprDefenseCoefficient: number = 5;

    // The percentage of HP maximum increased per point of spirit.
    export const sprMPMaxCoefficient: number = 1 / 250;

    // The percentage of HP regeneration increased per point of spirit.
    // TODO: validate this number
    export const sprMPRegenCoefficient: number = 1 / 200;

    // The amount of damage increased per point of elemental damage.
    export const elementalDamageCoefficient: number = 1 / 222;

    // The amount of damage increased for critically striking an enemy.
    export const criticalAttackDamageIncrease: number = 1.5;

    // The amount of damage increased for attacking an enemy from behind.
    export const rearAttackDamageIncrease: number = 1.2;

    // The amount of damage increased for attacking an enemy mid-attack.
    export const counterAttackDamageIncrease: number = 1.2;

    // Statistics that affect gameplay but are not reflected in
    // the stats window.
    export const hiddenStats = {
        criticalChance: 3,
        allElementalDamage: 11
    }

    /* When an item is purified, it grants one of the following
     * bonus stats.  Otherwise, it is not considered to have
     * amplification.
     * 
     * Items must be of at least rare rarity and level 55 or higher
     * in order to have amplification.
     */
    export enum amplification {
        None = 'None',
        Strength = 'Strength',
        Intelligence = 'Intelligence',
        Vitality = 'Vitality',
        Spirit = 'Spirit'
    }

    // Item rarity, in order of power.
    export enum itemRarity {
        Common,
        Uncommon,
        Rare,
        Chronicle,
        Unique,
        Legendary,
        Epic
    }

    // Weapon attack/draw speed
    export enum weaponSpeed {
        VerySlow,
        Slow,
        Average,
        Fast,
        VeryFast
    }

    // Possible major classes in DFO.
    export enum classCategory {
        Slayer,
        Fighter,
        Gunner,
        Mage,
        Priest,
        Thief,
        DarkKnight,
        Creator,
        Knight,
        DemonicLancer
    }

    // Possible major equipment types.
    // Definitions are from DFOpedia.
    export enum equipmentType {
        Weapon = 'Weapon',
        Armor = 'Armor',
        Accessory = 'Accessory',
        SpecialAccessory = 'Special Accessory'
    }

    // Full definition of character equipment types.
    // Definitions are from DFOpedia.
    export const equipmentSubType: DFO_Constants.EquipmentCategory[] = [
        {
            name: 'Weapon',
            displayName: 'Weapon',
            values: [
                {
                    name: 'Slayer',
                    displayName: 'Slayer/Dark Knight/Knight',
                    values: [
                        'Short Sword',
                        'Katana',
                        'Bludgeon',
                        'Zanbato',
                        'Lightsabre'
                    ]
                },
                {
                    displayName: 'Fighter',
                    values: [
                        'Knuckle',
                        'Gauntlets',
                        'Claw',
                        'Boxing Gloves',
                        'Tonfa'
                    ]
                },
                {
                    displayName: 'Gunner',
                    values: [
                        'Revolver',
                        'Autogun',
                        'Musket',
                        'Hand Cannon',
                        'Bowgun'
                    ]
                },
                {
                    name: 'Mage',
                    displayName: 'Mage/Creator',
                    values: [
                        'Spear',
                        'Pole',
                        'Rod',
                        'Staff',
                        'Broomstick'
                    ]
                },
                {
                    displayName: 'Priest',
                    values: [
                        'Cross',
                        'Rosary',
                        'Totem',
                        'Scythe',
                        'Battle Axe'
                    ]
                },
                {
                    displayName: 'Thief',
                    values: [
                        'Dagger',
                        'Dual Blade',
                        'Wand',
                        'Chakra Weapon'
                    ]
                },
                {
                    name: 'Lancer',
                    displayName: 'Demonic Lancer',
                    values: [
                        'Long Lance',
                        'Halberd'
                    ]
                }
            ]
        },
        {
            displayName: 'Armor',
            values: [
                {
                    displayName: 'Cloth',
                    values: [
                        'Top',
                        'Head/Shoulder',
                        'Bottom',
                        'Belt',
                        'Shoes'
                    ]
                },
                {
                    displayName: 'Leather',
                    values: [
                        'Top',
                        'Head/Shoulder',
                        'Bottom',
                        'Belt',
                        'Shoes'
                    ]
                },
                {
                    displayName: 'Light Armor',
                    values: [
                        'Top',
                        'Head/Shoulder',
                        'Bottom',
                        'Belt',
                        'Shoes'
                    ]
                },
                {
                    displayName: 'Heavy Armor',
                    values: [
                        'Top',
                        'Head/Shoulder',
                        'Bottom',
                        'Belt',
                        'Shoes'
                    ]
                },
                {
                    displayName: 'Plate Armor',
                    values: [
                        'Top',
                        'Head/Shoulder',
                        'Bottom',
                        'Belt',
                        'Shoes'
                    ]
                }
            ]
        },
        {
            displayName: 'Accessory',
            values: [
                'Necklace',
                'Ring',
                'Bracelet'
            ]
        },
        {
            displayName: 'Special Accessory',
            values: [
                'Sub Equipment',
                'Magic Stone',
                'Earring'
            ]
        },
        {
            displayName: 'Title'
        }
    ]

    export enum equipmentSlot {
        Weapon,
        Top,
        HeadShoulders,
        Bottom,
        Shoes,
        Belt,
        Necklace,
        Ring,
        Bracelet,
        Title,
        SubEquipment,
        MagicStone,
        Earrings
    }

    export enum avatarSlot {
        Hair,
        Hat,
        Face,
        Top,
        Waist,
        Bottom,
        Shoes,
        Aura,
        Skin,
        Weapon
    }

    export enum creatureSlot {
        Pet,
        RedArtifact,
        BlueArtifact,
        GreenArtifact
    }

    export enum insigniaSlot {
        Insignia
    }

    export const baseWeaponAttackVariables = {
        slayer: {
            shortSword: {
                physical: 0,
                magical: 0
            },
            katana: {
                physical: 0,
                magical: 0
            }
        },
        fighter: {

        },

    }

    export const baseIndependentAttackVariables = {

    }

    /* Base exorcism is calculated by:
     *      round(ceRarity * base) + base * level / 5
     * where:
     *      ceRarity is a coefficient dependent on item rarity
     *      base is a number dependent on item category
     *      level is based on item level
     */
    export const baseExorcismVariables: DFO_Constants.BaseExorcismVariables = {
        ceRarity: {
            common: 0,
            uncommon: 1,
            rare: 2,
            unique: 3,
            chronicle: 5,
            legendary: 6,
            epic: 7.8
        },
        constCategory: {
            weapon: 32,
            armor: 12,
            accessory: 20,
            specialAccessory: 16
        }
    }

    /* Bonus exorcism is based off of rarity and the higher of
     * refinement or reinforcement/amplification values.
     *
     * Bonus exorcism based off of reinforcement/amplification
     * is calculated by:
     *      boost * ceRarity * ceCategory
     * where:
     *      boost is the reinforcement/amplification level of the gear
     *      ceRarity is a coefficient dependent on item rarity
     *      ceCategory is a coefficient dependent on item category
     *
     * Refinement is only available on weapons, and their
     * exorcism is based off of reinforcement/amplification of
     * the equivalent level.
     */
    export const bonusExorcismVariables: DFO_Constants.BonusExorcismVariables = {
        reinforcement: {
            ceRarity: {
                common: 1,
                uncommon: 1,
                rare: 1.3,
                unique: 1.55,
                chronicle: 1,
                legendary: 1.8,
                epic: 1.9
            },
            ceCategory: {
                weapon: 8/3,
                armor: 1,
                accessory: 5/3,
                specialAccessory: 4/3
            }
        },
        refinement: {
            reinforcementLevelEquivalent: [ 0, 2, 4, 7, 8, 10, 11, 12, 13 ]
        }
    }

    export const bonusIndependentAttackVariables: object = {
        rarityMultiplier: [ 1, 1.75, 2.56, 3.3, 2.75, 3.56, 3.87 ],
        refinementLevelMultiplier: [ 0, 1, 1.5, 2, 3, 4, 6.5, 9, 12.5 ]
    }

    //Abnormal damage from refinement is calculated by:
    //  bx + cx^2
    //where:
    //  x is the refinement level
    //  b, c are coefficients
    export const bonusAbnormalDamageVariables: object = {
        common: {
            b: 2,
            c: 3
        },
        uncommon: {
            b: 2,
            c: 3
        },
        rare: {
            b: 2,
            c: 3
        },
        unique: {
            b: 2,
            c: 3
        },
        chronicle: {
            b: 2,
            c: 3
        },
        legendary: {
            b: 2,
            c: 3
        },
        epic: {
            b: 2,
            c: 3
        }
    }

    export const bonusDamageReductionVariables: object = {
        baseValues: {
            percentConstantRarity: {
                common: 0.04,
                uncommon: 0.07,
                rare: 0.10,
                unique: 0.125,
                chronicle: 0.11,
                legendary: 0.135,
                epic: 0.145
            },
            flatConstantRarity: {
                armor: {
                    common: 0,
                    uncommon: 0,
                    rare: 0,
                    unique: 0,
                    chronicle: 0,
                    legendary: 0.3,
                    epic: 0.3375
                },
                accessory: {
                    common: 0,
                    uncommon: 0,
                    rare: 0,
                    unique: 0,
                    chronicle: 0,
                    legendary: 0,
                    epic: 0.375
                }
            }
        },
        levelMultiplier: {
            armor: [ 0, 1, 2, 3, 5, 7, 9, 12, 14, 16, 20, 40, 60, 80 ],
            accessory: [ 0, 2, 3, 5, 8, 12, 15, 20, 23, 27, 33, 67, 100 ]
        }
    }

    export const SAVIOR_ZANBATO:object = {
        icon: "",
        name: "Savior's Glory - Zanbato",
        rarity: itemRarity.Epic,
        level: 85,
        type: "Weapon",
        subtype1: "Slayer",
        subtype2: "Zanbato",
        quality: 100,
        class_category: [classCategory.Slayer, classCategory.DarkKnight, classCategory.Knight],
        amplified: false,
        boost_level: 12,
        refine_level: 8,
        enchantment: {
          physical_attack: 10
        },
        physical_attack: 1267,
        bonus_physical_attack: 679,
        magical_attack: 950,
        bonus_magical_attack: 661,
        independent_attack: 648,
        bonus_independent_attack: 449,
        bonus_abnormal_status_attack: 91.6,
        strength: 72,
        speed: weaponSpeed.Slow,
        physical_skill_mp: 20,
        physical_skill_cooldown: 10,
        magical_skill_mp: -10,
        exorcism: 794,
        cast_speed: -2,
        skill_attack: 35,
        description: "Skill Atk. +35%\n\nEndows your weapon with the highest elemental attribute you have.\n\nAttacks absorb 3 Energy every time, up to 100.\n\nOnce you finish absorbing Energy, you can use the Equipment Option Control key to release the power of the Seventh Apostle: Fire-Eater Anton.\n\nHis power causes damage after it's released.",
        full_description: "Skill Atk. +35%\n\nEndows your weapon with the highest elemental attribute you have.\n\nAttacks absorb 3 Energy every time, up to 100.\n\nEnergy -10 if no Energy is absorbed for 5 seconds\n\nOnce you finish absorbing Energy, you can use the Equipment Option Control key to release the power of the Seventh Apostle: Fire-Eater Anton and increase skill Attack +20% at the cost of doubling the Clear Cube Fragment cost for 20 seconds. (Cooldown: 30 sec.)\n\nAnton's power, after it's released, causes 10% of total damage you inflict on enemies during its release, up to 3 million.",
        flavor_description: "Let all the energy in the world strengthen you.\nLet your enemies feed you with their life force.\nYou will acquire the true power of an Apostle.\nAnd when the power has done its work, it will shake heaven and earth.",
        tradable: false,
        sealable: false,
        compoundable: false,
        transcendable: false,
        storable: true,
        disassemble: true,
        weight: 4,
        durability: 45,
        price: 23943
    }
}