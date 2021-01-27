import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService} from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id:any;
  data:any;
  sub:any;
  constructor(private route:ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): any {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sub = this.Obj.GetById(this.id).subscribe( (tmp:any) =>{
      this.data = tmp;
      console.log(this.data);
    });
  }

}
