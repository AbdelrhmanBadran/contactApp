import { Component } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {


  constructor(private _ContactService:ContactService){ }

  ngOnInit(): void {
    console.log(this._ContactService.contactData.data);
    console.log(this._ContactService.contactRecent.data);
    
  }
}
