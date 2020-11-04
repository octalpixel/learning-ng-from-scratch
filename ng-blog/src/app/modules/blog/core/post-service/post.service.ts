import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from  "../../../../../environments/environment"
import { IPost } from '../types/post.types';

@Injectable({
  providedIn: 'any'
})
export class PostService {

  POST_API_URL=`${environment.API_BASE_URL}/posts`
  constructor(private httpClient: HttpClient) { }


  getAllPost() {
    return this.httpClient.get<IPost[]>(this.POST_API_URL)
  }


  getPostById(postId:string){
    return this.httpClient.get<IPost>(`${this.POST_API_URL}/${postId}`)
  }

}
