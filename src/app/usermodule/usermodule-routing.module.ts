import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AboutComponent } from './about/about.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'userhome',
    pathMatch:'full'
  },
  {
    path:'usermaster',
    component:UsermasterComponent,
    children:[
      {
        path:'propertydetails',
        component:PropertydetailsComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      }
    ]
  },
  {
    path:'userhome',
    component:UserhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
