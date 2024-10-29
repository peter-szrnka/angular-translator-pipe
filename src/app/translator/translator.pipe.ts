import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from './translator.service';

@Pipe({
  name: 'translate'
})
export class TranslatorPipe implements PipeTransform {

  constructor(private readonly service: TranslatorService) { }

  transform(value: string): any {
    return this.service.translate(value);
  }
}