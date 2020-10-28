import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { NavBarComponent } from './layouts/components/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HeroImageComponent } from './layouts/components/hero-image/hero-image.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPreviewComponent } from './pages/home-page/components/post-preview/post-preview.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    NavBarComponent,
    FooterComponent,
    HeroImageComponent,
    BlogLayoutComponent,
    HomePageComponent,
    SinglePostPageComponent,
    PostPreviewComponent
  ]
})
export class BlogModule { }
