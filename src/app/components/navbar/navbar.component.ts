import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapse = false;

  public search = '';

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    fromEvent(document, 'keypress')
    .pipe(map((event: any) => event.key as string))
    .subscribe(key => {
      if (key.toLowerCase() === 'enter') {
        this._router.navigate(['/todos'], { queryParams: { search: this.search }});
      }
    });
  }

}
