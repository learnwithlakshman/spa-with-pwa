import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MybookingsComponent,
    EmptyRouteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/train-app' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
