import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"


const HTTTP_CONFIG = {
    BASE_URL: "http://localhost:1337"
}


export class BaseHttpService<T> {

    resourseUrl: string
    BASE_URL = HTTTP_CONFIG.BASE_URL
    httpClient: HttpClient
    headers = new HttpHeaders()
    constructor() {

        // this.ht/tpClient = http
    }
    // getAll
    // getById
    // create



    setToken(token) {
        console.log(`token ---<`,token);
        
        if (token == null) {
            return
        }
        this.headers = this.headers.set("Authorization", `Bearer ${token}`)
    }

    setHttpClient(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    setResourceUrl(resourseName: string) {
        this.resourseUrl = `${this.BASE_URL}/${resourseName}`
    }

    getAll() {
        return this.httpClient.get<T[]>(this.resourseUrl, { headers: this.headers })
    }

    create(data: any) {
        return this.httpClient.post<T>(this.resourseUrl, data, { headers: this.headers })
    }

}
