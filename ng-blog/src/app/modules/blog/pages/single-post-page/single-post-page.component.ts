import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../core/post-service/post.service';
import { IPost } from '../../core/types/post.types';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss']
})
export class SinglePostPageComponent implements OnInit {


  postItem : IPost = null;
  constructor(private postService:PostService,private activatedRoute:ActivatedRoute ) { 


  }

  ngOnInit() {

    
    // this.activatedRoute.params.subscribe(param =>{
      const postId = this.activatedRoute.snapshot.params.postId;
      this.fetchPost(postId)
    // })
    //  console.log(`postId ==>`, this.postId);
     

    
  }


  async fetchPost(postId:string){

    try {
      const post  = await this.postService.getPostById(postId).toPromise()
      console.log(`post ==>`,post);
      this.postItem =  post;


      
    } catch (error) {
      console.log(`[ERROR]fetchPost ==>`, error);
      
      alert("Failed to get post")
    }

  }
}
