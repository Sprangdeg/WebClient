import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WelcomePageComponent } from './welcome-page/'
import { TopMenuComponent } from './top-menu/'
import { StryktipsetComponent } from './stryktipset'

import { routing, appRoutingProviders }  from './app.routing';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentOrganizerComponent } from './student-organizer/student-organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    StryktipsetComponent,
    PagenotfoundComponent,
    StudentOrganizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
