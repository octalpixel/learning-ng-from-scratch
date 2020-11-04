import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component';

const routes: Routes = [

  {
    path:"",
    component: BlogLayoutComponent,
    children:[
        {
            path:"",
            component:HomePageComponent
        },
        {
            path:"post/:postId",
            component:SinglePostPageComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
