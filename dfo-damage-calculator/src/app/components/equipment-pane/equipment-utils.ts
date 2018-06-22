

import { Constants } from '../../constants';

import { EquipmentItem } from '../../models/equipment/equipment-item';
import { WeaponItem } from '../../models/equipment/weapon-item';
import { ArmorItem } from '../../models/equipment/armor-item';
import { AccessoryItem } from '../../models/equipment/accessory-item';
import { SpecialAccessoryItem } from '../../models/equipment/special-accessory-item';
    
export namespace EquipmentUtils {

    export function convertInputObjectToEquipment(inputObj: object, key: string): EquipmentItem {
        let equipment: EquipmentItem;
        let equipmentType = Constants.equipmentType;
        switch (key) {
            case equipmentType.Weapon:
                equipment = new WeaponItem(inputObj);
                break;
            case equipmentType.Armor:
                equipment = new ArmorItem(inputObj);
                break;
            case equipmentType.Accessory:
                equipment = new AccessoryItem(inputObj);
                break;
            case equipmentType.SpecialAccessory:
                equipment = new SpecialAccessoryItem(inputObj);
                break;
            default:
                equipment = new EquipmentItem(inputObj);
        }
        return equipment;
    }

}