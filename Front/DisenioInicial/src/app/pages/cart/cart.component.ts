import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
})
export class Cart {
  rawq9pd: string = ' '
  raw8471: string = ' '
  rawsmt1: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cart - Regular Large Guanaco')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Cart - Regular Large Guanaco',
      },
    ])
  }
}
