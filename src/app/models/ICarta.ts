import { IAttacks } from './IAttacks';
import { IWeaknesses } from './IWeaknesses';

export interface ICarta {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: Array<string>;
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    retreatCost: Array<string>;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Array<IAttacks>;
    weaknesses: Array<IWeaknesses>;
}
