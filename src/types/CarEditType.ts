export interface CarEditType {
    tier: string
    make: string
    model: string
    image: string
    year: number
    baseStats: BaseStats
    parts: Parts
}

export interface BaseStats {
    horsepower: number
    weight: number
    shiftspeed: number
    wheelspin: number
}
interface Parts {
    [key: string]: Part[]
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
    shiftspeed: number
    wheelspin: number
}