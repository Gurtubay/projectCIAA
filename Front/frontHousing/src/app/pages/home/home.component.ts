import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw7pro: string = ' '
  raw9aj7: string = ' '
  raw7r9g: string = ' '
  rawews3: string = ' '
  rawoxp7: string = ' '
  rawnd1w: string = ' '
  rawmjoc: string = ' '
  rawflqg: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Home - Regular Large Guanaco',
      },
    ])
  }
}
