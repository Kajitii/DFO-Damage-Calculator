declare namespace DFO_Constants {
 
    export interface CERarity {
        common: number,
        uncommon: number,
        rare: number,
        unique: number,
        chronicle: number,
        legendary: number,
        epic: number
    }

    export interface CECategory {
        weapon: number,
        armor: number,
        accessory: number,
        specialAccessory: number
    }
    
    export interface ConstCategory {
        weapon: number,
        armor: number,
        accessory: number,
        specialAccessory: number
    }

    export interface EquipmentCategory {
        name?: string,
        displayName: string,
        values?: EquipmentCategory[] | string[]
    }

    export interface BaseExorcismVariables {
        ceRarity: CERarity,
        constCategory: ConstCategory
    }

    export interface BonusExorcismVariables {
        reinforcement: {
            ceRarity: CERarity,
            ceCategory: CECategory
        },
        refinement: {
            reinforcementLevelEquivalent: number[]
        }
    }
    
}