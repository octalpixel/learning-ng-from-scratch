import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { SeachBlogComponent } from './blog/seach-blog/seach-blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [{
  path: "login",
  component: LoginComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "create-blog",
  component: CreateBlogComponent,
  canActivate: [AuthGuardService]
},
{
  path: "blogs",
  component: SeachBlogComponent,

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
