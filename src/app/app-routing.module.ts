import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartgrafComponent} from './components/chartgraf/chartgraf.component';
import { Chart2Component } from './components/chart2/chart2.component'

const routes: Routes = [
  {path:'',component:ChartgrafComponent},
  {path:'chart',component:ChartgrafComponent},
  {path:'chart2',component:Chart2Component},
  {path:'**',component:ChartgrafComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
