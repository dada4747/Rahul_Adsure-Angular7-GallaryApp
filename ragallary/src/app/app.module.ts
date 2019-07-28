import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes, ROUTES } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DocsComponent } from './docs/docs.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImageslistComponent } from './imageslist/imageslist.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from'@angular/fire/database';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ContactComponent,
    BlogsComponent,
    DocsComponent,
    AdminComponent,
    ImagesComponent,
    ImageslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
