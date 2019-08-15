import React, { useContext } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import StateContext from '../../context/stateContext'
const Main = () => {
    const stateContext = useContext(StateContext)
    const { page } = stateContext
    return (
        (page === 0 ? (<Home />) :  page === 1 ?
        (<About />)  : 
                            (<Project />))
    )

    
}

export default Main
