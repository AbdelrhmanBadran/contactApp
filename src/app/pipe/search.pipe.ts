import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: any[], value:string): any[] {
    return contacts.filter(contact => contact.firstName?.toUpperCase().includes(value.toUpperCase()) || contact.lastName?.toUpperCase().includes( value.toUpperCase()) );
  }

}
