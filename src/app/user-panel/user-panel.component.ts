import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  constructor(private appComponent: AppComponent ) { }

  ngOnInit() {
    this.appComponent.showNavBar = false;
  }
   
  
}
