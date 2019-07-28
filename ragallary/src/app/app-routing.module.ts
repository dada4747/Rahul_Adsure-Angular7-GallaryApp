import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';

import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DocsComponent } from './docs/docs.component';
import { AdminComponent } from './admin/admin.component';
import { ImageslistComponent } from './imageslist/imageslist.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path:'',redirectTo:'images',pathMatch:'full'},
  //{path:'topnav',component:TopnavComponent,children:[
  {path:'images',component:ImagesComponent},
  {path:'imageslist',component:ImageslistComponent},
    
  {path:'contact',component:ContactComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'docs',component:DocsComponent},
  {path:'admin',component:AdminComponent},
  //]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
