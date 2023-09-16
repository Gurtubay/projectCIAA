import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class Payment {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Payment - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Payment - Regular Large Guanaco',
      },
    ])
  }
}
