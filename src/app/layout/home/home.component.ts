import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/Services/view-services/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  homeData:Array<any> = []
  constructor(private _viewService:ViewService) { }

  ngOnInit(): void {

    this._viewService.viewHomePageData().subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          this.homeData = res.data;
        }
      },
      error:(err)=>{
        throw new Error(err);
      }
    })

  }

}
