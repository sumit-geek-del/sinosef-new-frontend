import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/Services/posts/posts.service';
import { toastMixin } from '../career/career.component';
import { Router } from '@angular/router';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { ViewService } from 'src/Services/view-services/view.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm!:FormGroup;
  companyProfileKey:string = '';
  bucketName:string = ''

  options: AnimationOptions = {    
    path: 'assets/51892-career-guidance.json'  
  };  

  constructor(private _fb:FormBuilder, private _postService:PostsService, private _router:Router, private _viewService:ViewService) { }

  ngOnInit(): void {
    this.createForm();
    this.getCompanyProfileKey();

 

  }

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

  createForm(){
    this.contactUsForm = this._fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phoneNo:['', Validators.required],
      message:['', Validators.required]
    })
  }

  getCompanyProfileKey(){
    this._viewService.getCompanyProfile().subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          this.companyProfileKey = res.data.Key;
          this.bucketName = res.data.bucket_name;
        }
      }, error:(err)=>{
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

  submitContactUs(){
    if(this.contactUsForm.invalid) return ;

    this._postService.submitContactUsDetails(this.contactUsForm.value).subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          toastMixin.fire({
            title:'Thanks For Contacting.'
          })

          this._router.navigate(['/'])
        }
      }, error:(err)=>{
        toastMixin.fire({
          title:'OOps!! Something Broken. Please Try After Some time'
        })
        throw new Error(err);
      }
    })
    
  }

}
