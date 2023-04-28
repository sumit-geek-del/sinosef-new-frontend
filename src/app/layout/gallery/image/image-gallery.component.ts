import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/Services/view-services/view.service';
enum ScreenName  {
  galleryImages ='Gallery Images',
  galleryVideos = 'Gallery Videos'
}
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
  showCertificates:boolean = false;
  certificatesArray:Array<any> = [
    {
      src:'assets/certificates/1.jpg'
    },
    {
      src:'assets/certificates/2.jpg'
    },
    {
      src:'assets/certificates/3.jpg'
    },
    {
      src:'assets/certificates/6.jpg'
    }
  ]

  certificatesList:Array<any> = [];
  galleryImagesList:Array<any> = [];
  galleryVideosList:Array<any> = []
  constructor(private _route:Router, private _viewService:ViewService) { 
  
  }

  ngOnInit(): void {
    this.currentURL = this._route.url.split('/')[1];
    if(this.currentURL==='images'){
      this.showImage = true;
      this._viewService.viewClientsData(ScreenName.galleryImages).subscribe({
        next:(res)=>{
            if(res.code === 'SUC-200'){
              this.galleryImagesList = res.data;
            }
        }, error:(err)=>{
          this.galleryImagesList = this.imagesArray;
        }
      })
    } 
    if(this.currentURL === 'video'){
      this.showVideo = true;
      this._viewService.viewClientsData(ScreenName.galleryVideos).subscribe({
        next:(res)=>{
            if(res.code === 'SUC-200'){
              this.galleryVideosList = res.data;
            }
        }, error:(err)=>{
          this.galleryVideosList = this.imagesArray;
        }
      })
    } 
    if(this.currentURL === 'certificates') {
      this.showCertificates = true;

      this._viewService.getCertificatesData().subscribe({
        next:(res)=>{
          if(res.code === 'SUC-200'){
            this.certificatesList = res.data;
          }
        }, error:(err)=>{
          this.certificatesList = this.certificatesArray;
        }
      })
    }
  }

}
