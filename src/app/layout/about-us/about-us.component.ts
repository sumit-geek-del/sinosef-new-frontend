import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/Services/view-services/view.service';
import { StaticData } from 'src/static_data/staticData';
enum ScreenName {
  aboutUs = 'About Us',
  whyChooseUs = 'Why Choose Us'
}
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
  constructor(private _router:Router, private _viewService:ViewService) { }

  ngOnInit(): void {
    const currentURL:string = this._router.url.split('/')[1];
    if(currentURL==='about'){
      this.isAboutUs = true;
      this._viewService.viewCompanyData(ScreenName.aboutUs).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.aboutUsDataArray = res.data;

          }
        }, error:(err)=>{
          this.aboutUsDataArray = StaticData.aboutUsData;
        }
      })

    } 
      
      
    if(currentURL==='whyUs') {
      this.isWhyChooseUs = true;
      this._viewService.viewCompanyData(ScreenName.whyChooseUs).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.whyChooseUsDataArray = res.data;

          }
        }, error:(err)=>{
          this.whyChooseUsDataArray = StaticData.whyChooseUsData;
        }
      })
    }
  }

}
