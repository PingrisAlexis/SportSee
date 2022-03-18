import axios from "axios";


export class Api {
    async getAverageSessionDuration() {
        const response = await axios.get(`http://localhost:3000/user/12/average-sessions`)

        const firstDaysLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

        return response.data.data.sessions.map((session) => {
            return {
                day: firstDaysLetter,
                sessionLength: session.sessionLength,
            }
        })
    }
    async getDailyActivities() {
        const response = await  axios.get(`http://localhost:3000/user/12/activity`)

        const dayNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09','10'];

        return response.data.data.sessions.map((activity) => {
            return {
                day: dayNumber,
                kilogram: activity.kilogram,
                calories: activity.calories,
            }
        });
    }
    async getUser() {
        const response = await  axios.get(`http://localhost:3000/user/18/`)

        return {
            id: response.data.data.id,
            userInfos: response.data.data.userInfos,
            keyData: response.data.data.keyData,
            todayScore: response.data.data.todayScore,
        }
    }
}  