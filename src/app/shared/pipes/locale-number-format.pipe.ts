import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localeNumberFormat',
  standalone: true
})
export class LocaleNumberFormatPipe implements PipeTransform {
  transform(value: number, locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale).format(value);
  }
}
