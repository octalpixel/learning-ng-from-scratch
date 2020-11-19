import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../http-client/base-http.service';


export interface Role {
  _id: string;
  name: string;
  description: string;
  type: string;
  __v: number;
  id: string;
}

export interface User {
  confirmed: boolean;
  blocked: boolean;
  _id: string;
  username: string;
  email: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  role: Role;
  id: string;
}

export interface IUser {
  jwt: string;
  user: User;
}



@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService<IUser>{

  constructor(private _httpClient: HttpClient) {
    super()
    this.setHttpClient(_httpClient)
  }

  register(userData) {
    this.setResourceUrl("auth/local/register")
    return this.create(userData)
  }

  login(userData) {
    this.setResourceUrl("auth/local/")
    return this.create(userData)
  }


}
