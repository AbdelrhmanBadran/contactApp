import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: any[], char: string): any[] {
    return contacts.filter(contact => contact.firstName?.startsWith(char.toUpperCase()) || contact.firstName?.startsWith( char.toLowerCase()));
  }

}
