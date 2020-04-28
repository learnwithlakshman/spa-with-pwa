import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'mybookings',
        component: MybookingsComponent
      }
    ]
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
