const cars = 
[
    {
        carId: "209caef6-e7fe-4883-8ea8-e0bb38a57511",
        make: "Honda",
        model: "Civic",
        year: "1991",
        tier: "T1",
        value: 10000,
        gears: 5,
        image: "hondaCivic.png",
        baseStats:{
            horsepower: 96,
            weight: 2158,
            shiftspeed: 5,
            wheelspin: 5
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
    {
        carId: "3b2797b1-c36d-4ade-8525-2c4a6257990d",
        make: "Ferrari",
        model: "F40",
        year: "1986",
        tier: "T3",
        value: 20000,
        gears: 6,
        image: "ferrariF40.png",
        baseStats:{
            horsepower: 650,
            weight: 3020,
            shiftspeed: 3.25,
            wheelspin: 6
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
    {
        carId: "e3425849-37df-490b-b202-e102a2e6e343",
        make: "Fiat",
        model: "131",
        year: "1970",
        tier: "T2",
        value: 20000,
        gears: 5,
        image: "fiat131.png",
        baseStats:{
            horsepower: 350,
            weight: 1020,
            shiftspeed: 4,
            wheelspin: 6
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
    {
        carId: "88834e9f-d513-4b30-93f1-f86f57144f84",
        make: "Nissan",
        model: "Pathfinder",
        year: "2001",
        tier: "T1",
        value: 5000,
        gears: 4,
        image: "nissanPathfinder.png",
        baseStats:{
            horsepower: 250,
            weight: 4020,
            shiftspeed: 5,
            wheelspin: 2
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
    {
        carId: "54752a78-0b0a-4ce5-8c42-ded852ec75b4",
        make: "Porsche",
        model: "928",
        year: "1876",
        tier: "T2",
        value: 15000,
        gears: 5,
        image: "porsche928.png",
        baseStats:{
            horsepower: 550,
            weight: 2320,
            shiftspeed: 2.5,
            wheelspin: 5
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
    {
        carId: "804e223f-d28d-4b2f-bf8d-a011f564b55c",
        make: "Toyota",
        model: "Supra",
        year: "1998",
        tier: "T2",
        value: 25000,
        gears: 5,
        image: "toyotaSupra.png",
        baseStats:{
            horsepower: 588,
            weight: 2420,
            shiftspeed: 3.5,
            wheelspin: 5
        },
        parts: {
            engine: [
                {
                    id: 1,
                    name: "Engine Dice Face 1",
                    image: "1.png",
                    rollRate: 0.85,
                    owned: true,
                    cost: 1000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 8, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 20, weight: 100, shiftspeed: 0, wheelspin: 4, owned:true, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 10, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 2,
                    name: "Engine Dice Face 2",
                    image: "2.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 2000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 16, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 40, weight: 100, shiftspeed: 0, wheelspin: 4, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 20, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 3,
                    name: "Engine Dice Face 3",
                    image: "3.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 3000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 24, weight: 50, shiftspeed: 1, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 60, weight: 100, shiftspeed: 0, wheelspin: 5, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 30, weight: 50, shiftspeed: 2, wheelspin: 0, owned:false, selected:false },
                    ]
                },
                {
                    id: 4,
                    name: "Engine Dice Face 4",
                    image: "4.png",
                    rollRate: 0.85,
                    owned: false,
                    cost: 4000,
                    diceAttributes: [
                        { id: 1, name: "Diesel", cost: 1000, horsepower: 32, weight: 25, shiftspeed: 0, wheelspin: 1, owned:true, selected:true },
                        { id: 2, name: "Internal Combustion", cost: 2000, horsepower: 80, weight: 75, shiftspeed: 0, wheelspin: 6, owned:false, selected:false },
                        { id: 3, name: "Electric", cost: 3000, horsepower: 40, weight: 20, shiftspeed: 0, wheelspin: 0, owned:false, selected:false },
                    ]
                }
            ],
            turbo: [
                {
                    "id": 1,
                    "name": "Turbo Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,                    
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 52, weight: 0, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 65, weight: 75, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3300, horsepower: 65, weight: 20, shiftspeed: 0, wheelspin: 8, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Turbo Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 72, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 88, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 2000, horsepower: 80, weight: 20, shiftspeed: 0, wheelspin: 9, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Turbo Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Boost", cost: 1000, horsepower: 82, weight: 25, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Turbo Stage 3", cost: 2000, horsepower: 103, weight: 75, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Turbo Max", cost: 3000, horsepower: 130, weight: 20, shiftspeed: 0, wheelspin: 15, owned: false, selected:false },
                    ]
                },
            ],
            intake: [
                {
                    "id": 1,
                    "name": "Intake Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 20, weight: 20, shiftspeed: 0, wheelspin: 0, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 10, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 15, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Intake Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Cold Air", cost: 1000, horsepower: 43, weight: 20, shiftspeed: 0, wheelspin: 1, owned: true, selected:true },
                        { id: 2, name: "Ram Air", cost: 2000, horsepower: 20, weight: 0, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                        { id: 3, name: "Short Ram", cost: 3000, horsepower: 30, weight: 15, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            body: [
                {
                    "id": 1,
                    "name": "Body Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 40, weight: 15, shiftspeed: 0, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 25, weight: 25, shiftspeed: 0, wheelspin: 0, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Body Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Light Weight", cost: 1000, horsepower: 100, weight: 0, shiftspeed: 2, wheelspin: 2, owned: true, selected:true },
                        { id: 2, name: "Medium Weight", cost: 2000, horsepower: 20, weight: 15, shiftspeed: 1, wheelspin: 1, owned: false, selected:false },
                        { id: 3, name: "Heavy Weight", cost: 3000, horsepower: 30, weight: 25, shiftspeed: 1, wheelspin: 0, owned: false, selected:false },
                    ]
                },
            ],
            tires: [
                {
                    "id": 1,
                    "name": "Tires Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 50, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 100, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 76, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Tires Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Sticky", cost: 1000, horsepower: 75, weight: 0, shiftspeed: 0, wheelspin: 4, owned: true, selected:true },
                        { id: 2, name: "Drag", cost: 2000, horsepower: 125, weight: 0, shiftspeed: 0, wheelspin: 6, owned: false, selected:false },
                        { id: 3, name: "Competition", cost: 3000, horsepower: 96, weight: 0, shiftspeed: 0, wheelspin: 5, owned: false, selected:false },
                    ]
                },
            ],
            transmission: [
                {
                    "id": 1,
                    "name": "Transmission Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Transmission Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Transmission Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
                {
                    "id": 4,
                    "name": "Transmission Dice Face 4",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 5,
                    "name": "Transmission Dice Face 5",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Tranny Style 1", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Tranny Style 2", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Tranny Style 3", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
            nitrous: [
                {
                    "id": 1,
                    "name": "Nitrous Dice Face 1",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 22, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 35, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 80, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 2,
                    "name": "Nitrous Dice Face 2",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 53, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 65, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 110, weight: 0, shiftspeed: 0, wheelspin: 10, owned: false, selected:false },
                    ]
                },
                {
                    "id": 3,
                    "name": "Nitrous Dice Face 3",
                    "image": "",
                    "rollRate": 0.85,
                    owned: true,
                    cost: 0,
                    diceAttributes: [
                        { id: 1, name: "Basic", cost: 1000, horsepower: 83, weight: 0, shiftspeed: 0, wheelspin: 3, owned: true, selected:true },
                        { id: 2, name: "Wet", cost: 2000, horsepower: 95, weight: 0, shiftspeed: 0, wheelspin: 4, owned: false, selected:false },
                        { id: 3, name: "Dry", cost: 3000, horsepower: 150, weight: 0, shiftspeed: 0, wheelspin: 12, owned: false, selected:false },
                    ]
                },
            ],
        }
    },
]
export default cars;