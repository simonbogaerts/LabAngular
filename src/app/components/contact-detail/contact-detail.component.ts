import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { EditorState } from '../../enums/editor-state.enum';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id: string;
  contact: Contact;
  editorState: any = EditorState;
  state: EditorState;
  constructor(private router: Router, private route: ActivatedRoute, private service: ContactService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getContact(this.id);
  }

  getContact(id: string): void {
    this.service.getContact(id).subscribe(data => this.contact =
      data);
  }

  deleteContact(id: string): void {
    this.service.deleteContact(id).subscribe(() => {
      this.state = EditorState.deleted;
      setTimeout(() => this.router.navigateByUrl(''), 3000);
    });
  }

  toggleEditing(editing: boolean): void {
    if (this.state === EditorState.null) {
      this.state = EditorState.editing;
    } else {
      this.state = EditorState.null;
    }
  }

  updateContact(contact: Contact): void {
    this.service.updateContact(this.id, contact).subscribe(() => {
      this.getContact(this.id);
      this.state = EditorState.updated;
      setTimeout(() => this.state = EditorState.null, 3000);
    });
  }
}
