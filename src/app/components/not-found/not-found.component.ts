import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router) {
  }

  backToStartPage() {
    this.router.navigate(['']).catch(error => {
      console.log("Failed to navigate the user " + error);
    });
  }
}
