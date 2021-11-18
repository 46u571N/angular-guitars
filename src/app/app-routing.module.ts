import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';

const routes: Routes = [
 { path: '',redirectTo: 'guitars',pathMatch: 'full' },
 { path: 'guitars', component: GuitarListComponent },
 { path: 'about', component:  AboutUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
