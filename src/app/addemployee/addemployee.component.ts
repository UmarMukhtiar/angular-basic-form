import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent {
  submit(login: any) {
    console.log('Form Submitted!', login);
  }
}
