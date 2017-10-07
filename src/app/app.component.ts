import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  devices = [
    {
      name: 'Mac Book Pro',
      updated: new Date('1/1/16'),
    },
    {
      name: 'iPhone X',
      updated: new Date('1/17/16'),
    },
    {
      name: 'iPad Pro',
      updated: new Date('1/28/16'),
    }
  ];
}
