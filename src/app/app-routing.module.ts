import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren: ()=> import('./layout/layout.module').then((m)=> {return m.LayoutModule}).catch((err)=>{throw new Error(`Error in app routing module of layout ${err}`)})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
