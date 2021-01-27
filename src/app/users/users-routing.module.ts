import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DetailComponent } from './detail/detail.component';
import { EventnotfoundComponent } from './eventnotfound/eventnotfound.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'events',
    component:EventsComponent,
    children:[
      {
        path:"search/:id",
        component:SearchComponent,
      }
    ]
  },
  {
    path:"detail/:id",
    component:DetailComponent,
  },
  {
    path:'tickets',
    component:TicketsComponent
  },
  {
    path:"**",
    component:EventnotfoundComponent,
  },
  {
    path:"",
    redirectTo:"events",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
