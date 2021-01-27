import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DetailComponent } from './detail/detail.component';
import { EventnotfoundComponent } from './eventnotfound/eventnotfound.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';

import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [AboutComponent, EventsComponent, TicketsComponent, DetailComponent, EventnotfoundComponent, CarouselComponent, SearchComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule
  ]
})
export class UsersModule { }
