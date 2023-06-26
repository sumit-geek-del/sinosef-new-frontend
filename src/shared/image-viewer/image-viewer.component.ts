import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() imageSrc!:string;
  @Output() close =new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  closeImage(){
    this.close.emit(true);
  }
}
