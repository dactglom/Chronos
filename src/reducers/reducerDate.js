const initialState = {
    day: 0,
    month: 0,
    year: 0,
    leap: 0
};

export default function dateReducer(state = initialState, action) {
    switch (action.type) {
        case('SET_DAY'):
            console.log('REDUX' + action.day);
            return {
                ...state,
                day: action.day
            };
        case('SET_MONTH'):
            return {
                ...state,
                month: action.month
            };
        case('SET_YEAR'):
            return {
                ...state,
                year: action.year
            };
        case('IDENTIFY_LEAP'):
            return {
                ...state,
                leap: action.leap
            };
        default:
            return state;
    }
}