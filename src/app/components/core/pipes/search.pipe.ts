import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allnotes:any[], searchword:string):any[]{
    return allnotes.filter(note=>note.title.toLowerCase().includes(searchword.toLowerCase()));
  }

}
