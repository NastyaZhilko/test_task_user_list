import React, {ChangeEvent} from 'react'
import {useDispatch} from "react-redux";
import {changeInputTC} from "../../redux/usersReducer";
import style from "./Search.module.css"
type PropsType ={
    searchText: string
}
export function Search(props: PropsType) {
    const dispatch = useDispatch()

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputTC(e))

    }
    return (
        <div className={style.form}>
            <input type="text" placeholder='Search...' value={props.searchText} onChange={changeInput}/>
        </div>
    )
}