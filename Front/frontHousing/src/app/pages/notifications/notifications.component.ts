import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.css'],
})
export class Notifications {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Notifications - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Notifications - Regular Large Guanaco',
      },
    ])
  }
}
