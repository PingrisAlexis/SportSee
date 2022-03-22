import axios from 'axios';

/**
 *
 * @param {String} response
 * @param {Number} userId
 * @description APi that's get and transform data to front-end part.
 * @returns Object
 */

export class Api {
    constructor() {
        this.baseURL = 'http://localhost:3000';
    }
    /**
     * @name  getAverageSessionDuration
     * @param {Integer} userId
     * @returns {Object} Return anobject with the user data (day, sessionLenght)
     */
    async getAverageSessionDuration(userId) {

       return await axios.get(this.baseURL + `/user/`+ userId +`/average-sessions`)
            .then( response => response.data.data.sessions.map((session, index) => {
                const firstDaysLetter = ["L", "M", "M", "J", "V", "S", "D"];

                return {
                    day: firstDaysLetter[index],
                    sessionLength: session.sessionLength
                }
            }))
            .catch( err => console.log(err));
    }
    /**
     * @name  getDailyActivities
     * @param {Integer} userId
     * @returns {Object} Return an object with the user data (day, kilogram, calories)
     */
    async getDailyActivities(userId) {

        return await  axios.get(this.baseURL + `/user/`+ userId +`/activity`)
            .then( response => response.data.data.sessions.map((activity, index) => {
                const dayNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09","10"];

                return {
                    day: dayNumber[index],
                    kilogram: activity.kilogram,
                    calories: activity.calories
                }
            }))
            .catch( err => console.log(err));
    }
    /**
     * @name  getPerformances
     * @param {Integer} userId
     * @returns {Object} Return an object with the user data (subject, A)
     */
    async getPerformances(userId) {

        return await  axios.get(this.baseURL + `/user/`+ userId +`/performance`)
            .then( response => response.data.data.data.map((performance, index) => {
                const kindName = ["cardio", "energie", "endurance", "force", "vitesse", "intensité"]

                return {
                    subject: kindName[index],
                    A: performance.value
                }
            }))
            .catch( err => console.log(err));
    }
    /**
     * @name  getUser
     * @param {Integer} userId
     * @returns {Object} Return an object with the user data (id, userInfos, keyData, todayScore or score)
     */
    async getUser(userId) {

        return await  axios.get(this.baseURL + `/user/`+ userId)
            .then( response => {
              return   {
                  id: response.data.data.id,
                  userInfos: response.data.data.userInfos,
                  keyData: response.data.data.keyData,
                  todayScore: response.data.data.todayScore || response.data.data.score
              }
            })
            .catch( err => console.log(err));
    }
}  