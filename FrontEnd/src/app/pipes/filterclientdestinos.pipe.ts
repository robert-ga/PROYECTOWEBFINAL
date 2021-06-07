import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterclientdestinos'
})
export class FilterclientdestinosPipe implements PipeTransform {

  transform(value: any, arg: any):any{
    if(arg ==='' || arg.length<3)return value;
    const resultadoPots=[];
    for(const post of value){
      if(post.origen.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultadoPots.push(post);
      };
    };
    return resultadoPots;
  }

}
