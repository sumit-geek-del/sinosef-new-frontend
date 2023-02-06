import { AfterContentChecked, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit, AfterContentChecked {

  @Input() projectDetails!:Array<any>;
  @ViewChild('content_div', {static:true}) contentDiv!:ElementRef;


  constructor(private _renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
  
  }

}
