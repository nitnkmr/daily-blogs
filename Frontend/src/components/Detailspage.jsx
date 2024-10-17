import React from 'react'
import { useLocation } from 'react-router-dom';

const Detailspage = (props) => {
    const location = useLocation();
    const state = location.state.data
    console.log(state)
    
    return (
        <>
            <div className="container p-10 h-screen m-auto">
                <div className="text-center font-bold p-1 sm:p-6  text-2xl">{state.title}</div>
                <img className='m-auto p-4' src={state.image} alt="efreg" />
                <div className="text-center text-lg p-1 sm:p-6 my-4 border-b-2">{state.description}</div>
                <div className="text-center text-sm">{state.context}</div>
            </div>
        </>
    )
}

export default Detailspage