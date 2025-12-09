export interface Evolution {
    baby_trigger_item: null;
    chain:             Chain;
    id:                number;
}

export interface Chain {
    evolution_details: EvolutionDetail[];
    evolves_to:        Chain[];
    is_baby:           boolean;
    species:           Species;
}

export interface EvolutionDetail {
    base_form_id:            null;
    gender:                  null;
    held_item:               Species;
    item:                    Species;
    known_move:              Species;
    known_move_type:         Species;
    location:                Species;
    min_affection:           number;
    min_beauty:              number;
    min_happiness:           number;
    min_level:               number;
    needs_overworld_rain:    boolean;
    party_species:           null;
    party_type:              null;
    region_id:               number;
    relative_physical_stats: number;
    time_of_day:             string;
    trade_species:           null;
    trigger:                 Species;
    turn_upside_down:        boolean;
}

export interface Species {
    name: string;
    url:  string;
}

}
