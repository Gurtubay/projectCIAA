import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class Sidebar {
  @Input()
  text2: string = 'Property List'
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Comments'
  @Input()
  text3: string = 'Schedule'
  @Input()
  text1: string = 'Overview'
  @Input()
  text5: string = 'Income'
  @Input()
  text7: string = 'Request Refund'
  @Input()
  text: string = 'Properties'
  @Input()
  text6: string = 'Dashboard'
  @Input()
  text8: string = 'Statement'
  @Input()
  button: string = '🏠Home'
  constructor() {} 
}
