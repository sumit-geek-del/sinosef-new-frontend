import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { PostsService } from 'src/Services/posts/posts.service';
import Swal from 'sweetalert2';

export const toastMixin = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

 
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {


  careerForm!:FormGroup;
  posts:Array<any> = [];
  fileSelect!:File;
  isFileSelected:boolean = false;
  options: AnimationOptions = {    
    path: 'assets/51108-career-coaching.json'  
  }; 
  constructor(private _fb:FormBuilder, private _postService:PostsService, private _router:Router) { }

  ngOnInit(): void {
    this.createForm();
    this._postService.getPosts().subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          this.posts = res.data;
        }
      }
    })

   
  }
  onAnimate(animationItem: AnimationItem): void {    
    // console.log(animationItem);  
  }

  createForm(){
    this.careerForm = this._fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      address:['', Validators.required],
      phoneNumber:['', Validators.required, Validators.min(10), Validators.max(10)],
      appliedPost:['', Validators.required],
    })
  }

  fileSelected(event:any){
    this.fileSelect = event.target.files[0];
    this.isFileSelected = false;
  }

  submitData(){
    if(this.careerForm.invalid) return;
    if(!this.fileSelect) {
      this.isFileSelected = true;
      return;
    }

    const formData = new FormData();
    formData.append('name', this.careerForm.value.name);
    formData.append('phoneNumber', this.careerForm.value.phoneNumber);
    formData.append('email', this.careerForm.value.email);
    formData.append('address', this.careerForm.value.address);
    formData.append('appliedPost', this.careerForm.value.appliedPost);
    formData.append('resume', this.fileSelect);

    this._postService.submitCareerData(formData).subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
            toastMixin.fire({
              title: 'Thanks For Applying At Sinosef !!'
            })

            this.careerForm.reset();
            this._router.navigate(['/'])
        }
      }, error:(err)=>{
        toastMixin.fire({
          title: 'Oops!! Something Brokedown. Please Try After Some Time !!'
        })
        this._router.navigate(['/'])
      }
    })
  }

}
