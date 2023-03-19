import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarraceComponent } from './components/carrace/carrace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    CarlistComponent,
    CardetailComponent,
    CarraceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
