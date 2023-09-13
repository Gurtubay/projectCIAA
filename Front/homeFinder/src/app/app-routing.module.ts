import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PublicarComponent } from './Components/publicar/publicar.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'publicar', component: PublicarComponent},
  { path:'**', redirectTo:'login', pathMatch:'full' },
  { path:'', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
