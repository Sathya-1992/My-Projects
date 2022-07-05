import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:any): unknown {
    return "X coordinates : "+value.x+" and Y Coordinates : "+value.y;
  }

}
