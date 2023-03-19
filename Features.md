### Features to put in

Show default car list when navigating to the page

### Features to highlight

Add directory structure picture: <pre>...element 1/2/3</pre>
Programmatically navigation: <pre>this.router.navigate([''])</pre>
Routes used properly with fallback to not found <pre>const appRoutes: Route[] = [</pre>

Router link with query params
<pre>
        [routerLink]="['/carlist']"
        [queryParams]="{id: carIndex}"
</pre>

Using subjects:
<pre>
 carSelectedSubject = new Subject<Car>()
</pre>

Children path demonstration:
<pre>
  {path: 'carlist', component: CarlistComponent, children:[
      {path: ':id', component: CarlistComponent},
    ]},
</pre>

Directives demonstration
<pre>
<div *ngIf="selectedCar">
</pre>
