import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';


const BASEAPIURL = 'https://webexpert1718.firebaseio.com/contacts.json';
const CONTACTAPIURL = 'https://webexpert1718.firebaseio.com/contacts/';

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  getContactList(onlyFavorites: boolean) {
    return this.http.get(BASEAPIURL)
      .map(res => res.json())
      .map(this.parseContactData)
      .map((contacts: Contact[]) => {
        return onlyFavorites ? this.filterContacts(contacts) : contacts;
      })
      .catch(this.onError);
  }

  parseContactData(rawContacts: any[]): Contact[] {
    return Object.keys(rawContacts).map(key => {
      let contact = rawContacts[key];
      return new Contact(
        contact.name,
        contact.email,
        contact.phone,
        contact.isFavorite,
        contact.avatar,
        key
      );
    });
  }
  filterContacts(contacts: Contact[]): Contact[] {
    return contacts.filter(contact => contact.isFavorite);
  }
  onError(res: Response): Observable<any> {
    let error = `Error ${res.status}: ${res.statusText}`;
    console.error(error);
    return Observable.throw(error);
  }
  addContact(contact: Contact): Observable<any> {
    return this.http
      .post(BASEAPIURL, contact)
      .catch(this.onError);
  }
  updateContact(id: string, data: any): Observable<any> {
    let url = `${CONTACTAPIURL}${id}.json`;
    return this.http.patch(url, data).catch(this.onError);
  }

  getContact(id: string) {
    let url = `${CONTACTAPIURL}${id}.json`;
    return this.http.get(url)
      .map(res => res.json())
      .map(data => new Contact(data.name, data.email,
        data.phone, data.isFavorite, data.avatar, id))
      .catch(this.onError);
  }

  deleteContact(id: string) {
    let url = `${CONTACTAPIURL}${id}.json`;
    return this.http.delete(url).catch(this.onError);
  }
}
