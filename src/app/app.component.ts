import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public slideInterval = 2000;
  public activeSlideIndex = 0;
  public pageCurrentTitle = 'Todos os animais disponíveis para adoção';

  public slides: Array<{ image: string, text: string }> = [
    { image: 'assets/images/cats-carousel.jpeg', text: 'Gatos'},
    { image: 'assets/images/dogs-carousel.jpeg', text: 'Cachorros'},
    { image: 'assets/images/fishes-carousel.jpeg', text: 'Peixes'},
  ];

  private _pageTitles: Array<{ path: RegExp, title: string }> = [
    { path: /\/todos/g, title: 'Todos os animais disponíveis para adoção' },
    { path: /\/dogs/g, title: 'Doguinhos disponíveis para adoção' },
    { path: /\/cats/g, title: 'Gatinhos disponíveis para adoção' },
    { path: /\/fishes/g, title: 'Peixinhos disponíveis para adoção' },
  ];

  constructor(private readonly _router: Router) {
    _router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.pageCurrentTitle = this._pageTitles
          .find(pageTitle => pageTitle.path.test(_router.url))?.title ??
          'Todos os animais disponíveis para adoção';
      }

    });

  }

}
