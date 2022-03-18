export class Mock {
    async getAverageSessionDuration() {
       return [
            {
                day: "L",
                sessionLength: 30
            },
            {
                day: "M",
                sessionLength: 23
            },
            {
                day: "M",
                sessionLength: 45
            },
            {
                day: "J",
                sessionLength: 50
            },
            {
                day: "V",
                sessionLength: 0
            },
            {
                day: "S",
                sessionLength: 0
            },
            {
                day: "D",
                sessionLength: 60
            }
        ]
    }
    async getDailyActivities() {
         return [
             {
                 day: '01',
                 kilogram: 80,
                 calories: 240
             },
             {
                 day: '02',
                 kilogram: 80,
                 calories: 220
             },
             {
                 day: '03',
                 kilogram: 81,
                 calories: 280
             },
             {
                 day: '04',
                 kilogram: 81,
                 calories: 290
             },
             {
                 day: '05',
                 kilogram: 80,
                 calories: 160
             },
             {
                 day: '06',
                 kilogram: 78,
                 calories: 162
             },
             {
                 day: '07',
                 kilogram: 76,
                 calories: 390
             }
        ]
    }
    async getUser() {
        return  [
            {
                id: 12,
                userInfos: {
                    firstName: 'Karl',
                    lastName: 'Dovineau',
                    age: 31,
                },
                todayScore: 0.5,
                keyData: {
                    calorieCount: 1930,
                    proteinCount: 155,
                    carbohydrateCount: 290,
                    lipidCount: 50
                }
            }
        ]
    }
    async getPerformances() {
        return [
            {
                userId: 12,
                kind: {
                    1: 'cardio',
                    2: 'energy',
                    3: 'endurance',
                    4: 'strength',
                    5: 'speed',
                    6: 'intensity'
                },
                data: [
                    {
                        "A": 80,
                        "subject": "cardio"
                    },
                    {
                        "A": 120,
                        "subject": "energy"
                    },
                    {
                        "A": 140,
                        "subject": "endurance"
                    },
                    {
                        "A": 50,
                        "subject": "strenght"
                    },
                    {
                        "A": 200,
                        "subject": "speed"
                    },
                    {
                        "A": 90,
                        "subject": "intensity"
                    }
                ]
            }
        ]
    }
}