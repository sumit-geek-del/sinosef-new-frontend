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
  },
  {
    path:'images', loadChildren:() => import('src/app/layout/gallery/gallery.module').then((m)=>{return m.GalleryModule}).catch((err)=>{
      throw new Error(`Error in App routing module of images module`);
    })
  },
  {
    path:'video', loadChildren:()=> import('src/app/layout/gallery/gallery.module').then((m)=>{return m.GalleryModule}).catch((err)=>{
      throw new Error(`Error in App routing module of videos gallery`);
    })
  },
  {
    path:'ongoing', loadChildren:()=> import('src/app/layout/projects/projects.module').then((m)=>{return m.ProjectsModule}).catch((err)=>{
      throw new Error(`Error in App Routing module of ongoing projects`);
    })
  },
  {
    path:'completed', loadChildren:()=> import('src/app/layout/projects/projects.module').then((m)=>{
      return m.ProjectsModule
    }).catch((err)=>{throw new Error(`Error in App Routing Module of completed Projects`)})
  },
  {
    path:'certificates', loadChildren:()=> import('src/app/layout/gallery/gallery.module').then((m)=>{
      return m.GalleryModule
    }).catch((err)=> {throw new Error(`Error in App Routing Module of Certificates`)})
  },
  {
    path:'whyUs', loadChildren:()=> import('src/app/layout/about-us/about-us.module').then((m)=>{
      return m.AboutUsModule
    }).catch((err)=> {throw new Error(`Error in App Routing Module of why choose us`)})
  },
  {
    path:'extDev', loadChildren:()=> import('src/app/layout/services/services.module').then((m)=>{
      return m.ServicesModule
    }).catch((err)=> {throw new Error(`Error in App Routing Module of External Development`)})
  },
  {
    path:'civilSt', redirectTo:'extDev'
  },
  {
    path:'civilFin', redirectTo:'extDev'
  },
  {
    path:'ourClients', loadChildren:()=> import('src/app/layout/our-clients/our-clients.module').then((m)=>{
      return m.OurClientsModule
    }).catch((err)=> {throw new Error(`Error in App Routing Module of Our Clients ${err}`)})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
