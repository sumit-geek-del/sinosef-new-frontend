import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren:()=> import('src/app/layout/layout.module').then((m)=>{return m.LayoutModule}).catch((err)=>{
      throw new Error(`Error in App routing module of layout path ${err}`);
    })
  },
  {
    path:'contact', loadChildren:()=> import('src/app/layout/contact-us/contact-us.module').then((m)=>{return m.ContactUsModule}).catch((err)=>{
      throw new Error(`Error in App routing module of contact us module`);
    })
  },
  {
    path:'about', loadChildren:()=> import('src/app/layout/about-us/about-us.module').then((m)=>{return m.AboutUsModule}).catch((err)=>{
      throw new Error(`Error in App routing module of about us module`);
    })
  },
  {
    path:'career', loadChildren:()=> import('src/app/layout/career/career.module').then((m)=>{return m.CareerModule}).catch((err)=>{
      throw new Error(`Error in App Routing module of career module`);
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
