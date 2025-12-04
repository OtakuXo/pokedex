import type { Other, Type, Versions } from "./pokemon";

export interface Forms {
   name: string;
   url: string;
}

export interface FormsDetails {
    form_name:      string;
    form_names:     any[];
    form_order:     number;
    id:             number;
    is_battle_only: boolean;
    is_default:     boolean;
    is_mega:        boolean;
    name:           string;
    names:          any[];
    order:          number;
    sprites:        Sprites;
    types:          Type[];
}

export interface Sprites {
   back_default: string;
   back_female: null;
   back_shiny: string;
   back_shiny_female: null;
   front_default: string;
   front_female: null;
   front_shiny: string;
   front_shiny_female: null;
   other?: Other;
   versions?: Versions;
   animated?: Sprites;
}
