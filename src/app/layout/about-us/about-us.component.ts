import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from 'src/static_data/staticData';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  isAboutUs:boolean = false;
  isWhyChooseUs:boolean = false;
  aboutUsDataArray:Array<any> = StaticData.aboutUsData;
  whyChooseUsDataArray:Array<any>= StaticData.whyChooseUsData;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    const currentURL:string = this._router.url.split('/')[1];
    if(currentURL==='about') this.isAboutUs = true;
    if(currentURL==='whyUs') this.isWhyChooseUs = true;
  }

}
