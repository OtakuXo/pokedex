import type { pokemon } from "./pokemon";

export interface baseApiResponse {
   count: number;
   next: string;
   previous: null;
   results: pokemon[];
}
