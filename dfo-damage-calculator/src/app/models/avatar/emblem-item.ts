import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";

type ItemRarity = Constants.itemRarity;
type EmblemColor = Constants.emblemColor;

export class StatEmblem extends BaseStatisticsBlock {

    //Basic item properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    //Emblem properties
    color:EmblemColor[];

    constructor(emblem:object) {
        super(emblem);

        this.icon = emblem['icon'];
        this.name = emblem['name'];
        this.rarity = emblem['rarity'];
        this.color = emblem['color'];
    }

    isColor(c:EmblemColor) {
        return c in this.color;
    }

}