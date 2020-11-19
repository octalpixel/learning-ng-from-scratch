import { Injectable } from '@angular/core'


const USER_CONFIG = {
    USER_LOCALSTORAGE_KEY: "auth_user",
    TOKEN_LOCALSTORAGE_KEY: "user_token"
}


@Injectable({
    providedIn: "root"
})
export class AuthenticationService {

    constructor() {

    }

    addUserToStore(user) {
        localStorage.setItem(USER_CONFIG.USER_LOCALSTORAGE_KEY, JSON.stringify(user))
    }

    addTokenToStore(token) {
        localStorage.setItem(USER_CONFIG.TOKEN_LOCALSTORAGE_KEY, JSON.stringify(token))
    }

    getUser() {
        const user = localStorage.getItem(USER_CONFIG.USER_LOCALSTORAGE_KEY)
        return user
    }

    getToken() {
        const token = localStorage.getItem(USER_CONFIG.TOKEN_LOCALSTORAGE_KEY)
        return token
    }

    isLoggedIn() {
        const user = this.getUser()
        return user ? true : false
    }

}