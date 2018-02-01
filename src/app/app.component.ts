import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myContact: Contact;

  ngOnInit() {
    this.myContact = new Contact (
      'John Doe',
      'john.doe@gmail.be',
      '+32 (0) 000 00 00 00',
      true,
      'assets/avatar.png'
    );
    console.log(this.myContact);
  }

  handleData(event: Contact){
    console.log('Received data!', event);
  }
}
