import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/Services/view-services/view.service';
import { StaticData } from 'src/static_data/staticData';


enum ScreenName {
  externalDev='External Development',
  civilStructure = 'Civil Structure',
  civilFinishing = 'Civil Finishing'
}


@Component({
  selector: 'app-common-services',
  templateUrl: './common-services.component.html',
  styleUrls: ['./common-services.component.scss']
})
export class CommonServicesComponent implements OnInit {

  isExternalDev:boolean = false;
  isCivilStructure:boolean = false;
  isCivilFinishing:boolean = false;
  aboutUsDataArray:Array<any>= StaticData.servicesData;
  externalDevData:Array<any> = [];
  civilStructureData:Array<any> = [];
  civilFinishingData:Array<any> = [];
  constructor(private _router:Router, private _viewService:ViewService) { }

  ngOnInit(): void {
    const currentURL = this._router.url.split('/')[1];
    if(currentURL=='extDev') {
      this.isExternalDev = true;
      this._viewService.viewCompanyData(ScreenName.externalDev).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.externalDevData = res.data;
          }
        }, error:(err)=>{
          this.externalDevData= StaticData.servicesData;
        }
      })

    }
    if(currentURL=='civilSt') {
      this.isCivilStructure = true;
      this._viewService.viewCompanyData(ScreenName.civilStructure).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.civilStructureData = res.data;
          }
        }, error:(err)=>{
          this.civilStructureData= StaticData.servicesData;
        }
      })

    }
    if(currentURL=='civilFin'){
      this.isCivilFinishing = true;
      this._viewService.viewCompanyData(ScreenName.civilFinishing).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.civilFinishingData = res.data;
          }
        }, error:(err)=>{
          this.civilFinishingData= StaticData.servicesData;
        }
      })
    } 
  }

}
