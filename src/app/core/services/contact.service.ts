import { Injectable } from '@angular/core';
import contactData from '../../../assets/contacts.json';
import contactRecent from '../../../assets/recent-contact.json';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactData:any = contactData;
  contactRecent:any = contactRecent;

  constructor() {


  }


}

