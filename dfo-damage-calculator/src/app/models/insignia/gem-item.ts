import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";

type ItemRarity = Constants.itemRarity;

export class GemItem extends BaseStatisticsBlock {

    //Basic item properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    constructor(gem:object) {
        super(gem);

        this.icon = gem['icon'];
        this.name = gem['name'];
        this.rarity = gem['rarity'];
    }

}