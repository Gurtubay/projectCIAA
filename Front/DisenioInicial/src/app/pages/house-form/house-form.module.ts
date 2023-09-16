import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { HouseForm } from './house-form.component'

const routes = [
  {
    path: '',
    component: HouseForm,
  },
]

@NgModule({
  declarations: [HouseForm],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [HouseForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HouseFormModule {}
