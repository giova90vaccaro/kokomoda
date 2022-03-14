import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SarticoloComponent } from './sarticolo/sarticolo.component';

const routes: Routes = [
  {path:"", component:StartComponent},
  {path:"Home", component:StartComponent},
  {path:"Sritemss", component:SarticoloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
