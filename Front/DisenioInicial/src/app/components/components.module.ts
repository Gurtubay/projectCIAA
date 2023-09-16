import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { Header2 } from './header2/header2.component'
import { Header } from './header/header.component'
import { Sidebar } from './sidebar/sidebar.component'
import { Search } from './search/search.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'

@NgModule({
  declarations: [
    Footer,
    NavigationLinks,
    Header2,
    Header,
    Sidebar,
    Search,
    NavigationLinks1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Footer,
    NavigationLinks,
    Header2,
    Header,
    Sidebar,
    Search,
    NavigationLinks1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
