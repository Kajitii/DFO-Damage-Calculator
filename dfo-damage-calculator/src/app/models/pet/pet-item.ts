import { ArtifactItem } from "./artifact-item";
import { BaseStatisticsBlock } from "../base-statistics-block";
import { Constants } from "../../constants";

type ItemRarity = Constants.itemRarity;

export class PetItem extends BaseStatisticsBlock {
    
    //Equipment basic properties
    icon:string;
    name:string;
    rarity:ItemRarity;

    //Pet properties
    artifacts:[ArtifactItem, ArtifactItem, ArtifactItem];
    enchantment:object;

}