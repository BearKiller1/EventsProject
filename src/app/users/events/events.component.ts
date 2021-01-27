import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  search(id:any){
    var test = id.target.value;
    this.router.navigate(['../detail', test], { relativeTo: this.route });
  }
}