import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works Again!';
  x: number = 7;
  y: number = 9;
  myStr: string = "Thej";
  user = {
    firstName: 'Darth',
    lastName: 'Vader'
  }
  myBoolean = true;
  myArr = [1,2,3,4,5];
  color = 'red';
  switch: boolean = true;
}
