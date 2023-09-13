import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Payment } from './payment.component'

const routes = [
  {
    path: '',
    component: Payment,
  },
]

@NgModule({
  declarations: [Payment],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Payment],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaymentModule {}
