import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FilterPipe } from './pipe/filter.pipe';
import {MatButtonModule} from '@angular/material/button';
import { SearchPipe } from './pipe/search.pipe';
import { LengthPipe } from './pipe/length.pipe';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactFormComponent,
    NotFoundComponent,
    FilterPipe,
    SearchPipe,
    LengthPipe,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
