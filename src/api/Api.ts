import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getUsers() {
        return instance.get<UsersResponseType>(`/users`)
    }
}

export type UsersType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {lat: string, lng: string}
    }
    phone: string
    website: string
    company:  {
        name: string
        catchPhrase: string
        bs: string
    }
}
export type UsersResponseType = Array<UsersType>
