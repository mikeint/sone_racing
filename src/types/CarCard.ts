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
    baseStats: BaseStats;
}
interface BaseStats {
    horsepower: number;
    weight: number;
    acceleration: number;
    wheelspin: number;
}