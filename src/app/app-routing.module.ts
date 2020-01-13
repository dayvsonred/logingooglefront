import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { Teste2Component } from './teste2/teste2.component';

const routes: Routes = [
   { path: 'ini', pathMatch: 'full', component: InitialComponent  },
   { path: 't2', pathMatch: 'full', component: Teste2Component  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
