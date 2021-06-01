import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from './counterType'

const initialState = {
    count: 0
}

const counterReducer = ( state = initialState, action ) => {
    switch(action.type){
        case INCREASE_COUNT: return{
            ...state,
            count: state.count + 1
        }
        case DECREASE_COUNT: return{
            ...state,
            count: state.count - 1
        }
        case RESET_COUNT: return{
            count: state.count = 0 
        }
        default: return state
    }
}

export default counterReducer;