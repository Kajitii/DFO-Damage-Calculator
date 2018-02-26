import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";
import { GemItem } from "./gem-item";

type ItemRarity = Constants.itemRarity;

export class InsigniaItem extends BaseStatisticsBlock {

    //Basic item properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    //Insignia properties
    gems:[GemItem, GemItem, GemItem, GemItem] = [null, null, null, null];

    constructor(insignia:object) {
        super(insignia);

        this.icon = insignia['icon'];
        this.name = insignia['name'];
        this.rarity = insignia['rarity'];
        this.gems = insignia['gems'];
    }

}