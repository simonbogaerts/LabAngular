import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.be';
    this.phone = '+32 (0) 000 00 00 00';
  }
}
