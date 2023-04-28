import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/Services/view-services/view.service';
enum ProjectType {
  ongoing = 'OnGoing',
  completed = 'Completed'

}
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

  ongoingProjectsArray:Array<any> = [];
  completedProjectsArray:Array<any> = [];
  constructor(private _router:Router, private _viewService:ViewService) { }

  ngOnInit(): void {
    const currentURL:string = this._router.url.split('/')[1];
    if(currentURL==='ongoing') {
      this.isOnGoing = true;
      this._viewService.viewProjectsData(ProjectType.ongoing).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.ongoingProjectsArray = res.data;
          }
        }, error:(err)=>{
          this.ongoingProjectsArray = this.onGoingProjectsList;
          throw new Error(err);

        }
      })

     }
    if(currentURL==='completed'){
      this.isCompleted = true;
      this._viewService.viewProjectsData(ProjectType.completed).subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.completedProjectsArray = res.data;
          }
        }, error:(err)=>{
          this.completedProjectsArray = this.completedProjectsList;
          throw new Error(err);

        }
      })
    } 
  }

}
