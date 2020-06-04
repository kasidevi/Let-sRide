import { observable, action } from 'mobx';
import {
    API_INITIAL,
    API_FAILED,
    API_SUCCESS,
    API_FETCHING
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { setAccessToken } from '../../../utils/StorageUtils';

class ShareTravelInfoStore {
    @observable ShareTravelInfoAPIStatus
    @observable ShareTravelInfoStoreAPIError
    @observable shareTravelInfoStoreAPIService
    shareTravelInfoService
    constructor(shareTravelInfoService) {
        this.shareTravelInfoService = shareTravelInfoService;
        this.init();
    }

    @action.bound
    userRequest() {
        const requestPromise = this.shareTravelInfoService.requestAPI();
        return bindPromiseWithOnSuccess(requestPromise)
            .to(this.setShareTravelInfoAPIStatus, this.setShareTravelInfoAPIResponse)
            .catch(this.setShareTravelInfoAPIError);
    }

    @action.bound
    setShareTravelInfoAPIResponse(response) {
        setAccessToken(response.access_token);
    }

    @action.bound
    setShareTravelInfoAPIError(error) {
        this.getShareTravelInfoAPIError = error;
    }

    @action.bound
    setShareTravelInfoAPIStatus(apiStatus) {
        this.getShareTravelInfoAPIStatus = apiStatus;
    }

    @action
    init() {
        this.getShareTravelInfoAPIStatus = API_INITIAL;
        this.getShareTravelInfoAPIError = null;
    }
}

export { ShareTravelInfoStore };
