import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';


const routes: Routes = [
  { path: 'login', component: AppComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }