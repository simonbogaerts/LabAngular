import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  toggleFavorite(id: string, isFavorite: boolean): void {
    this.service.updateContact(id, {isFavorite: isFavorite}).subscribe(() => this.onUpdate.emit);
  }
}
