import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  /*template: `<h1>Hello from inline template</h1>
  <p>This template is written inline</p>
  `,*/
  styleUrls: ['./app.component.scss'],
  //styles: ['h1 {color: red;}'] //can add styles through here as well.
})
export class AppComponent {
  title = 'Hotel_Inventory_App';

  role = "User";
}
