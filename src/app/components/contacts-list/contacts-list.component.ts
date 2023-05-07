import { Component, ElementRef, QueryList, ViewChildren , ViewChild , Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @ViewChildren('specLetter') specLette!:QueryList<any>;
  @ViewChild('letter') letter!:ElementRef;

  constructor(private _ContactService:ContactService , private _Router:Router , private render:Renderer2) { }

  contactList:any
  contactRecent:any
  contact:any[] = []
  chars:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  spec:any[] = []
  newArrway:any[] = []
  value:any = ''

  ngOnInit(): void {

    this.contactList = this._ContactService.contactData
    this.contactRecent = this._ContactService.contactRecent

    this.contactList.data.forEach((contact:any) => {
      this.contact.push(contact?.firstName!)
    });

    this.chars.forEach(char => this.contact.forEach(ele=>{
      if (ele?.charAt(0).toUpperCase() == char) {
        this.spec.push(char)
      }
    }))
    this.newArrway = [...new Set(this.spec)];
  }

  goToLetters(char:string){
    this.specLette.toArray().forEach((ele:ElementRef)=>{
        if (char == ele.nativeElement.innerHTML) {
        ele.nativeElement.scrollIntoView()
      }
    })
    this.render.removeClass(this.letter.nativeElement , 'd-none')
    this.letter.nativeElement.innerHTML = char
  }
  hideLetter(){
    console.log('cc');
    this.render.addClass(this.letter.nativeElement , 'd-none')
  }
  goToDetails(contact:any){
    console.log(contact);

    this._Router.navigate(['/contactDetails' , contact.email])
  }
}
