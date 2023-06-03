import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/Services/view-services/view.service';
import { toastMixin } from 'src/app/layout/career/career.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _viewService:ViewService) { }
  companyProfileKey:string = '';
  bucketName:string = ''

  ngOnInit(): void {
    this.getCompanyProfileKey();
  }

  // get company profile key
  getCompanyProfileKey(){
     this._viewService.getCompanyProfile().subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          this.companyProfileKey = res.data.Key;
          this.bucketName = res.data.bucket_name;
        }
      }, error:(err)=>{
        console.log(err);
      }
    })
  }
  downloadCompanyProfile(){
    const downloadFileDTO = {
      Key:this.companyProfileKey, 
      bucketName:this.bucketName
    }

    this._viewService.downloadCompanyProfile(downloadFileDTO).subscribe({
      next:(res)=>{
        let a = document.createElement('a');
        a.href=res.fileUrl;
        a.click();
        toastMixin.fire({
          title: 'Company Profile Downloaded !!'
        })
      }, error:(err)=>{
        toastMixin.fire({
          title: 'Something went wrong !!'
        })
      }
    })
  }

}
