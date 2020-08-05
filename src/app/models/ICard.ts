import { IAttacks } from './IAttacks';
import { IWeaknesses } from './IWeaknesses';

export interface ICard {
    id: string;
    name: string;
    nationalPokedexNumber?: number;
    imageUrl: string;
    imageUrlHiRes?: string;
    types?: Array<string>;
    supertype: string;
    subtype: string;
    evolvesFrom?: string;
    hp?: string;
    retreatCost?: Array<string>;
    number?: string;
    artist?: string;
    rarity?: string;
    series?: string;
    set?: string;
    setCode?: string;
    attacks?: Array<IAttacks>;
    weaknesses?: Array<IWeaknesses>;
    ability?: string;
    convertedRetreatCost?: string;
    text?: string;
    attackDamage?: string;
    resistances?: Array<string>;
    ancientTrait?: string;
    abilityName?: string;
    abilityText?: string;
    abilityType?: string;
    ptcgoCode?: number;
    totalCards?: number;
    standardLegal?: string;
    expandedLegal?: boolean;
    page?: number;
    pageSize?: number;
    updatedSince?: string;
}
