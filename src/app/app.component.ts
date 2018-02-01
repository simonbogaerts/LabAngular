import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[];

  ngOnInit() {
    this.contactList = [
      new Contact (
        'John Doe',
        'john.doe@gmail.be',
        '+32 (0) 000 00 00 00',
        false,
        'assets/avatar.png'
      ),
      new Contact (
        'Jane Doe',
        'jane.doe@gmail.be',
        '+32 (0) 000 00 00 00',
        true,
        'assets/avatar.png'
      )
    ];
  }

  handleData(event: Contact){
    console.log('Received data!', event);
  }
}
