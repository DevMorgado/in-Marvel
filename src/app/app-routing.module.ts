import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresComponent } from './characteres/characteres.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/characters', pathMatch:'full'
  },
  {
    path:'characters', component: CharacteresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
