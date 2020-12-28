import React, {useEffect, useReducer} from 'react';


const initialState = {count: 1, user:[]};
    const reducer = (state,action)=>{
        switch (action.type){
            case 'COUNT_INC':
                return {count: state.count + 1};
            case 'COUNT_RESET':
                return {count: 1};
            case 'SET_USER':
                return {...state, user:action.payload}
            default :
                console.error('ERROR')
                return state;
        }
    }

export default function FuncComp() {
    const [state,dispatch]=useReducer(reducer, initialState)

    const handleUser = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${state.count}`)
            .then(value => value.json()
            .then(value => dispatch({type:'SET_USER', payload:value})))
    }

    useEffect(()=>{
        handleUser()
    },[state.count])

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:'COUNT_INC'})}>INC+</button>
            <button onClick={()=>dispatch({type:'COUNT_RESET'})}>RESET</button>
            {
                state.user && <h2>{state.user.id} {state.user.name}</h2>
            }
        </div>
    );
}