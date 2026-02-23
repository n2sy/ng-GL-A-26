import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], selStatus: string): any[] {
    if(!selStatus.length)
        return value;
    else {
        return value.filter(serv =>  serv["status"] == selStatus
    
)
        // let newTab=[];
        // for (const serv of value) {
        //     if(serv["status"] == selStatus)
        //         newTab.push(serv);
            
        // }
        // return newTab
    }
  }

}
