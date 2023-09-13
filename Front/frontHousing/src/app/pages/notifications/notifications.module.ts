import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Notifications } from './notifications.component'

const routes = [
  {
    path: '',
    component: Notifications,
  },
]

@NgModule({
  declarations: [Notifications],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Notifications],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationsModule {}
