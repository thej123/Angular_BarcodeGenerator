import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails: Array<{ email: (string), importance: (boolean), subject: (string), content: (string) }> = [
    {
      email: 'bill@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },
    {
      email: 'ada@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },
    {
      email: 'john@gates.com',
      importance: false,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },
    {
      email: 'gabe@gates.com',
      importance: false,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    }
  ]
}
