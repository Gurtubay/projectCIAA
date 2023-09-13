import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header2',
  templateUrl: 'header2.component.html',
  styleUrls: ['header2.component.css'],
})
export class Header2 {
  @Input()
  button: string = 'Add Property'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string = '/assets/Images/image%20(6)-200h.png'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
