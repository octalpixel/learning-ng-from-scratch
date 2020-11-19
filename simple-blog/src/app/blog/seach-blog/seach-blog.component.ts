import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogService, IBlog } from 'src/app/services/blog-service/blog.service';

@Component({
  selector: 'app-seach-blog',
  templateUrl: './seach-blog.component.html',
  styleUrls: ['./seach-blog.component.scss']
})
export class SeachBlogComponent implements OnInit {


  blogs: IBlog[]

  searchForm: FormGroup

  constructor(private blogService: BlogService, private fb: FormBuilder) { }



  async getBlogs() {
    const blogs = await this.blogService.getAll().toPromise()
    console.log(blogs);
    this.blogs = blogs


  }
  async ngOnInit() {
    this.searchForm = this.fb.group({
      query: ""
    })

    await this.getBlogs()
  }

  search() {

    const { query } = this.searchForm.value

    const blog = this.blogs.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.content.toLowerCase().includes(query.toLowerCase()))
    console.log(blog);


  }


}
