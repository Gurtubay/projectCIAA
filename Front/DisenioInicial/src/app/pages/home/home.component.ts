import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawputl: string = ' '
  raw2jmk: string = ' '
  rawxja1: string = ' '
  rawiac7: string = ' '
  raw0rbo: string = ' '
  rawt1w4: string = ' '
  rawetui: string = ' '
  rawt5sc: string = ' '
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
