import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FormPonenteComponent } from './components/forms/form-ponente/form-ponente.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ponente', component: FormPonenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
