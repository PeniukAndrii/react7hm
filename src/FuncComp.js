import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react'


export default function FuncComp() {
    const dispatch = useDispatch();
    const storeCounter = useSelector(({counter})=>counter)
    const storeUser = useSelector(({user})=>user)


    const handleUser = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${storeCounter}`)
            .then(value => value.json()
            .then(value => dispatch({type:'USER_SET', payload:value})))
    }



    useEffect(()=>{
        handleUser()
    },[storeCounter])

    return(
        <div>
            <h1>{storeCounter}</h1>
            <button onClick={()=>dispatch({type:'COUNT_INC'})}>+</button>
            <button onClick={()=>dispatch({type:'COUNT_DEC'})}>-</button>
            <button onClick={()=>dispatch({type:'COUNT_RESET'})}>RESET</button>
            <input type={'number'} name={'kek'} onChange={({target:{value}})=>dispatch({type:'SET_COUNT', payload:value})}/>
            {
                storeUser && <h2>{storeUser.id}{storeUser.name}</h2>
            }
        </div>
    );
}