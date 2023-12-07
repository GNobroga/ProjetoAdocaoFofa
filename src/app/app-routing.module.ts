import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'todos'
  },
  {
    path: 'todos', component: AnimalsComponent,
  },
  {
    path: 'dogs', component: AnimalsComponent,
  },
  {
    path: 'fishes', component: AnimalsComponent,
  },
  {
    path: 'cats', component: AnimalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
