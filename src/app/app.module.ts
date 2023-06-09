import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AuthComponent} from './components/auth/auth.component';
import {CarlistComponent} from './components/carlist/carlist.component';
import {CardetailComponent} from './components/cardetail/cardetail.component';
import {CarraceComponent} from './components/carrace/carrace.component';
import {Route, RouterModule, RouterOutlet} from "@angular/router";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DropdownDirective} from "./components/shared/dropdown.directive";
import {AddCarComponent} from './components/add-car/add-car.component';
import {FormsModule} from "@angular/forms";


const appRoutes: Route[] = [
  {path: '', component: CarlistComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'carlist', component: CarlistComponent},
  {path: 'carrace', component: CarraceComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    CarlistComponent,
    CardetailComponent,
    CarraceComponent,
    NotFoundComponent,
    DropdownDirective,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
