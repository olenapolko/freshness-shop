import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localeDate',
  standalone: true
})
export class LocaleDatePipe implements PipeTransform {
  transform(value: string | Date, locale: string = 'en-US'): string {
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
}
