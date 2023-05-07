import { Component, ElementRef, ViewChild  } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('image') image!:ElementRef

  constructor(private _ContactService:ContactService , private _Router:Router){ }

  backGround:any = 'url(https://img.freepik.com/free-icon/user_318-159711.jpg)';
  imageUrl:any = null


  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(null , Validators.required),
    lastName: new FormControl(null , Validators.required),
    tel: new FormControl(null ),
    email: new FormControl(null , [Validators.required , Validators.email]),
  })
  addContact(){
    if (this.contactForm.valid) {
      let addedContact = {
        ...this.contactForm.value,
        imageUrl:this.imageUrl
      }
      this._ContactService.contactData.data.push(addedContact)
      console.log(this._ContactService.contactData.data);
      this._Router.navigate(['/contactList'])
    }
  }
  ngAfterViewInit(): void {
    console.log(this.image.nativeElement);

  }

  getImage(event:any){
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = ()=> {
      this.backGround = `url(${reader.result})`;
      this.imageUrl = reader.result
    }
  }


}
