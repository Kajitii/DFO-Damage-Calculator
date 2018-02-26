export class BaseStatisticsBlock {

    //Attack stats
    physical_attack:number;
    magical_attack:number;
    independent_attack:number;
  
    //Defense stats
    physical_defense:number;
    magical_defense:number;
  
    //Primary stats
    strength:number;
    intelligence:number;
    vitality:number;
    spirit:number;
  
    //Secondary stats
    hp_max:number;
    mp_max:number;
    hp_recovery:number; //per minute
    mp_recovery:number; //per minute
    attack_speed:number;
    move_speed:number;
    cast_speed:number;
    jump_strength:number;
    evasion:number;
    physical_crit_chance:number;
    magical_crit_chance:number;
    hit_recovery:number;
    hit_rate:number;
    inventory_weight_limit:number;
  
    //Elemental stats
    fire_element:number;
    shadow_element:number;
    water_element:number;
    light_element:number;
    all_element:number;
    inflict_fire:boolean;
    inflict_shadow:boolean;
    inflict_water:boolean;
    inflict_light:boolean;
    fire_resist:number;
    shadow_resist:number;
    water_resist:number;
    light_resist:number;
    all_resist:number;
  
    //Abnormal stats
    poison_level:number;
    shock_level:number;
    bleed_level:number;
    curse_level:number;
    petrify_level:number;
    burning_level:number;
    stun_level:number;
    slow_level:number;
    poison_damage:number;
    shock_damage:number;
    bleed_damage:number;
    burning_damage:number;
    poison_tolerance:number;
    shock_tolerance:number;
    bleed_tolerance:number;
    curse_tolerance:number;
    petrify_tolerance:number;
    burning_tolerance:number;
    stun_tolerance:number;
    slow_tolerance:number;
  
    //Damage modifiers
    skill_attack:number;
    all_attack:number;
    elenore:number;
    smash:number;
    additional_critical_damage:number;
    critical_damage_smash:number;
    primary_stat_mod:number;
    physical_attack_mod:number;
    magical_attack_mod:number;
    independent_attack_mod:number;

    
    constructor(stats:object) {
    
        //Attack stats
        this.physical_attack = stats['physical_attack'] || 0;
        this.magical_attack = stats['magical_attack'] || 0;
        this.independent_attack = stats['independent_attack'] || 0;
    
        //Defense stats
        this.physical_defense = stats['physical_defense'] || 0;
        this.magical_defense = stats['magical_defense'] || 0;
    
        //Primary stats
        this.strength = stats['strength'] || 0;
        this.intelligence = stats['intelligence'] || 0;
        this.vitality = stats['vitality'] || 0;
        this.spirit = stats['spirit'] || 0;
    
        //Secondary stats
        this.hp_max = stats['hp_max'] || 0;
        this.mp_max = stats['mp_max'] || 0;
        this.hp_recovery = stats['hp_recovery'] || 0;
        this.mp_recovery = stats['mp_recovery'] || 0;
        this.attack_speed = stats['attack_speed'] || 0;
        this.move_speed = stats['move_speed'] || 0;
        this.cast_speed = stats['cast_speed'] || 0;
        this.jump_strength = stats['jump_strength'] || 0;
        this.evasion = stats['evasion'] || 0;
        this.physical_crit_chance = stats['physical_crit_chance'] || 0;
        this.magical_crit_chance = stats['magical_crit_chance'] || 0;
        this.hit_recovery = stats['hit_recovery'] || 0;
        this.hit_rate = stats['hit_rate'] || 0;
        this.inventory_weight_limit = stats['inventory_weight_limit'] || 0;
    
        //Elemental stats
        this.fire_element = stats['fire_element'] || 0;
        this.shadow_element = stats['shadow_element'] || 0;
        this.water_element = stats['water_element'] || 0;
        this.light_element = stats['light_element'] || 0;
        this.all_element = stats['all_element'] || 0;
        this.inflict_fire = stats['inflict_fire'] || 0;
        this.inflict_shadow = stats['inflict_shadow'] || 0;
        this.inflict_water = stats['inflict_water'] || 0;
        this.inflict_light = stats['inflict_light'] || 0;
        this.fire_resist = stats['fire_resist'] || 0;
        this.shadow_resist = stats['shadow_resist'] || 0;
        this.water_resist = stats['water_resist'] || 0;
        this.light_resist = stats['light_resist'] || 0;
        this.all_resist = stats['all_resist'] || 0;
    
        //Abnormal stats
        this.poison_level = stats['poison_level'] || 0;
        this.shock_level = stats['shock_level'] || 0;
        this.bleed_level = stats['bleed_level'] || 0;
        this.curse_level = stats['curse_level'] || 0;
        this.petrify_level = stats['petrify_level'] || 0;
        this.burning_level = stats['burning_level'] || 0;
        this.stun_level = stats['stun_level'] || 0;
        this.slow_level = stats['slow_level'] || 0;
        this.poison_damage = stats['poison_damage'] || 0;
        this.shock_damage = stats['shock_damage'] || 0;
        this.bleed_damage = stats['bleed_damage'] || 0;
        this.burning_damage = stats['burning_damage'] || 0;
        this.poison_tolerance = stats['poison_tolerance'] || 0;
        this.shock_tolerance = stats['shock_tolerance'] || 0;
        this.bleed_tolerance = stats['bleed_tolerance'] || 0;
        this.curse_tolerance = stats['curse_tolerance'] || 0;
        this.petrify_tolerance = stats['petrify_tolerance'] || 0;
        this.burning_tolerance = stats['burning_tolerance'] || 0;
        this.stun_tolerance = stats['stun_tolerance'] || 0;
        this.slow_tolerance = stats['slow_tolerance'] || 0;
    
        //Damage modifiers
        this.skill_attack = stats['skill_attack'] || 0;
        this.all_attack = stats['all_attack'] || 0;
        this.elenore = stats['elenore'] || 0;
        this.smash = stats['smash'] || 0;
        this.additional_critical_damage = stats['additional_critical_damage'] || 0;
        this.critical_damage_smash = stats['critical_damage_smash'] || 0;
        this.primary_stat_mod = stats['primary_stat_mod'] || 0;
        this.physical_attack_mod = stats['physical_attack_mod'] || 0;
        this.magical_attack_mod = stats['magical_attack_mod'] || 0;
        this.independent_attack_mod = stats['independent_attack_mod'] || 0;
    }

}