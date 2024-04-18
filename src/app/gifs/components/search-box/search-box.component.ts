import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  template: `
    <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
          d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Buscar gifs..." type="text" name="search" (keyup.enter)="searchTag()" #txtTagInput/>
    </label>`

})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  constructor( private gifsService:GifsService) {
  }
  searchTag(){
    const newTag= this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';

  }
}
