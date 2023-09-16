import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'house-form',
  templateUrl: 'house-form.component.html',
  styleUrls: ['house-form.component.css'],
})
export class HouseForm {
  raw718m: string = ' '
  rawfpoc: string = ' '
  rawgx4y: string = ' '
  rawtl0x: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('HouseForm - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'HouseForm - Regular Large Guanaco',
      },
    ])
  }
}
