import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  contactList: Contact[] = [
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
  constructor() { }

  getContactList(){
    return this.contactList;
  }

  addContact(contact: Contact) {
    this.contactList.push(contact);
  }

  toggleFavorite(index: number): void {
    this.contactList[index].isFavorite = !this.contactList[index].isFavorite;
  }
}
