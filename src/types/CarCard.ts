export interface CarCard {
    carId: string;
    make: string;
    model: string;
    year: number;
    image: string;
    tier: string;
    value: number;
    selected: boolean;
    level: number;
    experience: number;
    baseStats: BaseStats;
    parts:Parts
}
interface Parts {
    [key: string]: Part[];
}
export interface Part {
    id: number
    rollRate: string
    name: string
    owned: boolean
    cost: number
    diceAttributes?: DiceAttribute[]
    image: string
}

export interface DiceAttribute {
    id: number
    name: string
    owned: boolean
    cost: number
    selected: boolean
    horsepower: number
    weight: number
    acceleration: number
    wheelspin: number
}

interface BaseStats {
    horsepower: number;
    weight: number;
    acceleration: number;
    wheelspin: number;
}