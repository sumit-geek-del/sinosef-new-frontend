import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/Services/view-services/view.service';
import { StaticData } from 'src/static_data/staticData';
enum ScreenName{
  clients = 'Clients'
}
@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  ourClientsData:Array<any>=StaticData.ourClientsData;
  clientDataArr:Array<any> = []
  constructor(private _viewService:ViewService) { }

  ngOnInit(): void {
    this._viewService.viewClientsData(ScreenName.clients).subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          this.clientDataArr = res.data;
        }
      },error:(err)=>{
        this.clientDataArr = this.ourClientsData;
      }
    })
  }

}
