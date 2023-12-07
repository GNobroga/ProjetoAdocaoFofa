import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import pets_data from 'src/app/data/pets_data';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnDestroy {

  public animals = pets_data;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        let type: string | undefined = undefined;
        const pathVariable = _router.url.replace('/', '');

        switch (pathVariable) {
          case 'dogs':
            type = 'dog';
            break;
          case 'cats':
            type = 'cat';
            break;
          case 'fishes':
            type = 'fish';
            break;
        }
        this.animals = this.filterAnimalsPerType(type);

        const search = _route.snapshot.queryParams['search'];
   
        if (search && search.trim()) {
          this.animals = this.filterAnimalsPerSearch(search);
        }

      }
    });

  }

  private filterAnimalsPerSearch(search: string) {
    if (!search.trim()) return pets_data;
    return pets_data.filter(animal =>
      animal.name.toLowerCase().includes(search.toLowerCase()) ||
      animal.color.toLowerCase().includes(search.toLowerCase()) ||
      animal.sex.toLowerCase().includes(search.toLowerCase())
    );
  }

  private filterAnimalsPerType(type: string | undefined): Pet[] {
    if (!type) return pets_data;
    return pets_data.filter(animal => animal.type === type);
  }

  public ngOnDestroy(): void {

  }

}
