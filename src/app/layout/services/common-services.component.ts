import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from 'src/static_data/staticData';

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
  constructor(private _router:Router) { }

  ngOnInit(): void {
    const currentURL = this._router.url.split('/')[1];
    if(currentURL=='extDev') this.isExternalDev = true;
    if(currentURL=='civilSt') this.isCivilStructure = true;
    if(currentURL=='civilFin') this.isCivilFinishing = true;
  }

}
