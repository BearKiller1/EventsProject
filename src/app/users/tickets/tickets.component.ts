import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  data:any;
  test = false;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.Obj.GetAll().subscribe( (tmp:any) =>{
      this.data = tmp.results;
    });
  }
}
