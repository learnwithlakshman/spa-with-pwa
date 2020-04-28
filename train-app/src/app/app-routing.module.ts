import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mybookings',
    component: MybookingsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**', component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
