import React, {ChangeEvent} from 'react'
import {useDispatch} from "react-redux";
import {changeInputTC} from "../../redux/usersReducer";


export function Search() {
    const dispatch = useDispatch()

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputTC(e))
    }
    return (
        <div>
            <input type="text" placeholder='Search' onChange={changeInput}/>
        </div>
    )
}