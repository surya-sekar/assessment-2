import { INCREASE_COUNT, DECREASE_COUNT } from './counterType'

export const increaseCounter = () => {
    return{
        type: 'INCREASE_COUNT'
    }
}

export const decreaseCounter = () => {
    return{
        type: 'DECREASE_COUNT'
    }
}

export const resetCounter = () => {
    return{
        type: 'RESET_COUNT'
    }
}