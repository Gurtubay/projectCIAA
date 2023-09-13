import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  text: string = 'HomeFinder'
  @Input()
  rootClassName: string = ''
  @Input()
  text1: string = '© 2021 HomeFinder, All Rights Reserved.'
  constructor() {}
}
