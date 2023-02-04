import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  divSide:string = 'right';
  divLeftSide:string="left"
  imagesArray:Array<any> = [
    {
      src:'assets/Gallery/gallery1.jpg',
      name:'Tata',
      type:'Hoses Design'
    },
    {
      src:'assets/Gallery/11.jpg',
      name:'CHD',
      type:'Hoses Design'
    },
    {
      src:'assets/Gallery/gallery3.jpg',
      name:'IREO',
      type:'Hoses Design'
    },
    {
      src:'assets/Gallery/gallery4.jpg',
      name:'DLF',
      type:'Hoses Design'
    },
    {
      src:'assets/Gallery/gallery5.jpg',
      name:'DLF',
      type:'Hoses Design'
    }
  ];
  currentURL:string = '';
  showImage:boolean = false;
  showVideo:boolean=false;
  constructor(private _route:Router) { 
  
  }

  ngOnInit(): void {
    this.currentURL = this._route.url.split('/')[1];
    if(this.currentURL==='images') this.showImage = true;
    if(this.currentURL === 'video') this.showVideo = true;
  }

}
