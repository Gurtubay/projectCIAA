import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links1',
  templateUrl: 'navigation-links1.component.html',
  styleUrls: ['navigation-links1.component.css'],
})
export class NavigationLinks1 {
  @Input()
  text2: string = 'Property'
  @Input()
  text: string = 'Notifications'
  @Input()
  rootClassName: string = ''
  @Input()
  text1: string = 'My Properties'
  constructor() {}
}
