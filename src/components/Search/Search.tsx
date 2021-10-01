import React, {ChangeEvent} from 'react'
import {useDispatch} from "react-redux";
import {changeInputTC} from "../../redux/usersReducer";


export function Search() {
    const dispatch = useDispatch()
//альтернатива
    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputTC(e))
    }
    return (
        <div>
            <input type={'search'} placeholder='Search...' onChange={changeInput}/>
        </div>
    )
}