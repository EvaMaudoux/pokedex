export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
    generation?: string;  // Optionnel
    description?: string;  // Optionnel
  }
  