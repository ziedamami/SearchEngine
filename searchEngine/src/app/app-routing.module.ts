import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './Components/display/display.component';
import { SearchComponent } from './Components/search/search.component';


const routes: Routes = [
  {path: 'results', component: DisplayComponent },
  {path: '', component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
