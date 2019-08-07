import { Component, OnInit } from '@angular/core';
import {QuartzService} from 'src/app/quartz/quartz.service'


@Component({
  selector: 'app-quartz',
  templateUrl: './quartz.component.html',
  styleUrls: ['./quartz.component.css']
})
export class QuartzComponent implements OnInit {

  constructor(private _http: QuartzService) { }

  ngOnInit() {
    this.showQuartz()
  }
  Quartz=[]
showQuartz(){
  this._http.getQuartz()

  .subscribe(
    response => {



      this.Quartz = response
      console.log("RefDet" + JSON.stringify(response));


    });
}


}
