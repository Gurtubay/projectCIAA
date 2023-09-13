import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Error } from './error.component'

const routes = [
  {
    path: '',
    component: Error,
  },
]

@NgModule({
  declarations: [Error],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Error],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorModule {}
