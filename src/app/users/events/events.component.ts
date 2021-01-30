import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  searchword:any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  searchWord(id:any){
    this.searchword = id.target.value;
  }
  search(){
    this.router.navigate(['../detail', this.searchword], { relativeTo: this.route });
  }
}