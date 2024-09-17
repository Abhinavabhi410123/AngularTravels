import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarcComponent } from './components/navbarc/navbarc.component';
import { BodyComponent } from './components/body/body.component';
import { RouterModule } from '@angular/router';
import { PagenotfComponent } from './components/pagenotf/pagenotf.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aboutus1Component } from './components/aboutus1/aboutus1.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './components/booking/booking.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { PackagesComponent } from './components/packages/packages.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarcComponent,
    BodyComponent,
    PagenotfComponent,
    RegisterComponent,
    Aboutus1Component,
    ReviewsComponent,
    BookingComponent,
    MybookingsComponent,
    PackagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
