import {Dispatch} from 'redux';
import {api, UsersType} from "../api/Api";
import {ChangeEvent} from "react";



type InitialStateType = {
    error: string | null
    users: Array<UsersType>
    inputValueSearch: string
}

const initialState: InitialStateType = {
    error: null,
    users: [],
    inputValueSearch:''
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/ERROR_DETECTED':
        case 'APP/SET_USERS':
            return ({
                ...state,
                ...action.payload
            });
        case 'APP/DELETE_USER':
            return ({
                ...state,
                users: [...state.users.filter(u => u.id !== action.payload.userId)]
            })
        case 'APP/SEARCHED-USERS':{

            return {...state, users: action.filteredUsers, inputValueSearch: action.inputValueSearch}

        }
        default:
            return state;
    }
}

type ActionsTypes = ReturnType<typeof errorDetectedAC>
    | ReturnType<typeof setUser>
    | ReturnType<typeof deleteUser>
    | ReturnType<typeof searchedUsersAC>


export const errorDetectedAC = (error: string | null) => ({type: 'APP/ERROR_DETECTED', payload: {error}} as const)
export const setUser = (users: Array<UsersType>) => ({type: 'APP/SET_USERS', payload: {users}} as const)
export const deleteUser = (userId: number) => ({type: 'APP/DELETE_USER', payload: {userId}} as const)
export const searchedUsersAC = (filteredUsers: Array<UsersType>, inputValueSearch: string) =>
    ({type: 'APP/SEARCHED-USERS', filteredUsers,  inputValueSearch } as const)


export const getUsersTC = () => async (dispatch: Dispatch) => {

    try {
        const response  = await api.getUsers();
        dispatch(setUser(response.data));
    } catch (error) {
        // @ts-ignore
        dispatch(errorDetectedAC(error))
    }
}

export const changeInputTC = (e: ChangeEvent<HTMLInputElement>)=> async (dispatch: Dispatch) =>{
    try {
        const response  = await api.getUsers();
        const users = response.data
        const inputValueSearch = e.target.value.toLowerCase().trim()
        const filteredUsers = users.filter((user: UsersType)=>{
            return user.name.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
            || user.username.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
            || user.email.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
        })
        dispatch(searchedUsersAC(filteredUsers, inputValueSearch))
        console.log(inputValueSearch)
    } catch (error) {
        // @ts-ignore
        dispatch(errorDetectedAC(error))
    }
}


