import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StryktipsetComponent } from './stryktipset'
import { WelcomePageComponent } from './welcome-page'
import { GuessTheFontComponent } from './guess-the-font/guess-the-font.component'
import { StudentOrganizerComponent } from './student-organizer/student-organizer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'stryktipset', component: StryktipsetComponent },
  { path: 'welcomepage', component: WelcomePageComponent },
  { path: 'classroom-organizer', component: StudentOrganizerComponent },  
  { path: 'guess-the-font', component: GuessTheFontComponent }, 
  { path: '', component: WelcomePageComponent },
  { path: '**', component: PagenotfoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
