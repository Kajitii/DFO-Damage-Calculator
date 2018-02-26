import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";

type ItemRarity = Constants.itemRarity;

export class ArtifactItem extends BaseStatisticsBlock {

    //Item basic properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    //Artifact properties
    creature_skill_cooldown_reduction:number;
    creature_physical_attack:number;
    creature_magical_attack:number;

}