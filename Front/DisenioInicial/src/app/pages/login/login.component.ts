import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class Login {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Regular Large Guanaco',
      },
    ])
  }
}
