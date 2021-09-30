import {Dispatch} from 'redux';
import {api, UsersType} from "../api/Api";



type InitialStateType = {
    error: string | null
    users: Array<UsersType>
}

const initialState: InitialStateType = {
    error: null,
    users: []
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
        default:
            return state;
    }
}

type ActionsTypes = ReturnType<typeof errorDetectedAC>
    | ReturnType<typeof setUser>
    | ReturnType<typeof deleteUser>



export const errorDetectedAC = (error: string | null) => ({type: 'APP/ERROR_DETECTED', payload: {error}} as const)
export const setUser = (users: Array<UsersType>) => ({type: 'APP/SET_USERS', payload: {users}} as const)
export const deleteUser = (userId: number) => ({type: 'APP/DELETE_USER', payload: {userId}} as const)



export const getUsersTC = () => async (dispatch: Dispatch) => {

    try {
        const response  = await api.getUsers();
        dispatch(setUser(response.data));
    } catch (error) {
        // @ts-ignore
        dispatch(errorDetectedAC(error))
    }
}

