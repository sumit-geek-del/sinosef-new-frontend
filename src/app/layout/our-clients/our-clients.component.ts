import { Component, OnInit } from '@angular/core';
import { StaticData } from 'src/static_data/staticData';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  ourClientsData:Array<any>=StaticData.ourClientsData;
  constructor() { }

  ngOnInit(): void {
  }

}
