import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class Search {
  @Input()
  rootClassName: string = ''
  @Input()
  textinput_placeholder: string = 'Search for properties'
  constructor() {}
}
