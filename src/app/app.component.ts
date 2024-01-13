import { Component,OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  title = 'reactiveDrivenForm';

  genderData = [
    {
      for: 'male',
      id: 'male',
      label: 'Male',
      value: 'male',
    },
    {
      for: 'female',
      id: 'female',
      label: 'Female',
      value: 'female',
    },
    {
      for: 'others',
      id: 'others',
      label: 'Others',
      value: 'others',
    },
  ];


  formRef:FormGroup;
  formData:any;
  showContent:boolean=false;


  ngOnInit() {
    this.formRef=new FormGroup({
      firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)/*,Validators.pattern("")*/]),
      mob:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      dob:new FormControl("",Validators.required),
      gender:new FormControl("male"),
      country:new FormControl("India",Validators.required),
      state:new FormControl("",[Validators.required,Validators.minLength(3)]),
      pincode:new FormControl("",[Validators.required,Validators.minLength(3)]),
      street:new FormControl("",[Validators.required,Validators.minLength(3)])
    })
  }

  handleSubmit() {
    console.log(this.formRef);
    this.formData=this.formRef.value
    this.showContent=this.formRef.valid;
    this.formRef.reset();
    this.formRef.patchValue({
      gender:"male",
      country:"India"
    })
  }
}
