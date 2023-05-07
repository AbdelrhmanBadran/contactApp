import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'contactList' , pathMatch:'full'},
  {path:'contactList' , component:ContactsListComponent },
  {path:'contactForm' , component:ContactFormComponent },
  {path:'contactDetails/:contact' , component:ContactDetailsComponent },
  {path:'**' , component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
