import { SrcategoriaComponent } from './srcategoria/srcategoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SarticoloComponent } from './sarticolo/sarticolo.component';
import { SrvenditeComponent } from './srvendite/srvendite.component';
import { IncassiComponent } from './incassi/incassi.component';

const routes: Routes = [
  {path:"", component:StartComponent},
  {path:"Home", component:StartComponent},
  {path:"Sritemss", component:SarticoloComponent},
  {path:"RicercaVendite", component:SrvenditeComponent},
  {path:"VenditeCategoria", component:SrcategoriaComponent},
  {path:"Incasso", component:IncassiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
