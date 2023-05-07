import { Component, ElementRef, QueryList, ViewChildren , ViewChild , Renderer2 } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('image') image!:ElementRef

  constructor(private _ContactService:ContactService){ }

  backGround:any = 'url(https://img.freepik.com/free-icon/user_318-159711.jpg)';
  
  ngOnInit(): void {
    console.log(this._ContactService.contactData.data);
    console.log(this._ContactService.contactRecent.data);

  }

  ngAfterViewInit(): void {
    console.log(this.image.nativeElement);

  }

  getImage(event:any){
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = ()=> {
      this.backGround = `url(${reader.result})`
    }
    
  }
}
