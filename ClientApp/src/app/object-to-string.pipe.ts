import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToString'
})
export class ObjectToStringPipe implements PipeTransform {

  transform(obj:any): string {
    return JSON.stringify(obj);
  }

}
