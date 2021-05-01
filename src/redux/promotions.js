import * as ActionTypes from './ActionTypes';

export const Promotions = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: [] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null};
        // adding state plus new stuff
        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        
        default:
            return state;
    }
};