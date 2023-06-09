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


## Known Bugs
1.
Centering rows is done with
<pre>
  <div class="col-xs-4"></div>
  <div class="col-xs-4"></div>
  <div class="col-xs-4"></div>
</pre>

construct, could be done better

2.
Deleting car by name might produce unwanted result if 2 cars have the same name

3. Speed can be decreased below zero
4. There are test failures....
5. Some of the unit tests do not test if we subscribe properly to the right observable
6. NotFoundComponent unit test is pending!
7. Tune car dropbox does not close on clicking somewhere else
