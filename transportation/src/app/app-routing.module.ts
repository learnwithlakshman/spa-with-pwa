import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ConfigureComponent } from './configure/configure.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  component:ConfigureComponent
},
{
  path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
