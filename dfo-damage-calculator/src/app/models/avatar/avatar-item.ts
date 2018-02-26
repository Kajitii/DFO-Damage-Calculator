import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";
import { StatEmblem } from "./emblem-item";

type EmblemColor = Constants.emblemColor;
type ItemRarity = Constants.itemRarity;

export class AvatarItem extends BaseStatisticsBlock {

    //Basic item properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    //Avatar properties
    emblem_slots:EmblemSlot[];
    avatar_option:any;

}

class EmblemSlot {

    color:EmblemColor;
    emblem:StatEmblem;

    constructor(emblem:object) {
        this.color = emblem['color'] || Constants.emblemColor.Rainbow;
        this.emblem = emblem['emblem'];
    }

    hasEmblem(): boolean {
        return this.emblem != null;
    }

}