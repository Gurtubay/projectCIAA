import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  image_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  Register: string = 'Register'
  @Input()
  image_src: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  text: string = 'HomeFinder'
  constructor() {}
}
