import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post-service/post.service';
import { IPost } from '../../core/types/post.types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  postList: IPost[] = []
  isPostLoaded = false
  constructor(private postService: PostService) {

  }

  ngOnInit() {

    this.getAllPosts()

  }

  async getAllPosts() {
    try {
      const posts = await this.postService.getAllPost().toPromise()
      console.log(`posts ==>`,posts)
      this.postList = posts;
      this.isPostLoaded = true;


    } catch (error) {
      console.log(`[ERROR] getAllPosts => ${error.message}`, error);

    }
  }



}
