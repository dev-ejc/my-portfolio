import React, { useReducer } from 'react'
import StateContext from './stateContext'
import stateReducer from './stateReducer'
import {SET_PAGE} from './types'
const State = (props) => {
    const initialState = {
        page: 0
    }

    const [state,dispatch] = useReducer(stateReducer,initialState)

    const setState = page => {
        dispatch({
            type: SET_PAGE,
            payload: page
        })
    }

    return (
        <StateContext.Provider value={{page:state.page,
        setState}}>
            {props.children}
        </StateContext.Provider>
    )
}

export default State
