import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    this._router.navigate([path], {skipLocationChange:true});
  }


}
