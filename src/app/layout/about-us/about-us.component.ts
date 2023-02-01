import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUsDataArray:Array<any> = [
    {
      subheading:'Overview',
      content:'Sinosef Enterprises Pvt. Ltd. is company who has excelled in external development works like roads, services, hardscape, softscape, external Electrical works, boundary Works, beside civil structure & finishing works. This company has done several projects and has delivered excellent projects to the clients. This company was established in 1996 and has been prospering ever since. We build excellence, we deliver excellence. We assure to give the best services to our clients and we have been successful in doing that. We will try assuring the best in the future also. We believe in giving quality and speed. We are the company who u can look upon, rely upon. Quality and speed redefined.'
    },
    {
      subheading:'Director of the company',
      content:'Mr. Avinash Gupta is the director of Sinosef Enterprises Pvt Ltd. He completed his Bachelors’ degree in engineering and Masters’ degree in Management. He has an extensive experience in Construction and property development. He is a professional engineer and proficient man. The company was established by him in the year 1996. He has taken the company to the highest level by his passion of work, ambitious nature and supportive behavior. Today the company is among the best.'
    },
    {
      subheading:'Our Vision',
      content:'To change the industry of conventional real estate construction practices, championing excellence—in craftsmanship, planning and service. The greatest residential architectural marvels of the world shall rise here, defining luxury as a lifestyle lived every day.'
    },
    {
      subheading:'Our Mission',
      content:'Our mission which guides us in our all construction endeavors is a three point promise, meticulously chalked out to ensure that our brand becomes synonymous with the highest standards in construction practices quality – today, tomorrow and in the coming decades. Designing living spaces that exude the tripartite hallmarks of style, understated luxury and homely warmth. A continuous infusion of the best available talents from across the industry – innovative, far sighted visionaries giving Sinosef Real Estate a clear competitive advantage in delivering the best in class. Never losing touch with the poignant realities of our country and thus making every possible effort to empower and make a positive difference to lives of our people and the society at large.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
