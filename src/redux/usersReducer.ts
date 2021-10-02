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
    inputValueSearch: ''
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/ERROR_DETECTED':
            return {
                ...state,
                error: action.error
            }
        case 'APP/SET_USERS':
            return {
                ...state,
                users: action.users
            };
        case 'APP/DELETE_USER':
            return {
                ...state,
                users: [...state.users.filter(u => u.id !== action.userId)]
            }
        case 'APP/SEARCHED-USERS': {
            return {...state, users: action.filteredUsers, inputValueSearch: action.inputValueSearch}

        }

        case 'APP/SET_INPUT_VALUE': {
            return {...state, inputValueSearch: action.inputValue}
        }
        default:
            return state;
    }
}

type ActionsTypes = ReturnType<typeof errorDetectedAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof deleteUserAC>
    | ReturnType<typeof searchedUsersAC>
    | ReturnType<typeof setInputValue>

//action creators
export const errorDetectedAC = (error: string | null) => ({type: 'APP/ERROR_DETECTED', error} as const)
export const setUserAC = (users: Array<UsersType>) => ({type: 'APP/SET_USERS',  users} as const)
export const deleteUserAC = (userId: number) => ({type: 'APP/DELETE_USER', userId} as const)
export const searchedUsersAC = (filteredUsers: Array<UsersType>, inputValueSearch: string) =>
    ({type: 'APP/SEARCHED-USERS', filteredUsers, inputValueSearch} as const)
export const setInputValue = (inputValue:string) => ({type: 'APP/SET_INPUT_VALUE', inputValue} as const)


//thunk creators
export const getUsersTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await api.getUsers();
        dispatch(setUserAC(response.data));
    } catch (error) {
        dispatch(errorDetectedAC('Error'))
    }
}

export const changeInputTC = (e: ChangeEvent<HTMLInputElement>) => async (dispatch: Dispatch) => {
    dispatch(setInputValue(e.currentTarget.value))
    try {
        const response = await api.getUsers();
        const users = response.data
        const inputValueSearch = e.target.value.toLowerCase().trim()
        const filteredUsers = users.filter((user: UsersType) => {
            return user.name.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
                || user.username.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
                || user.email.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) !== -1
        })
        dispatch(searchedUsersAC(filteredUsers, inputValueSearch))
    } catch (error) {
        dispatch(errorDetectedAC('Error'))
    }
}


