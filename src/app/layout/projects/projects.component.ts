import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  onGoingProjectsHeading:string = 'Few OnGoing Projects';
  completedProjectsHeading:string="Completed Projects";
  isCompleted:boolean = false;
  isOnGoing:boolean = false;
  onGoingProjectsList:Array<any> = [{
      src:'assets/Gallery/gallery3.jpg',
      name:"Godrej Nature Plus- Package-1 & 2",
      client:'Godrej HighView LLP',
      scope:'External Development Work',
      address:'Sector 72 Gurgaon'

    },
    {
      src:'assets/Gallery/gallery1.jpg',
      name:"Emaar India-SCO 75A",
      client:'Emaar India',
      scope:'External Development Work',
      address:'Sector 32 Gurgaon'
    },
    {
      src:'assets/Gallery/11.jpg',
      name:"AR LandCraft LLP",
      client:'Godrej-AR Landcraft LLP',
      scope:'External Development Work',
      address:'Sector 64 Gurgaon'
    },
    {
      src:'assets/Gallery/gallery4.jpg',
      name:"Land Kart Builders Pvt Ltd",
      client:'Tata Land Kart Builders Pvt LTD',
      scope:'External Development Work',
      address:'Sector 32 Gurgaon'
    },
    {
      src:'assets/Gallery/gallery5.jpg',
      name:'Aipl Joy Gallery',
      client:'AIPL',
      scope:'HardScape Work',
      address:'Sector 12 Gurgaon'
    },
    {
      src:'assets/Gallery/gallery6.jpg',
      name:'Wave City-Veridia',
      client:'UppalChadhahi-tech Developers',
      scope:'HardScape Work',
      address:'Faridabad'
    }
  ];

  completedProjectsList:Array<any> = [
    {
      src:'assets/Gallery/gallery3.jpg',
      name:"Brookfield-Candor techspace N-1",
      client:'ShantiniketanProperties Pvt Ltd',
      scope:'External Development Work',
      address:'Sector 72 Gurgaon'

    },
    {
      src:'assets/Gallery/gallery1.jpg',
      name:"WondercityBuild Pvt Ltd",
      client:'Godrej Properties',
      scope:'Hardscape Work',
      address:'Sector 32 Gurgaon'
    },
    {
      src:'assets/Gallery/11.jpg',
      name:"EMAAR- PALM TERRACE SELECTS",
      client:'EMAAR MGF LAND LIMITED',
      scope:'External Development Work',
      address:'Sector 64 Gurgaon'
    },
    {
      src:'assets/Gallery/gallery4.jpg',
      name:"TATA-PRIMANTI",
      client:'Tata',
      scope:'External Development Work',
      address:'Sector 32 Gurgaon'
    },
    {
      src:'assets/Gallery/gallery5.jpg',
      name:'Ireo Victor Velly',
      client:'IREO',
      scope:'External Develpment Work',
      address:'Sector 12 Gurgaon'
    },
  ]
  constructor(private _router:Router) { }

  ngOnInit(): void {
    const currentURL:string = this._router.url.split('/')[1];
    if(currentURL==='ongoing') this.isOnGoing = true;
    if(currentURL==='completed') this.isCompleted = true;
  }

}
