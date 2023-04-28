import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/Services/posts/posts.service';
import { toastMixin } from '../career/career.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm!:FormGroup;

  constructor(private _fb:FormBuilder, private _postService:PostsService, private _router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.contactUsForm = this._fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phoneNo:['', Validators.required],
      message:['', Validators.required]
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
