import { Component } from '@angular/core';
import { WelcomePageComponent } from './welcome-page/'
import { TopMenuComponent } from './top-menu/'

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title="Welcome!";
}
