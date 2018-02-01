import {Routes} from '@angular/router';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';

export const appRoutes: Routes = [
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'list', component: ContactListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
