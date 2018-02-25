import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { NavComponent } from './nav/nav.component';
import {ScrollToModule} from "ng2-scroll-to";
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './material/about/about.component';
import { TeamComponent } from './material/team/team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from "@angular/router";
import { DragScrollModule } from 'ngx-drag-scroll';

const appRoutes: Routes = [
  {path:'home', component:MaterialComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: MaterialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    NavComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    TeamComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule,
    RouterModule.forRoot(appRoutes),
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
