import {Api} from './api';
import {Mock} from './mock';

class Service {
    constructor(source) {
        this.source = source
    }
    async getUser(userId) {

        return this.source.getUser(userId)
    }
    async getPerformances(userId) {

        return this.source.getPerformances(userId)
    }
    async getDailyActivities(userId) {

        return this.source.getDailyActivities(userId)
    }
    async getAverageSessionDuration(userId) {

        return this.source.getAverageSessionDuration(userId)
    }
}

export const service = new Service(new Api())
