import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    Aos.init();
  }
  routeToComponent(path:string){
    const navigationExtras:NavigationExtras={
     
      skipLocationChange:true
    }

    this._router.navigate([path], navigationExtras);
  }


}
