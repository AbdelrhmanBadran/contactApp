import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {


  constructor(private _ContactService:ContactService , private _ActivatedRoute:ActivatedRoute){ }

  contactEmail:string = ''
  specficContact:any
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:params=>{
        this.contactEmail = params.get('contact')!
      }
    })

    this.specficContact = this._ContactService.contactData.data.filter((ele:any)=> ele.email === this.contactEmail)
    console.log(this.specficContact);
    console.log(this.specficContact.imageUrl);






  }

}
